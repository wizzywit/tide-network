import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import Services from '../../api/service'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS2 = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="wpo-campaign-area-s4 section-padding">
            <div className="container">
                <div className="wpo-campaign-wrap">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Education
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Social Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                            >
                                Business
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { toggle('4'); }}
                            >
                                Qualification
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '5' })}
                                onClick={() => { toggle('5'); }}
                            >
                                Development
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row">
                                {Services.slice(5, 8).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className="wpo-campaign-single">
                                            <div className="wpo-campaign-item">
                                                <div className="wpo-campaign-img">
                                                    <img src={service.sImgS} alt="" />
                                                </div>
                                                <div className="wpo-campaign-content">
                                                    <div className="wpo-campaign-text-top">
                                                        <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h2>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row">
                                {Services.slice(8, 11).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className="wpo-campaign-single">
                                            <div className="wpo-campaign-item">
                                                <div className="wpo-campaign-img">
                                                    <img src={service.sImgS} alt="" />
                                                </div>
                                                <div className="wpo-campaign-content">
                                                    <div className="wpo-campaign-text-top">
                                                        <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h2>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                {Services.slice(11, 14).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className="wpo-campaign-single">
                                            <div className="wpo-campaign-item">
                                                <div className="wpo-campaign-img">
                                                    <img src={service.sImgS} alt="" />
                                                </div>
                                                <div className="wpo-campaign-content">
                                                    <div className="wpo-campaign-text-top">
                                                        <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h2>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                {Services.slice(14, 17).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className="wpo-campaign-single">
                                            <div className="wpo-campaign-item">
                                                <div className="wpo-campaign-img">
                                                    <img src={service.sImgS} alt="" />
                                                </div>
                                                <div className="wpo-campaign-content">
                                                    <div className="wpo-campaign-text-top">
                                                        <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h2>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </TabPane>
                        <TabPane tabId="5">
                            <Row>
                                {Services.slice(17, 20).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className="wpo-campaign-single">
                                            <div className="wpo-campaign-item">
                                                <div className="wpo-campaign-img">
                                                    <img src={service.sImgS} alt="" />
                                                </div>
                                                <div className="wpo-campaign-content">
                                                    <div className="wpo-campaign-text-top">
                                                        <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h2>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </TabPane>

                    </TabContent>

                </div>
            </div>
        </div>
    );
}

export default ServiceSectionS2;