import { CHECK_RECORD_STATUS, ON_RECORD_SUCCESS } from "./CookieConsentTypes"

export const onRecordSuccess = () => {
    localStorage.setItem('isRecorded', true)
    return { type: ON_RECORD_SUCCESS, payload: true }
}

export const checkRecordStatus = () => {
    const status = JSON.parse(localStorage.getItem('isRecorded'))
    return { type: CHECK_RECORD_STATUS, payload: status }
}