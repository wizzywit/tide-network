import React from 'react'
import abimg from '../../images/about-s4.jpg'
import sign from '../../images/signeture2.png'

const About2 = (props) => {
    return (
        <section className="wpo-about-section-s4 section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={abimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>About Isabella Wilson</span>
                                    <h2>I am extraordinarily patient, provided I get my own way in the end.</h2>
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
                                            <h5>Isabella Wilson</h5>
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

export default About2;