import { categories } from "../../public/categories.js"
import { useRef, useState } from "react"

export function StayCategories() {
    const [selectedCat, setSelectedCat] = useState(categories[0].name)
    const [isScrollEnd, setIsScrollEnd] = useState(false)
    const [currentLeft, setCurrentLeft] = useState(0)
    const scrollRef = useRef(0)

    function scrollRight() {
        const scrollAmount = scrollRef.current.scrollWidth * 0.15
        setCurrentLeft(scrollRef.current.scrollLeft + scrollAmount)
        scrollRef.current.scrollLeft += scrollAmount
        const atEnd = Math.ceil(scrollRef.current.scrollLeft + scrollRef.current.clientWidth + 300)
            >= scrollRef.current.scrollWidth
        setIsScrollEnd(atEnd)
    }

    function scrollLeft() {
        const scrollAmount = scrollRef.current.scrollWidth * 0.10
        setCurrentLeft(scrollRef.current.scrollLeft - scrollAmount)
        scrollRef.current.scrollLeft -= scrollAmount

        const atEnd = Math.ceil(scrollRef.current.scrollLeft + scrollRef.current.clientWidth + 300)
            >= scrollRef.current.scrollWidth
        setIsScrollEnd(atEnd)
    }

    function onSelectCategory(catName) {
        setSelectedCat(catName)
    }

    return (
        <div className="categories-outer-container">
            {currentLeft > 0 &&
                <button className="cat-button prev" onClick={() => scrollLeft()}>
                    <img src="public/svg/leftArrow.svg" alt="Left arrow" />
                </button>
            }
            <section ref={scrollRef} className="categories-inner-container">
                {categories.map((category, index) =>
                    <div onClick={() => onSelectCategory(category.name)} key={category.name}
                        className={`category ${category.name} ${selectedCat === category.name ? 'selected' : ''}`}
                        id={index}>
                        <img src={category.src} alt={category.name} />
                        <span>{category.name}</span>
                    </div>)}
            </section>
            {!isScrollEnd &&
                <button className="cat-button next" onClick={() => scrollRight()}>
                    <img src="public/svg/rightArrow.svg" alt="Right arrow" />
                </button>
            }
        </div>
    )
}