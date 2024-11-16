import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { amenityIcons } from '../services/utils/amenities.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStay, addStayMsg } from '../store/actions/stay.actions'
import { OrderForm } from '../cmps/OrderForm'

export function StayDetails({ }) {
  const { stayId } = useParams()
  const navigate = useNavigate()
  const stay = useSelector(storeState => storeState.stayModule.stay)

  useEffect(() => {
    loadStay(stayId)
  }, [stayId])
  console.log(stay)

  return (
    <div className="main-details">
      <section className="stay-details">
        {stay && (
          <div className="stay-content">
            <div className="stay-main">
              <div className="stay-header">
                <h3>{stay.name}</h3>
                <div className="stay-actions">
                  <button className="share-btn">
                    <img src="/public/svg/share.svg" alt="Share" />
                    Share
                  </button>
                  <button className="save-btn">
                    <img src="/public/svg/save.svg" alt="Save" />
                    Save
                  </button>
                </div>
              </div>
              <div className="stay-gallery">
                {stay.imgUrls.map((url, index) => (
                  <div key={index} className="image-wrapper">
                    <img src={url} alt={stay.name} className="stay-image" />
                  </div>
                ))}
              </div>

              <div className='stay-content-wrapper'>
                <div className="grid-wrapper">
                  <div className="stay-description">
                    <p>{stay.type} in {stay.loc.city}, {stay.loc.country}</p>
                  </div>
                  <div className="stay-capacity">
                    <h6 className="stay-capacity-guests">
                      {stay.capacity === 1 ? '1 guest' : `${stay.capacity} guests`} • 2 bedrooms • 3 beds • 2 baths 
                    </h6>
                    <div className="stay-capacity-review">
                      <img src="/public/svg/star.svg" alt="" />
                      <h6> 4.96 • <span>
                        {stay.reviews.length === 1 ? ' 1 review' : `${stay.reviews.length} reviews`}
                      </span></h6>
                    </div>
                  </div>

                  <div className="stay-host">
                    <img src={stay.host.imgUrl} alt={stay.host.fullname} className="host-image" />
                    <div className="titles">
                      <h5>Hosted by {stay.host.fullname}</h5>
                      <h6>10 years hosting</h6>
                    </div>
                  </div>
                  <div className="stay-info">
                    <h6>{stay.info}</h6>
                  </div>
                  <div className="stay-amenities">
                    <h6>What this place offers</h6>
                    <ul>
                      {stay.amenities.map((amenity, index) => (
                        <li key={index} className="amenity-item">
                          <img src={amenityIcons[amenity]} alt={amenity} className="amenity-icon" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
                <div className="stay-order">
                  <OrderForm stayId={stayId} />
                </div>
              </div>

              <div className="stay-reviews">
                <div className="stay-reviews-header">
                  <img src="/public/svg/star.svg" alt="" />
                  <h6> 4.96 • <span>
                    {stay.reviews.length === 1 ? ' 1 review' : `${stay.reviews.length} reviews`}
                  </span></h6>
                </div>
                <div className="review-items">
                  {stay.reviews.map((review, index) => (
                    <div key={index} className="review-item">
                      <div className="review-header">
                        <img className="reviewer-image" src={review.by.imgUrl} alt={review.by.fullname} />
                        <div className="reviewer-details">
                          <h6 className="reviewer-name">{review.by.fullname}</h6>
                          <h5 className="review-rate">Rating: {review.rate}</h5>
                        </div>
                      </div>
                      <h4 className="review-text">{review.txt}</h4>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </section>
    </div>
  )
}
