import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero4 from '../../components/hero4/Hero4';
import About2 from '../../components/about2/about2';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import FunFactVideo from '../../components/FunFactVideo/FunFactVideo';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} Logo={Logo}/>
            <Hero4/>
            <About2/>
            <ServiceSectionS2/>
            <FunFactS2 fnTpClass={'funfact-wrap-sec'} fnClass={'wpo-fun-fact-section-s4'}/>
            <FunFactVideo/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;