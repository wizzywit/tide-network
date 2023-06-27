import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero3 from '../../components/hero3/hero3';
import Features2 from '../../components/Features2/Features2';
import About from '../../components/about/about';
import CampaignSectionS2 from '../../components/CampaignSectionS2/CampaignSectionS2';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Donors from '../../components/Donors/Donors';
import Footer from '../../components/footer/Footer';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import abimg from '../../images/about.png'
import Logo from '../../images/logo-s2.svg'

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s3'} Logo={Logo}/>
            <Hero3/>
            <Features2/>
            <About abimg={abimg} abClass={'wpo-about-section-s3'}/>
            <FunFactS2 fnTpClass={'funfact-wrap-sec'} fnClass={'wpo-fun-fact-section-s3'}/>
            <CampaignSectionS2 cmClass={'wpo-campaign-area-s3'}/>
            <Testimonial/>
            <Donors/>
            <TeamSection tmClass={'pb-0'}/>
            <BlogSection/>
            <PartnerSection prClass={'pt-0'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;