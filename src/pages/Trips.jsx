import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { TripDetails } from "../cmps/TripDetails.jsx";

export function Trips() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const [isTripDetailsOpen, setTripDetailsOpen] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(null)
  const trips = user.trips;
  
  function onTripClick(tripId){
    setSelectedTripId(tripId)
    setTripDetailsOpen(true)
  }
  
  if(!trips || !user) return <div>Loading...</div>
  return (
    <div className="trips-page">
      <h1>Your trips</h1>
      <div className="user-trips">
        {user && trips ? (
          trips.map((trip) => (
            <div key={trip._id} className="user-trip" onClick={() => onTripClick(trip._id)}>
              <div className="user-trip-top">
                <img
                  src={trip.imgUrl || ""}
                  alt={trip.name}
                  className="trip-image"
                />
                <h3 className="trip-name">{trip.name}</h3>
              </div>
              <div className="user-trip-bottom">
                <p className="user-trip-price">${trip.price}</p>
                <p className="user-trip-status">
                  <span
                    className={`status ${
                      trip.status ? trip.status.toLowerCase() : "unknown"
                    }`}
                  >
                    {trip.status}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No trips yet</p>
        )}
      </div>
      {isTripDetailsOpen && <TripDetails selectedTripId={selectedTripId} setTripDetailsOpen={setTripDetailsOpen}/>}
    </div>
  );
}
