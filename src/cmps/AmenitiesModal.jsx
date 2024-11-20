import React from "react";
import { amenityIcons } from "../services/utils/amenities.js"

export function AmenitiesModal({ amenities, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.className === "amenities-modal-overlay") {
      onClose()
    }
  }

  return (
    <div
      className="amenities-modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="amenities-modal-content">
        <button className="close-modal-icon" onClick={onClose}>
          ✕
        </button>
        <h3>What this place offers</h3>
        <ul className="amenities-list">
          {amenities.map((amenity, index) => (
            <li key={index} className="amenity-item">
              {amenityIcons[amenity] ? (
                <img
                  src={amenityIcons[amenity]}
                  alt={amenity}
                  className="amenity-icon"
                />
              ) : null}
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
