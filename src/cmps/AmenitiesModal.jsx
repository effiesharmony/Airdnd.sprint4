import React from "react";
import { amenityIcons } from "../services/utils/amenities.js";

export function AmenitiesModal({ amenities, onClose }) {
  const availableIcons = Object.values(amenityIcons);

  return (
    <div className="amenities-modal-overlay">
      <div className="amenities-modal-content">
        <button className="close-modal-icon" onClick={onClose}>
          ✕
        </button>
        <h3>What this place offers</h3>
        <ul className="amenities-list">
          {amenities.map((amenity, index) => (
            <li key={index} className="amenity-item">
              <img
                src={
                  amenityIcons[amenity] ||
                  availableIcons[Math.floor(Math.random() * availableIcons.length)]
                }
                alt={amenity}
                className="amenity-icon"
              />
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
