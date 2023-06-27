import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Team from '../../api/team';

import crt1 from '../../images/certificates/1.jpg'
import crt2 from '../../images/certificates/2.jpg'
import crt3 from '../../images/certificates/3.jpg'
import crt4 from '../../images/certificates/4.jpg'

const TeamSinglePage = (props) => {
    const { slug } = useParams()

    const TeamDetails = Team.find(item => item.slug === slug)

    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={TeamDetails.name} pagesub={TeamDetails.title} />
            <div className="team-pg-area section-padding">
                <div className="container">
                    <div className="team-single-wrap">
                        <div className="team-info-wrap">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="team-info-img">
                                        <img src={TeamDetails.tSImg} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="team-info-text">
                                        <h2>Esther Howard</h2>
                                        <ul>
                                            <li>Position: <span>{TeamDetails.title}</span></li>
                                            <li>Experience:<span>12 Years</span></li>
                                            <li>Address:<span>6391 Elgin St. Celina, Delaware 10299</span></li>
                                            <li>Phone:<span>+00 568 746 987</span></li>
                                            <li>Email:<span>youremail@gmail.com</span></li>
                                        </ul>

                                        <div className="certificates-wrap">
                                            <h2>Certificates</h2>

                                            <div className="certificates-items">
                                                <div className="certificates-item">
                                                    <img src={crt1} alt=""/>
                                                </div>
                                                <div className="certificates-item">
                                                    <img src={crt2} alt=""/>
                                                </div>
                                                <div className="certificates-item">
                                                    <img src={crt3} alt=""/>
                                                </div>
                                                <div className="certificates-item">
                                                    <img src={crt4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-exprience-area team-widget">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="exprience-wrap">
                                        <h2>Personal Experience</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                            have suffered alteration in some form, by injected humour, or randomised words
                                            which don’t look even slightly believable. If you are going to use a passage of
                                            Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the
                                            middle of text.</p>
                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                            as necessary, making this the first true generator on the Internet. It uses a
                                            dictionary of over 200 Latin words,</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="education-area">
                                        <h2>Education</h2>
                                        <ul>
                                            <li>Academy University School of Political Science, Boston, MA</li>
                                            <li>Admization Institute of Political Science, Juzment School of
                                                Management,Cambridge</li>
                                            <li>The Syntify High School Of New York</li>
                                            <li>Education & Political Admissions</li>
                                            <li>Admization Institute of Political Science, Juzment
                                                School of Management,Cambridge</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="skills-area">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="exprience-wrap">
                                            <h2>Skills</h2>
                                            <div className="wpo-skill-section">
                                                <div className="wpo-skill-progress">
                                                    <div className="wpo-progress-single">
                                                        <h5 className="progress-title">Political Science</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar"
                                                                role="progressbar" style={{width: `85%`}}>
                                                            </div>
                                                        </div>
                                                        <span className="progress-number">85%</span>
                                                    </div>

                                                    <div className="wpo-progress-single">
                                                        <h5 className="progress-title">Education</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar"
                                                                data-wow-duration="0.7s" data-wow-delay=".3s"
                                                                role="progressbar"  style={{width: `80%`}}>
                                                            </div>
                                                        </div>
                                                        <span className="progress-number">80%</span>
                                                    </div>

                                                    <div className="wpo-progress-single">
                                                        <h5 className="progress-title">Development</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar"
                                                                role="progressbar"  style={{width: `95%`}}>
                                                            </div>
                                                        </div>
                                                        <span className="progress-number">95%</span>
                                                    </div>
                                                    <div className="wpo-progress-single">
                                                        <h5 className="progress-title">Qualification</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar"
                                                                role="progressbar"  style={{width: `70%`}}>
                                                            </div>
                                                        </div>
                                                        <span className="progress-number">70%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="education-area ex-wiget">
                                            <h2>Achievements</h2>
                                            <ul>
                                                <li>Best Political Science award 2017</li>
                                                <li>Specials awards for Political activity 2018</li>
                                                <li>Super Politician Top 50 Politician in USA</li>
                                                <li>Young star Award at politician in 2021</li>
                                                <li>Greatest Politician Top 10</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wpo-contact-area ex-wiget">
                            <div className="wpo-contact-title">
                                <h2>Make an Appointment</h2>
                                <p>Do not put off until tomorrow the problems that need to be solved today, especially
                                    if it concerns your life!</p>
                            </div>
                            <div className="quote-form">
                                <form onSubmit={SubmitHandler}>
                                    <div className="form-group half-col">
                                        <input type="text" className="form-control" placeholder="Name:" name="name" />
                                    </div>
                                    <div className="form-group half-col">
                                        <input type="email" className="form-control" placeholder="Email:" name="email" />
                                    </div>
                                    <div className="form-group half-col">
                                        <input type="text" className="form-control" placeholder="phone" name="phone" />
                                    </div>
                                    <div className="form-group half-col">
                                        <select name="subject" className="form-control">
                                            <option disabled="disabled" defaultValue={"Subject"}>Subject</option>
                                            <option>River Development</option>
                                            <option>Village Development</option>
                                            <option>Road Development</option>
                                            <option>Town Development</option>
                                            <option>Social Development</option>
                                        </select>
                                    </div>
                                    <div className="form-group full-col">
                                        <textarea className="form-control" name="note"
                                            placeholder="Case Discription"></textarea>
                                    </div>
                                    <div className="form-group full-col text-center">
                                        <button className="btn theme-btn" type="submit">Appointment </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;
