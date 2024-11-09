import { Link, useNavigate } from 'react-router-dom'
import { ImageCarousel } from './ImageCarousel.jsx'

export function StayPreview({ stay }) {

    // function StayDetails() {
    //     const { stayId } = useParams()
    //     // const stay = useSelector(storeState => storeState.stayModule.stay)
    //     useEffect(() => {
    //         loadStay(stayId)
    //     }, [stayId])
    // }
    const navigate = useNavigate()

    function onShowDetails(stayId) {
        navigate(`/stay/${stayId}`)
    }

    console.log(stay._id)
    return (
        <section className="stay-preview-container">
            <div className="imgCarousel">
                <ImageCarousel stay={stay} onShowDetails={onShowDetails} />
            </div>
            <article onClick={() => onShowDetails(stay._id)} className="stay-preview">
                <p>{stay.name}</p>
                how far away from current location
                <p>{stay.availableDates[0].month} {stay.availableDates[0].start} - {stay.availableDates[0].end}</p>
                <p>${stay.price} night</p>

            </article>
        </section>
    )
}

