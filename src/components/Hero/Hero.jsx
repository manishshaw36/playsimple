import React from 'react'
import './Hero.css'

const Hero = (props) => {
    const { hasTitle = false, title = '', subTitle = '', heroImage = '', btnText, btnId } = props
    return (
        <div className="hero">
            <div className="hero-img">
                <img src={heroImage} alt="" />
            </div>
            {
                hasTitle ? 
                    <div className="hero-title-container">
                        <h1 className="hero-title">{title}</h1>
                        <p className="hero-subtitle">{subTitle}</p>
                    </div> : null
            }
            {
                hasTitle ? 
                    <a className="btn-see-all" href={btnId ? `#${btnId}` : "#latest"}>
                        { btnText ? `SEE ALL ${btnText}` : 'SEE LATEST' }
                    </a> : null
            }
        </div>
    )
}

export default Hero
