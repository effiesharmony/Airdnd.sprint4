import React, { useEffect, useState } from 'react'
import { data } from '../../data/stay.json'
import { orderService } from '../services/order/order.service.js'


export function DashboardReservation() {
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    orderService.query()
      .then(orders => setOrders(orders))
  }, [])

  const handleStatusChange = (orderId, status) => {
    const updatedOrders = orders.map((order) => {
      if (order._id === orderId) {
        order.status = status
        orderService.saveOrder(order)
      }
      return order
    }
    )

    setOrders(updatedOrders)

    // orderService.saveOrder(updatedOrder)
  }


  if (!orders) return <div>Loading</div>
  return (
    <div className="dashboard-reservation">
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Booker</th>
            <th>Stay</th>
            <th>Dates</th>
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
                {new Date(order.startDate).toLocaleDateString()} -{' '}
                {new Date(order.endDate).toLocaleDateString()}
              </td>
              <td>
                {order.guests.adults} Adults, {order.guests.kids} Kids
              </td>
              <td>${order.stay.price}</td>
              <td>${order.totalPrice}</td>
              <td className={`status ${order.status}`}>{order.status}</td>
              <td>
                <button
                  className="approve-btn"
                  onClick={() => handleStatusChange(order._id, 'approved')}
                >
                  Approve✅
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleStatusChange(order._id, 'rejected')}
                >
                  Reject❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
