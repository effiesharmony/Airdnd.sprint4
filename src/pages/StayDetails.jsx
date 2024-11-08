import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStay, addStayMsg } from '../store/actions/stay.actions'


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
        <div>
          <h3>{stay.name}</h3>
          <h4>${stay.price}</h4>
          <pre> {stay.name} </pre>
          <div className="stay-gallery">
            {stay.imgUrls.map((url, index) => (
              <img key={index} src={url} alt={stay.name} className="stay-image" />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}