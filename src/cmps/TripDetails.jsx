import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { numberWithCommas } from "../services/utils/util.service.js"

export function TripDetails({ selectedTripId, setTripDetailsOpen }) {
  const user = useSelector((storeState) => storeState.userModule.user);
  const trip = user.trips.find((trip) => trip._id === selectedTripId);
  
  const navigate = useNavigate()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    button.style.setProperty("--mouse-x", `${100 - mouseX / 2}%`);
    button.style.setProperty("--mouse-y", `${100 - mouseY / 2}%`);
    setMousePos({ x: mouseX, y: mouseY });
  }

  function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

  function onTripClick(tripId) {
    const stay = user.trips.find((trip) => trip._id === tripId)
    navigate(`/stay/${stay._id}`);
  }

  return (
    <div className="trip-details" onClick={() => setTripDetailsOpen(false)}>
      <div className="trip-details-modal">
      <div className="trip-details-stay-info">
        <div className="trip-details-img">
          <img src={trip.imgUrl} alt="" />
        </div>

        <div className="trip-details-info">
            <h1>{trip.name}</h1>
            <p>Adults: <span>{trip.guests.adults}</span></p>
            <p>Kids: <span>{trip.guests.kids}</span></p>
            <p>Country: <span>{trip.country}</span></p>
            <p>
              Dates: <span className="span-dates">{formatDate(trip.startDate)} - {formatDate(trip.endDate)}</span>
            </p>
            <p>
              Total price: <span className="span-price">{numberWithCommas(trip.totalPrice)} / {trip.nights} {trip.nights === 1 ? "night" : "nights"}</span>
            </p>
        </div>
        </div>

          <div className="trip-details-bottom">
          <div className="trip-details-host-info">
            <div className="trip-details-host-info-box">
            <img src={trip.hostId.imgUrl} alt="" />
            <h1>Host {trip.hostId.fullname}</h1>
            </div>
          </div>
            <button onClick={() => onTripClick(trip._id)} onMouseMove={handleMouseMove}>Stay details</button>
          </div>
      </div>
    </div>
  );
}
