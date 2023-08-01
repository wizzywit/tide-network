import React from "react";
import { Link } from 'react-router-dom'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Features2 = (props) => {
    return (
        <div className="wpo-features-s2  section-padding pb-0">
            <div className="container">
                <div className="features-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="feature-item">
                                <div className="features-wrapper">
                                    <div className="icon">
                                        <div className="features-dot">
                                            <div className="dots"></div>
                                        </div>
                                        <i className="fi flaticon-charity"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/team">Make Donation</Link></h2>
                                        <p>Donate now to help those in need! Make a difference by taking action with
                                            your donation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="feature-item">
                                <div className="features-wrapper">
                                    <div className="icon">
                                        <div className="features-dot">
                                            <div className="dots"></div>
                                        </div>
                                        <i className="fi flaticon-conference-1"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/campaign">Our projects</Link></h2>
                                        <p>Join us in supporting a worthy cause at our charity event, together we can make a difference.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="feature-item">
                                <div className="features-wrapper">
                                    <div className="icon">
                                        <div className="features-dot">
                                            <div className="dots"></div>
                                        </div>
                                        <i className="fi flaticon-community"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/volunteer">Join Volunteer</Link></h2>
                                        <p>Join our team of volunteers and help make a positive impact in your community today..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features2;