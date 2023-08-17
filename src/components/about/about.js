import React from 'react'
import sign from '../../images/signeture.png'

const About = (props) => {
    return (
        <section className={`wpo-about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={props.abimg} alt="" />
                                <div className="wpo-about-img-text">
                                    <h4>2023</h4>

                                    <div className="rotate-text">
                                        <span>W</span>
                                        <span>e</span>
                                        <span>A</span>
                                        <span>r</span>
                                        <span>e</span>
                                        <span>W</span>
                                        <span>o</span>
                                        <span>r</span>
                                        <span>k</span>
                                        <span>i</span>
                                        <span>n</span>
                                        <span>g</span>
                                        <span>F</span>
                                        <span>o</span>
                                        <span>r</span>
                                        <span>Y</span>
                                        <span>o</span>
                                        <span>u</span>
                                        <span>S</span>
                                        <span>i</span>
                                        <span>n</span>
                                        <span>c</span>
                                        <span>e</span>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="border-shape-1"></div>
                                    <div className="border-shape-2"></div>
                                    <div className="border-shape-3"></div>
                                </div>
                                <div className="about-shape">
                                    <div className="shape-1"></div>
                                    <div className="shape-2"></div>
                                    <div className="shape-3"></div>
                                    <div className="shape-4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>About Politian</span>
                                    <h2>We Can Work Together For Create a Better Future.</h2>
                                </div>
                                <p>The leader is eager to listen to the needs of the youth generation and to hear what
                                    solutions they have to the problems they are facing. He hopes to find solutions that
                                    will help them lead meaningful lives and make lasting change in the world. </p>
                                <p>He believes that the collaboration between the youth and the leaders of society is
                                    necessary to bring about a brighter future. Now, he is ready to take the first step
                                    to making that happen.</p>
                                <div className="quote">
                                    <p>“We can start by taking small steps and making small changes that can have a big
                                        impact on the world.”</p>
                                </div>
                                <div className="wpo-about-left-info">
                                    <div className="wpo-about-left-inner">
                                        <div className="wpo-about-left-text">
                                            <h5>Robert Willum</h5>
                                            <span>CEO & Founder of Manit</span>
                                        </div>
                                    </div>
                                    <div className="signeture">
                                        <img src={sign} alt="" />
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

export default About;