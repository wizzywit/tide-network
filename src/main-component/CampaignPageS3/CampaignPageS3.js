import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import CampaignSectionS2 from '../../components/CampaignSectionS2/CampaignSectionS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Donors from '../../components/Donors/Donors';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';

const CampaignPageS3 = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Campaign'} pagesub={'Campaign'} />
            <CampaignSectionS2 cmClass={'wpo-campaign-area-s3'}/>
            <Donors />
            <PartnerSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CampaignPageS3;
