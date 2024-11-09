import React, { useState } from 'react';

export function ImageCarousel({ stay, onShowDetails }) {
    const [imgIndex, setImgIndex] = useState(0);

    function onHandleImgChange(change) {
        const newIndex = imgIndex + change;
        if (newIndex >= 0 && newIndex < stay.imgUrls.length) {
            setImgIndex(newIndex);
        }
    }

    return (
        <div className="carousel-container">
            <div className="image-container">
                {imgIndex > 0 && (
                    <button className="nav-button prev" onClick={() => onHandleImgChange(-1)}>❮</button>
                )}
                <img onClick={() => onShowDetails(stay._id)} src={stay.imgUrls[imgIndex]} alt="Stay Image" />
                <div className="dots">
                    {stay.imgUrls.map((_, index) => (
                        <span key={index} className={`dot ${index === imgIndex ? 'active' : ''}`}></span>
                    ))}
                </div>
                {imgIndex < stay.imgUrls.length - 1 && (
                    <button className="nav-button next" onClick={() => onHandleImgChange(1)}>❯</button>
                )}
            </div>
        </div>
    );
}
