import React from 'react'
import simg from '../../images/mission-shape.png'


const MissionVission = (props) => {
    return (
        <section className="wpo-mission-vission-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-mission-item">
                            <div className="wpo-mission-text">
                                <h2>Our Mission</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    has been the industry's standard dummy text ever since the 1500 when
                                    unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting.</p>
                                <h5>Lorem Ipsum is simply dummy text of the printing
                                    has been the industry standard dummy text ever since
                                    unknown printer took galley.</h5>
                            </div>
                            <div className="shape-1"></div>
                            <div className="shape-2"><img src={simg} alt=""/></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-vission-item">
                            <div className="wpo-vission-text">
                                <h2>Our Vission</h2>
                                <h5>Lorem Ipsum is simply dummy text of the printing
                                    has been the industry standard dummy text ever since
                                    unknown printer took galley.</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    has been the industry's standard dummy text ever since the 1500 when
                                    unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVission;