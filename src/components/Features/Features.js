import React from "react";
import { Link } from 'react-router-dom'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Features = (props) => {
    return (
        <section className="wpo-features-area">
            <div className="container">
                <div className="features-wrap">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="feature-item-wrap">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fi flaticon-goal"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/about">Our Mission</Link></h2>
                                    </div>
                                </div>
                                <div className="feature-item-hidden">
                                    <div className="icon">
                                        <i className="fi flaticon-goal"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/about">Our Mission</Link></h2>
                                        <p>Empowering communities through compassionate action, positive change with charity mission.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="feature-item-wrap">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fi flaticon-conference-1"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/campaign">Upcoming Program</Link></h2>
                                    </div>
                                </div>
                                <div className="feature-item-hidden">
                                    <div className="icon">
                                        <i className="fi flaticon-conference-1"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/campaign">Campaign Events</Link></h2>
                                        <p>Join us in supporting a worthy cause at our charity event, together we can make a difference.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="feature-item-wrap">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fi flaticon-charity"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/donate">Make Donation</Link></h2>
                                    </div>
                                </div>
                                <div className="feature-item-hidden">
                                    <div className="icon">
                                        <i className="fi flaticon-charity"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/donate">Make Donation</Link></h2>
                                        <p>Donate now to help those in need! Make a difference by taking action with
                                            your donation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="feature-item-wrap">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fi flaticon-community"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/volunteer">Join Volunteer</Link></h2>
                                    </div>
                                </div>
                                <div className="feature-item-hidden">
                                    <div className="icon">
                                        <i className="fi flaticon-community"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/volunteer">Join Volunteer</Link></h2>
                                        <p>Join our team of volunteers and help make a positive impact in your community today.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;