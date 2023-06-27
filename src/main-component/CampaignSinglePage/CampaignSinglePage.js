import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Campaign from '../../api/campaign'
import Footer from '../../components/footer/Footer';
import ServiceSidebar from './sidebar';
import CampaignTab from './Tabs/CampaignTab';

const CampaignSinglePage = (props) => {
    const { slug } = useParams()

    const CampaignDetails = Campaign.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={CampaignDetails.title} pagesub={'Campaign'} />
            <div className="wpo-Campaign-single-area">
                <div className="wpo-campaign-details-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8">
                                <div className="wpo-campaign-details-wrap">
                                    <div className="wpo-campaign-details-img">
                                        <img src={CampaignDetails.cSimg} alt="" />
                                    </div>

                                    <CampaignTab CampaignDetails={CampaignDetails} />
                                </div>
                            </div>
                            <div className="col col-lg-4 col-12">
                                <ServiceSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CampaignSinglePage;
