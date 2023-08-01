import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'

const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-12 d-lg-block d-none">
                        <Link className="navbar-brand" to="/"><img src={Logo} alt=""/></Link>
                    </div>
                    <div className="col-lg-9 col-12">
                        <div className="contact-info-wrap">
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fi flaticon-phone-call"></i>
                                </div>
                                <div className="info-text">
                                    <span>Call Us:</span>
                                    <p>+(684) 555-0102</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fi flaticon-email"></i>
                                </div>
                                <div className="info-text">
                                    <span>E-mail Now:</span>
                                    <p>politian@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <Link className="theme-btn" to="/donate">Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;