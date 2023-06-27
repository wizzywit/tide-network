import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import Campaign from '../../api/campaign'
import shape from '../../images/campaign/shape.png'


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CampaignSectionS2 = (props) => {
    return (
        <div className={`wpo-campaign-area-s2 section-padding ${props.cmClass}`}>
            <div className="container">
                <div className="wpo-campaign-wrap wpo-campaign-active owl-carousel">
                    <Slider {...settings}>
                        {Campaign.map((campaign, srv) => (
                            <div className="wpo-campaign-single" key={srv}>
                                <div className="wpo-campaign-item">
                                    <div className="wpo-campaign-img">
                                        <img src={campaign.cImg2} alt="" />
                                    </div>
                                    <div className="wpo-campaign-content">
                                        <div className="wpo-campaign-text-top">
                                            <small>{campaign.thumb}</small>
                                            <h2><Link onClick={ClickHandler} to={`/campaign-single/${campaign.slug}`}>{campaign.title}</Link></h2>
                                            <p><i className="fi flaticon-time"></i> {campaign.date} @ {campaign.time}</p>
                                            <p><i className="fi flaticon-pin"></i> {campaign.location}</p>
                                            <div className="details">
                                                <p>The modern conservative is engaged in one of man oldest exercises in moral
                                                    philosophy and that is, the search for a superior moral for justification
                                                    for selfishness. If nominated, We will not run.</p>
                                            </div>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar" style={{ width: `${campaign.progress}%` }}>
                                                            <div className="progress-value"><span>{campaign.progress}</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li><span>Raised:</span> ${campaign.raised}</li>
                                                <li><span>Goal:</span> ${campaign.goal}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="shape-left">
                <img src={shape} alt="" />
            </div>
            <div className="shape-right">
                <img src={shape} alt="" />
            </div>
        </div>
    );
}

export default CampaignSectionS2;