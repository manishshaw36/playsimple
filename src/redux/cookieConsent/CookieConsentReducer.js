import { CHECK_RECORD_STATUS, ON_RECORD_SUCCESS } from "./CookieConsentTypes"

const initialState = {
    isRecorded: null
}

const cookieConsentReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECK_RECORD_STATUS:
            return { ...state, isRecorded: action.payload }
        case ON_RECORD_SUCCESS:
            return { ...state, isRecorded: action.payload }
        default:
            return { ...state }
    }
}

export default cookieConsentReducer