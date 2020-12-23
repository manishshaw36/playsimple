import React, { useEffect, useState } from 'react'
import './HayDay.css'

const ParaOne = () => {
    const [introduction, setIntroduction] = useState({})

    const getIntroduction = async () => {
        try {
            const response = await fetch("https://cors-anywhere.herokuapp.com/https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-1.json")
            const data = await response.json()
            setIntroduction(data)
        } catch (error) {
            window.alert('Failed to fetch data')
        }
    }

    useEffect(() => {
        getIntroduction()
    }, [])

    return (
        <div className="para-one">
            <div className="img-container"></div>
            <div className="introduction">
                <h2>{introduction.title}</h2>
                <p>{introduction.desc}</p>
            </div>
        </div>
    )
}

export default ParaOne
