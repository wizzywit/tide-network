import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../../api/team'
import SectionTitle from '../SectionTitle/SectionTitle';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    return (
        <section className={`wpo-team-section section-padding ${props.tmClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Our Team'} Title={'Meet Our City Council'} />
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Team.map((team, aitem) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={aitem}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                        <div className="wpo-team-img-box">
                                            <img src={team.tImg} alt="" />
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/"><i className="fi flaticon-twitter"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/"><i className="fi flaticon-linkedin"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="wpo-team-text">
                                        <h2><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h2>
                                        <span>{team.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;