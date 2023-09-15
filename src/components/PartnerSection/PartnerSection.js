import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../images/partners/img-1.png'
import pimg2 from '../../images/partners/img-2.png'
import pimg3 from '../../images/partners/img-3.png'
import pimg4 from '../../images/partners/img-4.png'
import pimg5 from '../../images/partners/img-5.png'
// import pimg6 from '../../images/partners/img-6.png'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg2,
    },
]

const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const PartnerSection = (props) => {
    return (
        <section className={`partners-section section-padding ${props.prClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider owl-carousel">
                            <Slider {...settings}>
                                {partners.map((partner, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <img src={partner.pImg} alt="" />
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

export default PartnerSection;