import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkRecordStatus, onRecordSuccess } from '../../redux/cookieConsent/CookieConsentActions'
import './CookieConsent.css'

const CookieConsent = () => {

    const dispatch = useDispatch()
    const { isRecorded } = useSelector(state => state.cookieConsent)

    useEffect(() => {
        dispatch(checkRecordStatus())
    }, [dispatch])

    const handleRecord = () => {
        dispatch(onRecordSuccess())
    }

    return (
        <div className={`cookie-consent ${!isRecorded ? 'show-consent': 'hide-consent'}`}>
            <div>
                <p>Our site uses cookies to enhance your user experience and measure site traffic</p>
                <h3>Learn More</h3>
            </div>
            <div>
                <button className="btn-gotit" onClick={handleRecord}>Got it</button>
            </div>
        </div>
    )
}

export default CookieConsent
