import { Link, useNavigate } from 'react-router-dom'
import { ImageCarousel } from './ImageCarousel.jsx'
import { getReviewAvg, numberWithCommas } from '../services/util.service.js'

export function StayPreview({ stay }) {
    const navigate = useNavigate()

    function onShowDetails(stayId) {
        navigate(`/stay/${stayId}`)
    }

    return (
        <section className="stay-preview-container">
            <div className="imgCarousel">
                <ImageCarousel stay={stay} onShowDetails={onShowDetails} />
            </div>
            <article onClick={() => onShowDetails(stay._id)} className="stay-preview">
                <p className="stay-loc">{stay.loc.city}, {stay.loc.country}</p>
                <p className="stay-distance">4,019 kilometers away</p>
                <p className="stay-dates">{stay.availableDates[0].month} {stay.availableDates[0].start} - {stay.availableDates[0].end}</p>
                <p className="stay-price"><span>${numberWithCommas(stay.price)}</span> night</p>
                <div className="stay-rating-container">
                    <img className="star" src="public/svg/star.svg" alt="Star" />
                    <p className="rating-num">{getReviewAvg(stay.reviews).toFixed(1)}</p>
                </div>

            </article>
        </section>
    )
}

