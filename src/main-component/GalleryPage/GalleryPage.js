import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import PortfolioSection from '../../components/PortfolioSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Donors from '../../components/Donors/Donors';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';

const GalleryPage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'} />
            <PortfolioSection/>
            <Donors />
            <PartnerSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default GalleryPage;
