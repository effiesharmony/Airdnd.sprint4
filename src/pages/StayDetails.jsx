import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { amenityIcons } from '../services/utils/amenities.js'
import { loadStay } from '../store/actions/stay.actions'
import { OrderForm } from '../cmps/OrderForm'
import { AmenitiesModal } from '../cmps/AmenitiesModal'

export function StayDetails() {
  const { stayId } = useParams()
  const stay = useSelector(storeState => storeState.stayModule.stay)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    loadStay(stayId)
  }, [stayId])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  if (!stay) return <p>Loading...</p>

  const hardcodedRatings = stay.reviews.map((_, index) => 4.91 + (index % 10) / 100)
  const averageRating = (
    hardcodedRatings.reduce((sum, rate) => sum + rate, 0) / hardcodedRatings.length
  ).toFixed(2)

  return (
    <div className="main-details">
      <section className="stay-details">
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
            <div className="stay-content-wrapper">
              <div className="grid-wrapper">
                <div className="stay-description">
                  <p>
                    {stay.roomType} in {stay.loc.city}, {stay.loc.country}
                  </p>
                </div>
                <div className="stay-capacity">
                  <h6 className="stay-capacity-guests">
                    {stay.capacity} {stay.capacity === 1 ? 'guest' : 'guests'} •{' '}
                    {stay.bedrooms} {stay.bedrooms === 1 ? 'bedroom' : 'bedrooms'} •{' '}
                    {stay.bathrooms} {stay.bathrooms === 1 ? 'bath' : 'baths'}
                  </h6>
                  <div className="stay-capacity-review">
                    <img src="/public/svg/star.svg" alt="" />
                    <h6>
                      {stay.reviews && stay.reviews.length > 0
                        ? averageRating
                        : 'No rating'}{' '}
                      •{' '}
                      <span>
                        {stay.reviews.length === 1
                          ? '1 review'
                          : `${stay.reviews.length} reviews`}
                      </span>
                    </h6>
                  </div>
                </div>
                <div className="stay-host">
                  <img src={stay.host.thumbnailUrl} alt={stay.host.fullname} className="host-image" />
                  <div className="titles">
                    <h5>Hosted by {stay.host.fullname}</h5>
                    <h6>
                      {stay.host.isSuperhost && <span className="superhost-badge">Superhost</span>} • 1 year hosting
                    </h6>

                  </div>
                </div>
                <div className="stay-info">
                  <h6>{stay.summary}</h6>
                </div>
                <div className="stay-amenities">
                  <h6>What this place offers</h6>
                  <ul>
                    {stay.amenities.slice(0, 10).map((amenity, index) => (
                      <li key={index} className="amenity-item">
                        <img src={amenityIcons[amenity]} alt={amenity} className="amenity-icon" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="show-more-btn" onClick={toggleModal}>
                    Show all {stay.amenities.length} amenities
                  </button>
                </div>
              </div>
              <div className="stay-order">
                <OrderForm stayId={stayId} />
              </div>
            </div>
            <div className="stay-reviews">
              <div className="stay-reviews-header">
                <img src="/public/svg/star.svg" alt="" />
                <h6>
                  {stay.reviews && stay.reviews.length > 0
                    ? averageRating
                    : 'No rating'}{' '}
                  •{' '}
                  <span>
                    {stay.reviews.length === 1
                      ? '1 review'
                      : `${stay.reviews.length} reviews`}
                  </span>
                </h6>
              </div>
              <div className="review-items">
                {stay.reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <div className="review-header">
                      <img className="reviewer-image" src={review.by.imgUrl} alt={review.by.fullname} />
                      <div className="reviewer-details">
                        <h6 className="reviewer-name">{review.by.fullname}</h6>
                        <h5 className="review-rate">Rating: 4.{91 + (index % 10)}</h5>
                      </div>
                    </div>
                    <h4 className="review-text">{review.txt}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <AmenitiesModal amenities={stay.amenities} onClose={toggleModal} />
      )}
    </div>
  )
}
