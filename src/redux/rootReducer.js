import { combineReducers } from 'redux'
import cookieConsentReducer from './cookieConsent/CookieConsentReducer';

const rootReducer = combineReducers({
    cookieConsent: cookieConsentReducer
})

export default rootReducer;