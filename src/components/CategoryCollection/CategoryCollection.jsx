import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem';
import CategoryItemYoutube from '../CategoryItemYoutube/CategoryItemYoutube';
import './CategoryCollection.css'

const CategoryCollection = (props) => {
    const { items, id, isYoutube } = props
    return (
        <div id={id} className="category-collection">
            {
                items.length ? 
                    items.map((item, idx) => 
                        isYoutube ? 
                            <CategoryItemYoutube key={item.title+idx} data={item} />
                            : <CategoryItem key={item.title+idx} data={item} />)
                    : null
            }
        </div>
    )
}

export default CategoryCollection
