import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {amenityIcons} from '../utils/aminities'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStay, addStayMsg } from '../store/actions/stay.actions'
import { OrderForm } from '../cmps/OrderForm'


export function StayDetails() {
  const {stayId} = useParams()
  const stay = useSelector(storeState => storeState.stayModule.stay)

  useEffect(() => {
    loadStay(stayId)
  }, [stayId])



  return (
    <section className="stay-details">
      <Link to="/stay">Back to list</Link>
      <h1>Stay Details</h1>
      {stay && (
        <div className="stay-content">
          <div className="stay-main">
            <div className="stay-header">
              <h3>{stay.name}</h3>
            </div>

            <div className="stay-gallery">
              {stay.imgUrls.map((url, index) => (
                <div key={index} className="image-wrapper">
                  <img src={url} alt={stay.name} className="stay-image" />
                </div>
              ))}
            </div>

            <div className="stay-description">
              <p>{stay.summary}</p>
              <div className="stay-capacity">
                <p>{stay.capacity} guests • 2 bedrooms • 3 beds • 2 baths</p>
              </div>
            </div>

            <div className="stay-host">
              <img src={stay.host.imgUrl} alt={stay.host.fullname} className="host-image" />
              <div className="host-details">
                <p>Hosted by {stay.host.fullname}</p>
              </div>
            </div>

            <div className="stay-amenities">
              <h3>What this place offers</h3>
              <ul>
                {stay.amenities.map((amenity, index) => (
                  <li key={index} className="amenity-item">
                    <img src={amenityIcons[amenity]} alt={amenity} className="amenity-icon" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stay-reviews">
              <h3>Reviews</h3>
              {stay.reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <div className="review-header">
                    <img src={review.by.imgUrl} alt={review.by.fullname} className="reviewer-image" />
                    <div className="reviewer-details">
                      <p className="reviewer-name">{review.by.fullname}</p>
                      <p className="review-rate">Rating: {review.rate}</p>
                    </div>
                  </div>
                  <p className="review-text">{review.txt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stay-order">
            <OrderForm stay={stay} />
          </div>
        </div>
      )}
    </section>
  )
}