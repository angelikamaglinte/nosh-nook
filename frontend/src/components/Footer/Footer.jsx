import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <p>Support</p>
                    <ul>
                        <li>Help Centre</li>
                        <li>Delivery fees</li>
                        <li>Report concerns</li>
                        <li>Cancellation options</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <p>Nosh & Nook</p>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-center">
                    <p>Get In Touch</p>
                    <ul>
                        <li>hello@creativedesignstudio.co.site</li>
                        <li>+1-987-654-3210</li>
                        <li>Careers</li>
                        <li>Gift cards</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='copyrights-and-socials-container'>
                <div className='copyrights'>© Nosh&Nook, Inc. &middot; Privacy &middot; Term</div>
                <div className='socials'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            {/* <div className='footer-copyright-and-socials'>
                <p className="footer-copyright">© Nosh&Nook, Inc. &middot; Privacy &middot; Term</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div> */}

        </div>
    )
}

export default Footer
