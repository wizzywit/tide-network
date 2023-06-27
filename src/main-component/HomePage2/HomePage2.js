import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero2 from '../../components/hero2/Hero2';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import CampaignSectionS2 from '../../components/CampaignSectionS2/CampaignSectionS2';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import Donors from '../../components/Donors/Donors';
import Footer from '../../components/footer/Footer';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import abimg from '../../images/about-s2.jpg'

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <Hero2/>
            <ServiceSection sClass={'wpo-service-section-s2'}/>
            <About abimg={abimg} abClass={'wpo-about-section-s2'}/>
            <CampaignSectionS2/>
            <Testimonial/>
            <FunFactS2/>
            <TeamSection/>
            <Donors/>
            <BlogSection/>
            <InstagramSection/>
            <PartnerSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;