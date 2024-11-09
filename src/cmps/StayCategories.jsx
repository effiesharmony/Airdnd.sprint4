import { categories } from "../../public/categories.js"
import { useState } from "react"

export function StayCategories() {
    const [selectedCat, setSelectedCat] = useState(categories[0].name)
    const [catIndex, setCatIndex] = useState(0)

    function onSelectCategory(catName) {
        setSelectedCat(catName)
    }

    function onScrollCategories(diff) {
        const newIndex = +catIndex + diff
        // if (newIndex >= 0 && newIndex < categories.length) {
        setCatIndex(newIndex)
        document.querySelector('.categories-inner-container').scrollLeft += newIndex
        // console.log(document.querySelector('.categories-container').scrollLeft)
        // }

    }

    return (
        <div className="categories-outer-container">
            <section className="categories-inner-container">
                {/* {catIndex > 0 && ( */}
                <button className="cat-button prev" onClick={() => onScrollCategories(-400)}>
                    <img src="public/svg/leftArrow.svg" alt="Left arrow" />
                </button>
                {/* )} */}
                {categories.map((category, index) =>
                    <div onClick={() => onSelectCategory(category.name)} key={category.name}
                        className={`category ${category.name} ${selectedCat === category.name ? 'selected' : ''}`}
                        id={index}>
                        <img src={category.src} alt={category.name} />
                        <span>{category.name}</span>
                    </div>)}
                <button className="cat-button next" onClick={() => onScrollCategories(400)}>
                    <img src="public/svg/rightArrow.svg" alt="Right arrow" />
                </button>
            </section>
        </div>
    )
}