import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import CampaignSection from '../../components/CampaignSection/CampaignSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFact from '../../components/FunFact/FunFact';
import Donors from '../../components/Donors/Donors';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import abimg from '../../images/about.jpg'

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About abimg={abimg} abClass={"pt-padding"}/>
            <ServiceSection />
            <CampaignSection />
            <Testimonial />
            <FunFact />
            <TeamSection />
            <Donors />
            <PartnerSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
