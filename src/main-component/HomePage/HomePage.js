import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Features from '../../components/Features/Features';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import CampaignSection from '../../components/CampaignSection/CampaignSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFact from '../../components/FunFact/FunFact';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import Donors from '../../components/Donors/Donors';
import Footer from '../../components/footer/Footer';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import abimg from '../../images/about.jpg'
import Logo from '../../images/logo.svg'

const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} topbarNone={'topbar-none'} Logo={Logo}/>
            <Hero/>
            <Features/>
            <About abimg={abimg}/>
            <ServiceSection/>
            <CampaignSection/>
            <Testimonial/>
            <FunFact/>
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
export default HomePage;