import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Campaign from '../../api/campaign'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CampaignSection = (props) => {
    return (
        <div className={`wpo-campaign-area section-padding ${props.cmClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Campaign'} Title={'Our Upcoming Campaign'} />
                <div className="wpo-campaign-wrap">
                    <div className="row">
                        {Campaign.map((campaign, cam) => (
                            <div className="col-lg-4 col-md-6 col-12" key={cam}>
                                <div className="wpo-campaign-single">
                                    <div className="wpo-campaign-item">
                                        <div className="wpo-campaign-img">
                                            <img src={campaign.cImg} alt="" />
                                        </div>
                                        <div className="wpo-campaign-content">
                                            <div className="wpo-campaign-text-top">
                                                <small>{campaign.thumb}</small>
                                                <h2><Link onClick={ClickHandler} to={`/campaign-single/${campaign.slug}`}>{campaign.title}</Link></h2>
                                                <p><i className="fi flaticon-time"></i> {campaign.date} @ {campaign.time}</p>
                                                <p><i className="fi flaticon-pin"></i> {campaign.location}</p>
                                                <div className="progress-section">
                                                    <div className="process">
                                                        <div className="progress">
                                                            <div className="progress-bar" style={{width: `${campaign.progress}%`}}>
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
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampaignSection;