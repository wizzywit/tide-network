import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import ins1 from '../../images/instragram/1.jpg'
import ins2 from '../../images/instragram/2.jpg'
import ins3 from '../../images/instragram/3.jpg'
import ins4 from '../../images/instragram/4.jpg'
import ins5 from '../../images/instragram/5.jpg'

const InstagramArray = [
    {
        InsImg: ins1,
    },
    {
        InsImg: ins2,
    },
    {
        InsImg: ins3,
    },
    {
        InsImg: ins4,
    },
    {
        InsImg: ins5,
    }
]


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: '220px',
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: '0',
                infinite: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const InstagramSection = () => {
    return (
        <section className="wpo-instagram-section">
            <div className="container-fluid">
                <SectionTitle subTitle={'Work'} Title={'Our Instagram Feed'} />
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-instagram-container instagram-slider">
                            <Slider {...settings}>
                                {InstagramArray.map((instagram, ins) => (
                                    <div className="grid" key={ins}>
                                        <div className="wpo-instagram-item">
                                            <Link onClick={ClickHandler} to="/blog">
                                                <img src={instagram.InsImg} alt="" className="img img-responsive"/>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InstagramSection;