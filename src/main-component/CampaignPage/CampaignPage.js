import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import CampaignSection from '../../components/CampaignSection/CampaignSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Donors from '../../components/Donors/Donors';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';

const CampaignPage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Campaign'} pagesub={'Campaign'} />
            <CampaignSection cmClass={'wpo-campaign-area-s5'}/>
            <Donors />
            <PartnerSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CampaignPage;
