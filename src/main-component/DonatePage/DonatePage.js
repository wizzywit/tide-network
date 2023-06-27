import React from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
// images
import visa from '../../images/icon/visa.png';
import mastercard from '../../images/icon/mastercard.png';
import skrill from '../../images/icon/skrill.png';
import paypal from '../../images/icon/paypal.png';

const DonatePage = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="donate-page">
            <Navbar2 />
            <PageTitle pageTitle={'Donate'} pagesub={'Donate'} />
            <div className="wpo-donation-page-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="wpo-donate-header">
                                <h2>Make a Donation</h2>
                            </div>
                            <div id="Donations" className="tab-pane">
                                <form onSubmit={SubmitHandler}>
                                    <div className="wpo-donations-amount">
                                        <h2>Your Donation</h2>
                                        <input type="text" className="form-control" name="text" id="text"
                                            placeholder="Enter Donation Amount"/>
                                    </div>
                                    <div className="wpo-donations-details">
                                        <h2>Details</h2>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="name" id="fname"
                                                    placeholder="First Name"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="name" id="name"
                                                    placeholder="Last Name"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                <input type="email" className="form-control" name="email" id="email"
                                                    placeholder="Email"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="Adress" id="Adress"
                                                    placeholder="Adress"/>
                                            </div>
                                            <div className="col-lg-12 col-12 form-group">
                                                <textarea className="form-control" name="note" id="note"
                                                    placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-doanation-payment">
                                        <h2>Choose Your Payment Method</h2>
                                        <div className="wpo-payment-area">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="wpo-payment-option" id="open4">
                                                        <div className="wpo-payment-select">
                                                            <ul>
                                                                <li className="addToggle">
                                                                    <input id="add" type="radio"
                                                                        name="payment" value="30"/>
                                                                        <label htmlFor="add">Payment By Card</label>
                                                                </li>
                                                                <li className="removeToggle">
                                                                    <input id="remove" type="radio" name="payment"
                                                                        value="30"/>
                                                                        <label htmlFor="remove">Offline Donation</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div id="open5" className="payment-name">
                                                            <ul>
                                                                <li className="visa"><input id="1" type="radio" name="size"
                                                                    value="30"/>
                                                                    <label htmlFor="1"><img
                                                                        src={visa}
                                                                        alt=""/></label>
                                                                </li>
                                                                <li className="mas"><input id="2" type="radio" name="size"
                                                                    value="30"/>
                                                                    <label htmlFor="2"><img
                                                                        src={mastercard}
                                                                        alt=""/></label>
                                                                </li>
                                                                <li className="ski"><input id="3" type="radio" name="size"
                                                                    value="30"/>
                                                                    <label htmlFor="3"><img
                                                                        src={skrill}
                                                                        alt=""/></label>
                                                                </li>
                                                                <li className="pay"><input id="4" type="radio" name="size"
                                                                    value="30"/>
                                                                    <label htmlFor="4"><img
                                                                        src={paypal}
                                                                        alt=""/></label>
                                                                </li>
                                                            </ul>
                                                            <div className="contact-form form-style">
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-12 col-12">
                                                                        <label>Card holder Name</label>
                                                                        <input type="text" placeholder="" name="name"/>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-12 col-12">
                                                                        <label>Card Number</label>
                                                                        <input type="text" placeholder="" name="card"/>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-12 col-12">
                                                                        <label>CVV</label>
                                                                        <input type="text" placeholder="" name="CVV"/>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-12 col-12">
                                                                        <label>Expire Date</label>
                                                                        <input type="text" placeholder="" name="date"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn submit-btn">Donate Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </div>

    )
}

export default DonatePage;