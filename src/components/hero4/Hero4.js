import React from "react";
import VideoModal from '../ModalVideo/VideoModal';
import hero from '../../images/slider/video.png'
import innerImg from '../../images/slider/4.png'

import Shape1 from '../../images/slider/back-shape-3.png'
import Shape2 from '../../images/slider/back-shape-4.png'
import Shape3 from '../../images/slider/back-shape-2.png'




const Hero4 = () => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-content">
                            <div className="hero-content-wrap">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Isabella Wilson</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>The Great and Ideological Leader For The Next Generation</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-video-content">
                                    <div className="slide-video-img">
                                        <img src={hero} alt="" />
                                        <VideoModal />
                                    </div>
                                    <div className="slide-video-text">
                                        <h4>Join My Campaign</h4>
                                        <p>The revolution is a great dictatorship of the exploited against the
                                            exploiters.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="politian-pic">
                                <div className="inner">
                                    <img src={innerImg} alt="" />
                                </div>
                                <div className="back-shape"></div>
                                <div className="back-shape-2"><img src={Shape1} alt="" /></div>
                                <div className="back-shape-3"><img src={Shape2} alt="" /></div>
                            </div>
                            <div className="right-shape"><img src={Shape3} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero4;