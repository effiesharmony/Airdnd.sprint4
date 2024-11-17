import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { orderService } from "../services/order/order.service.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function DashboardReservation() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const loggedinUser =
      JSON.parse(sessionStorage.getItem("loggedinUser")) ||
      JSON.parse(localStorage.getItem("loggedinUser"));

    if (loggedinUser) {
      orderService
        .query({ hostId: loggedinUser._id })
        .then((orders) => setOrders(orders));
    }
  }, []);

  const handleStatusChange = (orderId, status) => {
    const updatedOrders = orders.map((order) => {
      if (order._id === orderId) {
        order.status = status;
        orderService.saveOrder(order);
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const getStatusCounts = () => {
    const statusCounts = { approved: 0, rejected: 0, pending: 0 };
    if (orders) {
      orders.forEach((order) => {
        statusCounts[order.status] = (statusCounts[order.status] || 0) + 1;
      });
    }
    return statusCounts;
  };

  const getStayBookingCounts = () => {
    const stayBookingCounts = {};
    if (orders) {
      orders.forEach((order) => {
        const stayName = order.stay.name;
        stayBookingCounts[stayName] = (stayBookingCounts[stayName] || 0) + 1;
      });
    }
    return stayBookingCounts;
  };

  const statusCounts = getStatusCounts();
  const stayBookingCounts = getStayBookingCounts();

  const pieData = {
    labels: ["Approved", "Rejected", "Pending"],
    datasets: [
      {
        label: "Order Status",
        data: [
          statusCounts.approved,
          statusCounts.rejected,
          statusCounts.pending,
        ],
        backgroundColor: ["#4CAF50", "#FF0000", "#FFCE56"],
        hoverBackgroundColor: ["#4CAF50", "#FF0000", "#FFCE56"],
      },
    ],
  };

  const stayPieData = {
    labels: Object.keys(stayBookingCounts),
    datasets: [
      {
        label: "Stay Bookings",
        data: Object.values(stayBookingCounts),
        backgroundColor: [
          "#1E90FF",
          "#000000",
          "#32CD32",
          "#FFD700",
          "#8A2BE2",
        ],
        hoverBackgroundColor: [
          "#1E90FF",
          "#000000",
          "#32CD32",
          "#FFD700",
          "#8A2BE2",
        ],
      },
    ],
  };

  if (!orders) return <div>Loading...</div>;

  return (
    <div className="dashboard-reservation">
      <div className="dashboard-links">
        <Link to="/dashboard/listings" className="listings">
          listings
        </Link>
        <Link to="/dashboard/reservations" className="reservations">
          reservations
        </Link>
      </div>
      <div className="charts-container">
        <div className="status-chart">
          <h3>Status Distribution</h3>
          <Pie data={pieData} />
        </div>
        <div className="stay-chart">
          <h3>Stay Bookings</h3>
          <Pie data={stayPieData} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Booker</th>
            <th>Stay Name</th>
            <th>ReservedDates</th>
            <th>Guests</th>
            <th>Price / night</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{new Date(order.startDate).toLocaleDateString()}</td>
              <td>{order.guest.fullname}</td>
              <td>{order.stay.name}</td>
              <td>
                {new Date(order.startDate).toLocaleDateString()} -{" "}
                {new Date(order.endDate).toLocaleDateString()}
              </td>
              <td>
                {order.guests.adults} Adults, {order.guests.kids} Kids
              </td>
              <td>${numberWithCommas(order.stay.price)}</td>
              <td>${numberWithCommas(order.totalPrice)}</td>
              <td
                className="status"
                style={{
                  color:
                    order.status === "approved"
                      ? "#4CAF50"
                      : order.status === "rejected"
                      ? "#FF0000"
                      : "#FFCE56",
                }}
              >
                {order.status}
              </td>
              <td>
                <div className="action-btns">
                  <button
                    className="approve-btn"
                    onClick={() => handleStatusChange(order._id, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => handleStatusChange(order._id, "rejected")}
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
