import React, { Fragment } from 'react';
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { Link } from 'react-router-dom'
import { totalPrice } from "../../utils";

// images
import visa from '../../images/icon/visa.png';
import mastercard from '../../images/icon/mastercard.png';
import skrill from '../../images/icon/skrill.png';
import paypal from '../../images/icon/paypal.png';

import CheckWrap from '../CheckWrap'

import './style.scss';

const cardType = [
    {
        id: "1",
        title: 'visa',
        img: visa
    },
    {
        id: "2",
        title: 'mastercard',
        img: mastercard
    },
    {
        id: "3",
        title: 'skrill',
        img: skrill
    },
    {
        id: "4",
        title: 'paypal',
        img: paypal
    },
];


const CheckoutSection = ({ cartList }) => {
    // states
    const [tabs, setExpanded] = React.useState({
        cupon: false,
        login: false,
        payment: true
    });
    const [forms, setForms] = React.useState({
        cupon_key: '',
        fname: '',
        lname: '',
        country: '',
        dristrict: '',
        address: '',
        post_code: '',
        email: '',
        phone: '',
        note: '',

        payment_method: 'cash',
        card_type: '',

        fname2: '',
        lname2: '',
        country2: '',
        dristrict2: '',
        address2: '',
        post_code2: '',
        email2: '',
        phone2: '',

        card_holder: '',
        card_number: '',
        cvv: '',
        expire_date: '',
    });

    const [dif_ship, setDif_ship] = React.useState(false);

    // tabs handler
    function faqHandler(name) {
        setExpanded({
            cupon: false,
            login: false,
            payment: true, [name]: !tabs[name]
        });
    }

    // forms handler
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
    };


    return (
        <Fragment>
            <div className="wpo-checkout-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-page-title">
                                <h2>Your Checkout</h2>
                                <p>There are 4 products in this list</p>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-wrap">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="caupon-wrap s2">
                                            <div className="coupon coupon-2">
                                                <div id="toggle2">
                                                    <div className="text" onClick={() => faqHandler('login')}><i className="fi flaticon-user-profile"></i> Returning customer?
                                                        <span>Click Here to Login</span></div>
                                                </div>
                                            </div>
                                            <Collapse in={tabs.login} timeout="auto"
                                                unmountOnExit>
                                                <div className="create-account s2">
                                                    <span>If you have shopped with us before, please enter your details in
                                                        the boxes below.
                                                        If you are a new customer, please proceed to the Billing & Shipping
                                                        section.</span>
                                                    <div className="name-input">
                                                        <input type="text" className="form-control" placeholder="Name" required />
                                                    </div>
                                                    <div className="name-email">
                                                        <input type="email" className="form-control" placeholder="Email"
                                                            required />
                                                    </div>
                                                    <div className="input-wrap s1">
                                                        <button type="submit">Login</button>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="caupon-wrap s1">
                                            <div className="coupon coupon-1">
                                                <div id="toggle1">
                                                    <div className="text" onClick={() => faqHandler('cupon')}><i className="fi flaticon-coupon"></i>Have a Coupon?<span>Click Here
                                                        to Enter</span></div>
                                                </div>
                                            </div>
                                            <Collapse in={tabs.cupon} timeout="auto"
                                                unmountOnExit>
                                                <div className="create-account s1">
                                                    <span>If you have coupon code,please apply it</span>
                                                    <div className="input-wrap">
                                                        <input type="password" />
                                                        <button>Apply</button>
                                                    </div>
                                                </div>
                                            </Collapse>

                                        </div>
                                    </div>
                                </div>
                                <div className="caupon-wrap s3">
                                    <Grid className="checkoutWrapper">
                                        <div className="check-form-area">
                                            <Grid className="cuponWrap checkoutCard">

                                                <Grid className="chCardBody">
                                                    <form className="cuponForm">
                                                        <Grid container spacing={3}>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="First Name"
                                                                    name="fname"
                                                                    value={forms.fname}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Last Name"
                                                                    name="lname"
                                                                    value={forms.lname}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                                                                <FormControl className="formSelect" fullWidth variant="filled">
                                                                    <Select
                                                                        labelId="demo-simple-select-filled-label"
                                                                        id="demo-simple-select-filled"
                                                                        value={forms.country}
                                                                        name="country"
                                                                        onChange={(e) => changeHandler(e)}
                                                                    >
                                                                        <MenuItem value="">
                                                                            <em>None</em>
                                                                        </MenuItem>
                                                                        <MenuItem value={10}>Ten</MenuItem>
                                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Dristrict"
                                                                    name="dristrict"
                                                                    value={forms.dristrict}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    multiline
                                                                    maxRows="3"
                                                                    label="Address"
                                                                    name="address"
                                                                    value={forms.address}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Post Code"
                                                                    name="post_code"
                                                                    value={forms.post_code}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Email Adress"
                                                                    name="email"
                                                                    value={forms.email}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="email"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Phone No"
                                                                    name="phone"
                                                                    value={forms.phone}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <FormControlLabel
                                                                    className="checkBox"
                                                                    control={
                                                                        <Checkbox
                                                                            checked={dif_ship}
                                                                            onChange={() => setDif_ship(!dif_ship)}
                                                                            value={dif_ship}
                                                                            color="primary"
                                                                        />
                                                                    }
                                                                    label="Ship to a different address?"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Collapse in={dif_ship} timeout="auto" unmountOnExit>
                                                                    <Grid container spacing={3}>
                                                                        <Grid item sm={6} xs={12}>
                                                                            <TextField
                                                                                fullWidth
                                                                                label="First Name"
                                                                                name="fname2"
                                                                                value={forms.fname2}
                                                                                onChange={(e) => changeHandler(e)}
                                                                                type="text"
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                className="formInput radiusNone"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item sm={6} xs={12}>
                                                                            <TextField
                                                                                fullWidth
                                                                                label="Last Name"
                                                                                name="lname2"
                                                                                value={forms.lname2}
                                                                                onChange={(e) => changeHandler(e)}
                                                                                type="text"
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                className="formInput radiusNone"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item sm={6} xs={12}>
                                                                            <InputLabel
                                                                                id="demo-simple-select-filled-label">Age</InputLabel>
                                                                            <FormControl className="formSelect" fullWidth
                                                                                variant="filled">
                                                                                <Select
                                                                                    labelId="demo-simple-select-filled-label"
                                                                                    id="demo-simple-select-filled"
                                                                                    value={forms.country2}
                                                                                    name="country2"
                                                                                    onChange={(e) => changeHandler(e)}
                                                                                >
                                                                                    <MenuItem value="">
                                                                                        <em>None</em>
                                                                                    </MenuItem>
                                                                                    <MenuItem value={10}>Ten</MenuItem>
                                                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                                                </Select>
                                                                            </FormControl>
                                                                        </Grid>
                                                                        <Grid item sm={6} xs={12}>
                                                                            <TextField
                                                                                fullWidth
                                                                                label="Dristrict"
                                                                                name="dristrict2"
                                                                                value={forms.dristrict2}
                                                                                onChange={(e) => changeHandler(e)}
                                                                                type="text"
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                className="formInput radiusNone"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12}>
                                                                            <TextField
                                                                                fullWidth
                                                                                multiline
                                                                                maxRows="3"
                                                                                label="Address"
                                                                                name="address2"
                                                                                value={forms.address2}
                                                                                onChange={(e) => changeHandler(e)}
                                                                                type="text"
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                className="formInput radiusNone"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item sm={6} xs={12}>
                                                                            <TextField
                                                                                fullWidth
                                                                                label="Post Code"
                                                                                name="post_code2"
                                                                                value={forms.post_code2}
                                                                                onChange={(e) => changeHandler(e)}
                                                                                type="text"
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                className="formInput radiusNone"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item sm={6} xs={12}>
                                                                            <TextField
                                                                                fullWidth
                                                                                label="Email Adress"
                                                                                name="email2"
                                                                                value={forms.email2}
                                                                                onChange={(e) => changeHandler(e)}
                                                                                type="email"
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                className="formInput radiusNone"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12}>
                                                                            <TextField
                                                                                fullWidth
                                                                                label="Phone No"
                                                                                name="phone2"
                                                                                value={forms.phone2}
                                                                                onChange={(e) => changeHandler(e)}
                                                                                type="text"
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                className="formInput radiusNone"
                                                                            />
                                                                        </Grid>
                                                                    </Grid>
                                                                </Collapse>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    multiline
                                                                    label="Order Notes"
                                                                    placeholder="Note about your order"
                                                                    name="note"
                                                                    value={forms.note}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone note"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </form>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="cout-order-area">
                                    <h3>Your Order</h3>
                                    <div className="oreder-item">
                                        <div className="title">
                                            <h2>Products <span>Subtotal</span></h2>
                                        </div>
                                        {cartList.map((item, pitem) => (
                                            <div className="oreder-product" key={pitem}>
                                                <div className="images">
                                                    <span>
                                                        <img src={item.proImg} alt="" />
                                                    </span>
                                                </div>
                                                <div className="product">
                                                    <ul>
                                                        <li className="first-cart">{item.title} (x{item.qty})</li>
                                                        <li>
                                                            <div className="rating-product">
                                                                <i className="fi flaticon-star"></i>
                                                                <i className="fi flaticon-star"></i>
                                                                <i className="fi flaticon-star"></i>
                                                                <i className="fi flaticon-star"></i>
                                                                <i className="fi flaticon-star"></i>
                                                                <span>15</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span>${item.price}</span>
                                            </div>
                                        ))}
                                        <div className="title s2">
                                            <h2>Total<span>${totalPrice(cartList)}</span></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="caupon-wrap s5">
                                    <div className="payment-area">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="payment-option" id="open5">
                                                    <h3>Payment</h3>
                                                    <div className="payment-select">
                                                        <RadioGroup className="paymentMethod" aria-label="Payment Method"
                                                            name="payment_method"
                                                            value={forms.payment_method}
                                                            onChange={(e) => changeHandler(e)}>
                                                            <FormControlLabel value="cash" control={<Radio color="primary" />}
                                                                label="Direct Bank Transfer" />
                                                            <FormControlLabel value="card" control={<Radio color="primary" />}
                                                                label="Cash On delivery" />
                                                            <FormControlLabel value="online" control={<Radio color="primary" />}
                                                                label="Online Getway" />

                                                        </RadioGroup>
                                                    </div>
                                                    <Collapse in={forms.payment_method === 'cash'} timeout="auto">
                                                        <div id="open6" className="payment-name active">
                                                            <ul>
                                                                {cardType.map((item, i) => (
                                                                    <li className="visa" key={i}><input id={item.id} type="radio" name="size"
                                                                        value="30" />
                                                                        <label htmlFor={item.id}><img src={item.img} alt={item.title} /></label>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <div className="contact-form form-style">
                                                                <CheckWrap />
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                    <Collapse in={forms.payment_method === 'card'} timeout="auto">
                                                        <Grid className="cardType">
                                                            <Link to='/order_received' className="theme-btn mt-20 ml-15" type="submit">Proceed to Checkout</Link>
                                                        </Grid>
                                                    </Collapse>
                                                    <Collapse in={forms.payment_method === 'online'} timeout="auto">
                                                        <div id="open6" className="payment-name active">
                                                            <ul>
                                                                {cardType.map((item, g) => (
                                                                    <li className="visa" key={g}><input id={item.id} type="radio" name="size"
                                                                        value="30" />
                                                                        <label htmlFor={item.id}><img src={item.img} alt={item.title} /></label>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <div className="contact-form form-style">
                                                                <CheckWrap />
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};


export default CheckoutSection;