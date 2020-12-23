import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-social-media-container">
                    <div className="social-media">
                        <p>Follow us on</p>
                        <div>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="app-stores">
                        <a href="https://supr.cl/appstorescgames" className="appstore">App Store</a>
                        <a href="https://play.google.com/store/apps/dev?id=6715068722362591614&amp;hl=en" className="googleplay">Google play</a>
                    </div>
                </div>
                <hr />
                <div className="terms">
                    <span>Terms of service</span>
                    <span>Privacy policy</span>
                    <span>Parent's guide</span>
                    <span>Safe and fair play policy</span>
                </div>
                <div className="footer-end">
                    <div className="address">
                        Supercell Oy <br />
                        Itämerenkatu 11-13 <br />
                        00180 Helsinki <br />
                        Finland
                    </div>
                    <div className="logo">
                        <a href="/" title="Front page">Supercell</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
