import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import PageTitle from '../../components/pagetitle/PageTitle'
import FaqSection from './FaqSection'
import GetinTouch from '../../components/GetinTouch'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'

const FaqPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'FAQ'} pagesub={'FAQ'}/> 
                <section className="wpo-faq-section section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="wpo-section-title">
                                    <h2>Frequently Asked Question</h2>
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-2">
                                <FaqSection/>
                            </div>
                        </div>
                    </div>
                </section>
                <GetinTouch/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default FaqPage;

