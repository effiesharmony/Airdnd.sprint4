import React from "react"

export function GuestFavorite({ rating, reviewCount }) {
  return (
    <div className="guest-favorite">
      <div className="guest-favorite-info">
        <img src="/public/svg/leftleaf.svg" alt="Left Leaf" className="leaf-icon" />
        <span>Guest favorite</span>
        <img src="/public/svg/rightleaf.svg" alt="Right Leaf" className="leaf-icon" />
      </div>
      <p>One of the most loved homes on Airbnb, according to guests</p>
      <div className="guest-favorite-rating">
        <span className="rating">{rating}</span>
        <img src="/public/svg/star.svg" alt="Star" className="star-icon" />
        <span className="review-count">{reviewCount} Reviews</span>
      </div>
    </div>
  )
}
