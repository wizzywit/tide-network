import React from 'react';
import { HashRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import AboutPage from '../AboutPage/AboutPage';
import CampaignPage from '../CampaignPage/CampaignPage';
import CampaignPageS2 from '../CampaignPageS2/CampaignPageS2';
import CampaignPageS3 from '../CampaignPageS3/CampaignPageS3';
import CampaignSinglePage from '../CampaignSinglePage/CampaignSinglePage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import GalleryPage from '../GalleryPage/GalleryPage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';
import FaqPage from '../FaqPage';
import VolunteerPage from '../VolunteerPage/VolunteerPage';
import DonatePage from '../DonatePage/DonatePage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import TermsPage from '../TermsPage/TermsPage';


const AllRoute = () => {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home2" element={<HomePage2 />} />
          <Route path="home3" element={<HomePage3 />} />
          <Route path="home4" element={<HomePage4 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="campaign" element={<CampaignPage />} />
          <Route path="campaign-2" element={<CampaignPageS2 />} />
          <Route path="campaign-3" element={<CampaignPageS3 />} />
          <Route path="campaign-single/:slug" element={<CampaignSinglePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='product-single/:slug' element={<ProductSinglePage/>} />
          <Route path='cart' element={<CartPage/>} />
          <Route path='checkout' element={<CheckoutPage/>} />
          <Route path='order_received' element={<OrderRecived/>} />
          <Route path='faq' element={<FaqPage/>} />
          <Route path='volunteer' element={<VolunteerPage/>} />
          <Route path='donate' element={<DonatePage/>} />
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='privacy' element={<PrivacyPage />} />
          <Route path='terms' element={<TermsPage />} />
          <Route path='404' element={<ErrorPage/>}/> 
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default AllRoute;
