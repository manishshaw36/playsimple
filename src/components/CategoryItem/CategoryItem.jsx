import React from 'react'
import './CategoryItem.css'

const CategoryItem = (props) => {
    const { title, subTitle, imgUrl } = props.data
    return (
        <div className="category-item">
            <div
                className="category-item-image"
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
            >
            </div>
            <p className="category-subtitle">{subTitle}</p>
            <p className="category-title">{title}</p>
        </div>
    )
}

export default CategoryItem
