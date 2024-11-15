import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { stayService } from "../services/stay/stay.service.local.js";
import { getReviewAvg, numberWithCommas } from "../services/utils/util.service.js";
import { GuestModalDetails } from "./GuestModalDetails.jsx";
import { DateModalDetails } from "./DateModalDetails.jsx";

export function OrderForm({ stayId }) {
  const [stay, setStay] = useState(null)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(1)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const orderFormRef = useRef(null)
  const navigate = useNavigate()
  const [isGuestDropdownOpen, setGuestDropdownOpen] = useState(false)
  const [isDateDropdownOpen, setDateDropdownOpen] = useState(false)

  useEffect(() => {
    stayService
      .getById(stayId)
      .then((stay) => {
        setStay(stay)
      })
      .catch((err) => console.error("Failed to load stay:", err))
  }, [stayId])

  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn)
      const checkOutDate = new Date(checkOut)
      const calculatedNights = Math.max(
        (checkOutDate - checkInDate) / (1000 * 3600 * 24),
        0
      )
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
    sessionStorage.setItem(
      "reservationDates",
      JSON.stringify({ checkIn, checkOut })
    )
    sessionStorage.setItem("reservationGuests", guests)
    navigate(`/reservation/${stayId}`)
  }

  function handleGuestChange(newTotalGuests) {
    setGuests(newTotalGuests)
  }

  function handleDateChange(dates) {
    const [startDate, endDate] = dates;

    if (startDate && endDate) {
      setCheckIn(startDate)
      setCheckOut(endDate)
      setDateDropdownOpen(false);
    }
  }

  function onOpenGuestModal() {
    setGuestDropdownOpen(!isGuestDropdownOpen)
    setDateDropdownOpen(false)
  }

  function onOpenDateModal() {
    setDateDropdownOpen(!isDateDropdownOpen)
    setGuestDropdownOpen(false)
  }

  if (!stay) return <p>Loading...</p>;
  return (
    <div className="order-form" ref={orderFormRef}>
      <div className="order-price">
        <span className="price-per-night">${numberWithCommas(stay.price)}</span>{" "}
        <span>night</span>
      </div>
      <div className="order-table">
        <div className="order-dates" onClick={() => onOpenDateModal()}>
          <div className="date-input">
            <label>Check in</label>
            <div className="input">
              {checkIn ? checkIn.toLocaleDateString() : "Add date"}
            </div>
          </div>

          <div className="date-input">
            <label>Check out</label>
            <div className="input">
              {checkOut ? checkOut.toLocaleDateString() : "Add date"}
            </div>
          </div>
        </div>
        <div
          className={`${isGuestDropdownOpen ? "bold-border" : "order-guests"} `}
          onClick={() => onOpenGuestModal()}
        >
          <div className="stay-details-guest">
            <label>Guests</label>
            <div className="guest-input">
              {guests
                ? `${guests} guest${guests > 1 ? "s" : ""}`
                : "Add guests"}
            </div>
          </div>

          <div className="stay-details-guest-svg">
            {isGuestDropdownOpen ? (
              <img
                className="stay-details-guest-svg"
                src="/public/svg/up-arrow.svg"
                alt=""
              />
            ) : (
              <img
                className="stay-details-guest-svg"
                src="/public/svg/down-arrow.svg"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <button className="reserve-button" onClick={handleReserve}>
        Reserve
      </button>
      <p className="no-charge-text">You won't be charged yet</p>
      <div className="order-summary">
        <div className="price-calculation">
          <span className="underline-text">
            ${numberWithCommas(stay.price)} x {nights} 
            {nights === 1 ? ' night' : ' nights'}
          </span>
          <span>${numberWithCommas(totalPrice)}</span>
        </div>
        <div className="total-divider"></div>
        <div className="total-price">
          <span>Total</span>
          <span>${numberWithCommas(totalPrice)}</span>
        </div>
      </div>
      {isGuestDropdownOpen && (
        <GuestModalDetails
          handleGuestChange={handleGuestChange}
          setGuestDropdownOpen={setGuestDropdownOpen}
        />
      )}
      {isDateDropdownOpen && (
        <DateModalDetails
        nights={nights}
          checkIn={checkIn}
          checkOut={checkOut}
          handleDateChange={handleDateChange}
          setDateDropdownOpen={setDateDropdownOpen}
        />
      )}
    </div>
  );
}
