import React, { useState, useEffect, useRef } from 'react'

export function OrderForm({ stay }) {
  const basePrice = stay.price
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(basePrice)
  const [isFixed, setIsFixed] = useState(false)
  const orderFormRef = useRef(null)

  // Calculate the number of nights between check-in and check-out
  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn)
      const checkOutDate = new Date(checkOut)
      const differenceInTime = checkOutDate - checkInDate
      const calculatedNights = Math.max(differenceInTime / (1000 * 3600 * 24), 0)
      setNights(calculatedNights)
    } else {
      setNights(0)
    }
  }, [checkIn, checkOut])

  // Update the total price based on nights only
  useEffect(() => {
    setTotalPrice(basePrice * nights)
  }, [nights, basePrice])

  // Scroll event handler to toggle `fixed` class
  useEffect(() => {
    const handleScroll = () => {
      if (orderFormRef.current) {
        const rect = orderFormRef.current.getBoundingClientRect()
        if (rect.top <= 100) { // Adjust threshold as needed
          setIsFixed(true)
        } else {
          setIsFixed(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`order-form ${isFixed ? 'fixed' : ''}`} 
      ref={orderFormRef}
    >
      <div className="order-price">
        <span className="price-per-night">${basePrice}</span> <span>night</span>
      </div>

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

      <button className="reserve-button">Reserve</button>

      <p className="no-charge-text">You won't be charged yet</p>

      <div className="order-summary">
        <div className="price-calculation">
          <span>${basePrice} x {nights} nights</span>
          <span>${(basePrice * nights).toFixed(2)}</span>
        </div>
        <div className="total-divider"></div>
        <div className="total-price">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
