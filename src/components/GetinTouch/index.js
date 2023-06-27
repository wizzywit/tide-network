import React, { Component } from 'react'
import './style.css'

class GetinTouch extends Component {


    state = {
        name: '',
        email: '',
        phone: '',
        lastname: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            phone,
            lastname,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (phone === '') {
            error.phone = "Please enter your phone";
        }
        if (lastname === '') {
            error.lastname = "Please enter your Lastname";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.phone === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                phone: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render() {
        const { name,
            email,
            phone,
            error } = this.state;

        return (
            <div className="question-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="wpo-section-title">
                                <h2>Do You Have Any Question?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="question-touch">
                                <h2>Get In Touch</h2>
                                <form onSubmit={this.subimtHandler}>
                                    <div className="half-col">
                                        <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name" />
                                        <p>{error.name ? error.name : ''}</p>
                                    </div>
                                    <div className="half-col">
                                        <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email" />
                                        <p>{error.email ? error.email : ''}</p>
                                    </div>
                                    <div className="half-col">
                                        <input onChange={this.changeHandler} value={phone} type="text" name="phone" placeholder="phone" />
                                        <p>{error.phone ? error.phone : ''}</p>
                                    </div>
                                    <div>
                                        <textarea className="form-control" name="note" id="note" placeholder="Your Question"></textarea>
                                    </div>
                                    <div className="submit-btn-wrapper">
                                        <button type="submit" className="theme-btn">Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default GetinTouch;