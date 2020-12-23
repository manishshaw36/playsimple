import React from 'react'
import './CategoryItemYoutube.css'

const CategoryItemYoutube = (props) => {
    const { title, embeddedUrl, youtubeUrl } = props.data
    return (
        <div className="category-item">
            <iframe title={title} width="576" height="319" src={embeddedUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <a className="youtube-title" href={youtubeUrl}>{title}</a>

        </div>
    )
}

export default CategoryItemYoutube