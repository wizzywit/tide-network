import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Donors from '../../components/Donors/Donors';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';

const ServicePage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection sClass={'s3'}/>
            <Donors />
            <PartnerSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;

