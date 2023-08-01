import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import Services from '../../api/service';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                                </div>
                                <ul className="info">
                                    <li>Phone: 111-222-333-2155</li>
                                    <li>Email: contact@mail.com</li>
                                    <li>Address: 22/1 Melborane city austria,
                                        human resoerch, Canada</li>
                                </ul>
                                <div className="social">
                                    <ul>
                                        <li>
                                            <Link onClick={ClickHandler} to="/">
                                                <i className="fi flaticon-facebook-app-symbol"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/">
                                                <i className="fi flaticon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/">
                                                <i className="fi flaticon-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/">
                                                <i className="fi flaticon-instagram-1"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/">
                                                <i className="fi flaticon-pinterest"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service">Mission & Vision</Link></li>
                                    <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                    <li><Link onClick={ClickHandler} to="/campaign">Campaign</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Mission & Vision</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Subscribe Newsletter</h3>
                                </div>
                                <p>Get timely updates ! We only send interesting and relevant emails.</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Your Email Address..."
                                            required="" />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit">Subscribe now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-md-12 col-12">
                            <ul>
                                <li>&copy; 2023 <Link onClick={ClickHandler} to="/">Tide network</Link>. All rights reserved.</li>
                            </ul>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-12">
                            <div className="link">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/privacy">Privace & Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/terms">Terms</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                    <li><Link onClick={ClickHandler} to="/volunteer">Volunteer</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;