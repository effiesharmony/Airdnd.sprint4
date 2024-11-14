import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { numberWithCommas } from '../services/utils/util.service'

const MySwal = withReactContent(Swal)

export function ReservationSuccessfull({ stay, reservationDates, guests, totalPrice, onClose }) {
    useEffect(() => {
        MySwal.fire({
            icon: 'success',
            title: 'Reserved successfully',
            html: (
                <div className="reservation-success-content">
                    <p>You can follow the order status in <span className="link">My trips</span> page</p>
                    
                    <div className="reservation-details">
                        <h3>Reservation details</h3>
                        <div className="info-section">
                            <p className="label">Trip dates:</p>
                            <p className="value">{reservationDates.checkIn} - {reservationDates.checkOut}</p>
                        </div>
                        <div className="info-section">
                            <p className="label">Guests:</p>
                            <p className="value">{guests} {guests > 1 ? 'adults' : 'adult'}</p>
                        </div>
                        
                        <hr />
                        
                        <h3>Price Details</h3>
                        <div className="price-details">
                            <div className="info-section">
                                <p className="label">${numberWithCommas(stay.price)} x {guests} nights</p>
                                <p className="value">${numberWithCommas(totalPrice)}</p>
                            </div>
                        </div>
                        
                        <hr />
                        
                        <div className="info-section total">
                            <p className="label">Total</p>
                            <p className="value">${numberWithCommas(totalPrice)}</p>
                        </div>
                    </div>
                    
                    <div className="stay-image">
                        <img src={stay.imgUrls[0]} alt={stay.name} />
                        <p>{stay.name}</p>
                        <p>{stay.loc.city}, {stay.loc.country}</p>
                    </div>
                </div>
            ),
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: 'Close',
            customClass: {
                popup: 'reservation-success-popup'
            },
        }).then(() => {
            onClose()
        })
    }, [stay, reservationDates, guests, totalPrice, onClose])

    return null
}
