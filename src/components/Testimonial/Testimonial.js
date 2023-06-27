import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/1.png'
import ts2 from '../../images/testimonial/2.png'
import ts3 from '../../images/testimonial/3.png'

import thumb1 from '../../images/testimonial/thumb1.png'
import thumb2 from '../../images/testimonial/thumb2.png'
import thumb3 from '../../images/testimonial/thumb3.png'



const testimonial = [
    {
        id: '01',
        tImg: ts1,
        thumbImg: thumb1,
        Des: "Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies.",
        Title: 'Robert Willum',
        Sub: "President of BPT",
    },
    {
        id: '01',
        tImg: ts2,
        thumbImg: thumb2,
        Des: "Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies.",
        Title: 'Leslie Alexander',
        Sub: "President of TBP",
    },
    {
        id: '01',
        tImg: ts3,
        thumbImg: thumb3,
        Des: "Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies.",
        Title: 'David Joy',
        Sub: "President of AML",
    }
]

const Testimonial = (props) => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className={`wpo-testimonial-section  ${props.tmClass}`}>
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 order-lg-1 order-2">
                            <div className="testimonial-left">
                                <div className="testimonial-left-inner">
                                    <div className="left-slide">
                                        <Slider
                                            asNavFor={nav1}
                                            ref={(slider2) => setNav2(slider2)}
                                            slidesToShow={1}
                                            fade={true}
                                            dots={false}
                                            arrows={false}
                                            swipeToSlide={true}
                                            focusOnSelect={true}
                                        >
                                            {
                                                testimonial.map((tesmnl, tsm) => (
                                                    <div className="testimonial-img" key={tsm}>
                                                        <img src={tesmnl.tImg} alt="" />
                                                    </div>
                                                ))
                                            }

                                        </Slider>
                                    </div>
                                    <div className="shape-1"></div>
                                    <div className="border-s1"></div>
                                    <div className="border-s2"></div>
                                    <div className="border-s3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 order-lg-1 order-1">
                            <div className="wpo-testimonial-items">
                                <div className="right-slide">
                                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false}>
                                        {
                                            testimonial.map((tesmnl, tsm) => (
                                                <div className="wpo-testimonial-item" key={tsm}>
                                                    <div className="wpo-testimonial-text">
                                                        <i className="fi flaticon-right-quote-sign"></i>
                                                        <p>“{tesmnl.Des}”</p>
                                                        <div className="wpo-testimonial-text-btm">
                                                            <div className="wpo-testimonial-text-btm-img">
                                                                <img src={tesmnl.thumbImg} alt=""/>
                                                            </div>
                                                            <div className="wpo-testimonial-text-btm-info">
                                                                <h3>{tesmnl.Title}</h3>
                                                                <span>{tesmnl.Sub}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;