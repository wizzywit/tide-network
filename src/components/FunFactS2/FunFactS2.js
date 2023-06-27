import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import VideoModal from '../ModalVideo/VideoModal';
import fImg from '../../images/funfact2.jpg' 

const FunFactS2 = (props) => {

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    return (
        <div className={props.fnTpClass}>
            <section className={`wpo-fun-fact-section-s2 content ${props.fnClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="wpo-fun-fact-wrap">
                                <div className="wpo-fun-fact-grids clearfix">
                                    <div className="grid">
                                        <div className="info">
                                            <h3><span><CountUp end={35} enableScrollSpy /></span>K</h3>
                                            <p>Total People lived in our city</p>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="info">
                                            <h3><span><CountUp end={12} enableScrollSpy /></span>K</h3>
                                            <p>Square kilometers region covers</p>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="info">
                                            <h3><span><CountUp end={25} enableScrollSpy /></span>%</h3>
                                            <p>Private & domestic garden land</p>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="info">
                                            <h3><span><CountUp end={8} enableScrollSpy /></span>th</h3>
                                            <p>Average Costs of Home Ownership</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="funfact-video">
                <div className="container">
                    <img src={fImg} alt="" />
                    <VideoModal />
                </div>
            </div>
            <span id="counter" />
        </div>
    )
}

export default FunFactS2;