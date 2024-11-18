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

  const getStatusCounts = () => {
    const statusCounts = { pending: 0, approved: 0, rejected: 0 };
    if (orders) {
      orders.forEach((order) => {
        statusCounts[order.status] = (statusCounts[order.status] || 0) + 1;
      });
    }
    return statusCounts;
  };

  const stayBookingCounts = getStayBookingCounts();
  const statusCounts = getStatusCounts();

  const totalReservations =
    statusCounts.pending + statusCounts.approved + statusCounts.rejected;

  const pendingPercent = Math.round(
    (statusCounts.pending / totalReservations) * 100
  );
  const approvedPercent = Math.round(
    (statusCounts.approved / totalReservations) * 100
  );
  const rejectedPercent = Math.round(
    (statusCounts.rejected / totalReservations) * 100
  );

  const stayPieData = {
    labels: Object.keys(stayBookingCounts),
    datasets: [
      {
        label: "Stay Bookings",
        data: Object.values(stayBookingCounts),
        backgroundColor: ["#6A0DAD", "#0000FF", "#1E90FF", "#00CED1"],
        hoverBackgroundColor: ["#6A0DAD", "#0000FF", "#1E90FF", "#00CED1"],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  if (!orders) return <div>Loading...</div>;
  return (
    <div className="dashboard-reservation">
      <div className="dashboard-links">
        <Link to="/dashboard/listings" className="link">
          Listings
        </Link>
        <Link to="/dashboard/reservations" className="link-r">
          Reservations
        </Link>
      </div>
      <div className="charts-container">
        <div className="chart-card">
          <h3>Stays Booked</h3>
          <div className="pie-chart-container">
            <Pie data={stayPieData} options={pieOptions} />
          </div>
        </div>
        <div className="chart-card">
          <h3>Reservation Status</h3>
          <div className="reservation-status">
            <div className="status-item">
              <span>Pending</span>
              <span style={{ color: "#FFCE56" }}>
                {statusCounts.pending} ({pendingPercent}%)
              </span>
            </div>
            <div className="status-item">
              <span>Approved</span>
              <span style={{ color: "#4CAF50" }}>
                {statusCounts.approved} ({approvedPercent}%)
              </span>
            </div>
            <div className="status-item">
              <span>Rejected</span>
              <span style={{ color: "#FF0000" }}>
                {statusCounts.rejected} ({rejectedPercent}%)
              </span>
            </div>
          </div>
          <div className="actionable-insights">
            <h4>Actionable Insights</h4>
            {statusCounts.pending > statusCounts.approved ? (
              <p>Most reservations are pending. Follow up to increase approvals!</p>
            ) : (
              <p>Approval rates are steady. Great work maintaining quality bookings!</p>
            )}
            {statusCounts.rejected > 0 && (
              <p>
                {statusCounts.rejected} rejected reservations. Consider reviewing
                pricing or policies.
              </p>
            )}
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr className="table-headers">
            <th>Booker</th>
            <th>Stay Name</th>
            <th>Dates Reserved</th>
            <th>Guests</th>
            <th>Price / Night</th>
            <th>Total</th>
            <th>Status</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.guest.fullname}</td>
              <td>{order.stay.name}</td>
              <td>
                {new Date(order.startDate).toLocaleDateString()} -{" "}
                {new Date(order.endDate).toLocaleDateString()}
              </td>
              <td>
                {order.guests.adults} Guests
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
