import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { stayService } from '../services/stay/stay.service.js'
import { orderService } from '../services/order/order.service'
import { ReservationSuccessfull } from '../cmps/ReservationSuccessfull.jsx'
import { getReviewAvg, numberWithCommas } from '../services/utils/util.service.js'


export function ReservationDetails() {
    const { stayId } = useParams()
    const [stay, setStay] = useState(null)
    const [reservationDates, setReservationDates] = useState({ checkIn: '', checkOut: '' })
    const [guests, setGuests] = useState(1)
    const [nights, setNights] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [showSuccess, setShowSuccess] = useState(false)
    const navigate = useNavigate()
    const user = useSelector((storeState) => storeState.userModule.user)

    useEffect(() => {
        stayService.getById(stayId)
            .then(stay => setStay(stay))
            .catch(err => console.error("Failed to load stay:", err))
    }, [stayId])

    useEffect(() => {
        const dates = JSON.parse(sessionStorage.getItem('reservationDates'))
        const storedGuests = sessionStorage.getItem('reservationGuests')
        if (dates) {
            setReservationDates(dates)
            const checkInDate = new Date(dates.checkIn)
            const checkOutDate = new Date(dates.checkOut)
            const calculatedNights = (checkOutDate - checkInDate) / (1000 * 3600 * 24)
            setNights(calculatedNights)
        }
        if (storedGuests) setGuests(Number(storedGuests))
    }, [])

    useEffect(() => {
        if (stay) setTotalPrice(stay.price * nights)
    }, [stay, nights])

    const handleConfirmReservation = () => {
        const order = {
            hostId: stay.host._id,
            guest: { _id: user._id, fullname: user.fullname },
            totalPrice,
            startDate: reservationDates.checkIn,
            endDate: reservationDates.checkOut,
            guests: { adults: guests, kids: 0 },
            stay: { _id: stay._id, name: stay.name, price: stay.price },
            status: 'pending',
        }
        
        orderService.saveOrder(order)
            .then(() => setShowSuccess(true))
            .catch(err => console.error("Failed to save order:", err))
    }

    if (!stay) return <p>Loading...</p>
    return (
        <div className="reservation-details">
            <div className="details-container">
                <div className="reservation-text">
                    <h2>One last step</h2>
                    <p>Dear {user.fullname},</p>
                    <p>In order to complete your reservation, please confirm your trip details.</p>
                    <div className="reservation-info">
                        <h3>Reservation details</h3>
                        <div className="info-item">
                            <span className="label">Trip dates:</span>
                            <span className="value">{reservationDates.checkIn} - {reservationDates.checkOut}</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Guests:</span>
                            <span className="value">{guests} {guests > 1 ? 'adults' : 'adult'}</span>
                        </div>
                        <div className="price-details">
                            <div className="info-item">
                                <span className="label">${numberWithCommas(stay.price)} x {nights} nights</span>
                                <span className="value">${numberWithCommas(totalPrice)}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Service fee</span>
                                <span className="value">$0</span>
                            </div>
                            <div className="info-item total">
                                <span className="label">Total</span>
                                <span className="value">${numberWithCommas(totalPrice)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reservation-image">
                    <img src={stay.imgUrls ? stay.imgUrls[0] : ''} alt={stay.name || 'Stay'} />
                    <p className="stay-name">{stay.name || 'Stay Name'}</p>
                    <p className="stay-location">{stay.loc.city}, {stay.loc.country}</p>
                </div>
            </div>
            <div className="buttons-container">
                <button onClick={() => navigate(-1)} className="back-button">Back</button>
                <button onClick={handleConfirmReservation} className="confirm-button">Confirm</button>
            </div>
            {showSuccess && (
                <div className="modal-overlay">
                    <ReservationSuccessfull
                        stay={stay}
                        reservationDates={reservationDates}
                        guests={guests}
                        totalPrice={numberWithCommas(totalPrice)}
                        onClose={() => {
                            setShowSuccess(false)
                            navigate('/stay')
                        }}
                    />
                </div>
            )}
        </div>
    )
}
