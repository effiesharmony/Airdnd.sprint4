import { useState, useEffect } from 'react'

export function ImageCarousel({ stay, onShowDetails }) {
    const [imgIndex, setImgIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 745)

    useEffect(() => {
        window.addEventListener("resize", handleMobileResize)

        function handleMobileResize() {
            setIsMobile(window.innerWidth < 745)
        }

        return () => {
            window.removeEventListener("resize", handleMobileResize)
        }
    }, [])

    function showPrevImg(ev) {
        ev.stopPropagation()
        if (imgIndex === 0) return
        setImgIndex(index => {
            return imgIndex - 1
        })
    }

    function showNextImg(ev) {
        ev.stopPropagation()
        if (imgIndex === stay.imgUrls.length - 1) return
        setImgIndex(index => {
            return imgIndex + 1
        })
    }

    return (
        <div className="carousel-container">
            <div className="image-container">
                {imgIndex > 0 && !isMobile && (
                    <button className="nav-button prev" onClick={(event) => showPrevImg(event)}>
                        <img src="public/svg/leftArrow.svg" alt="Left arrow" />
                    </button>
                )}
                <div className="heart">
                    <img src="public/svg/heart.svg" alt="Heart" />
                </div>
                <div className="images">
                    {stay.imgUrls.map((url, index) => (
                        <img id={index} key={index} onClick={() => onShowDetails(stay._id)} src={url} style={{ translate: `${-100 * imgIndex}%` }} />
                    ))}
                </div>
                {/* <img onClick={() => onShowDetails(stay._id)} src={stay.imgUrls[imgIndex]} alt="Stay Image" /> */}
                <div className="dots">
                    {stay.imgUrls.map((_, index) => (
                        <span key={index} className={`dot ${index === imgIndex ? 'active' : ''}`}></span>
                    ))}
                </div>
                {imgIndex < stay.imgUrls.length - 1 && !isMobile && (
                    <button className="nav-button next" onClick={(event) => showNextImg(event)}>
                        <img src="public/svg/rightArrow.svg" alt="Right arrow" />
                    </button>
                )}
            </div>
        </div>
    )
}
