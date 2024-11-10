import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { stayService } from '../services/stay/stay.service.local.js'
import { getReviewAvg, numberWithCommas } from '../services/util.service.js'

export function OrderForm({ stayId }) {
  const [stay, setStay] = useState(null)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const orderFormRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {

    stayService.getById(stayId).then(stay => {
      setStay(stay)
    }).catch(err => console.error("Failed to load stay:", err))
  }, [stayId])

  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn)
      const checkOutDate = new Date(checkOut)
      const calculatedNights = Math.max((checkOutDate - checkInDate) / (1000 * 3600 * 24), 0)
      setNights(calculatedNights)
    } else {
      setNights(0)
    }
  }, [checkIn, checkOut])
  useEffect(() => {

    if (stay) {
      setTotalPrice(stay.price * nights)
    }
    
  }, [nights, stay])
  const handleReserve = () => {
    sessionStorage.setItem('reservationDates', JSON.stringify({ checkIn, checkOut }))
    sessionStorage.setItem('reservationGuests' , guests)
    navigate(`/reservation/${stayId}`)
  }

  if (!stay) return <p>Loading...</p>
  return (
    <div className="order-form" ref={orderFormRef}>
      <div className="order-price">
        <span className="price-per-night">${numberWithCommas(stay.price)}</span> <span>night</span>
      </div>
      <div className="order-table">
        <div className="order-dates">
          <div className="date-input">
            <label>Check-in</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className="date-input">
            <label>Checkout</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
        </div>
        <div className="order-guests">
          <label>Guests</label>
          <select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </div>
      </div>
      <button className="reserve-button" onClick={handleReserve}>Reserve</button>
      <p className="no-charge-text">You won't be charged yet</p>
      <div className="order-summary">
        <div className="price-calculation">
          <span className="underline-text">${numberWithCommas(stay.price)} x {nights} nights</span>
          <span>${numberWithCommas(totalPrice)}</span>
        </div>
        <div className="total-divider"></div>
        <div className="total-price">
          <span>Total</span>
          <span>${numberWithCommas(totalPrice)}</span>
        </div>
      </div>
    </div>
  )
}
