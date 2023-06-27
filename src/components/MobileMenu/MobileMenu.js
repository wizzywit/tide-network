import React, { Fragment, useState } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Main Home',
                link: '/home'
            },
            {
                id: 12,
                title: 'Election Home',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Male Candidate',
                link: '/home3'
            },
            {
                id: 14,
                title: 'Female Candidate',
                link: '/home4'
            },
        ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

    {
        id: 6,
        title: 'Campaign',
        link: '/campaign',
        submenu: [
            {
                id: 61,
                title: 'Campaign',
                link: '/campaign',
            },
            {
                id: 62,
                title: 'Campaign Style 2',
                link: '/campaign-2'
            },
            {
                id: 63,
                title: 'Campaign Style 3',
                link: '/campaign-3'
            },
            {
                id: 64,
                title: 'Campaign Single',
                link: '/campaign-single/Support-for-Womans'
            },
        ]
    },
    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'Gallery',
                link: '/gallery'
            },
            {
                id: 322,
                title: 'Testimonial',
                link: '/testimonial'
            },
            {
                id: 385,
                title: 'Team',
                link: '/team',
            },
            {
                id: 386,
                title: 'Team Single',
                link: '/team-single/Esther-Howard'
            },
            {
                id: 388,
                title: 'Services',
                link: '/service'
            },
            {
                id: 389,
                title: 'Services Single',
                link: '/service-single/Economic-Establishment'
            },
            {
                id: 371,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 375,
                title: 'Shop Single',
                link: '/product-single/The-Audacity-of-Hope'
            },
            {
                id: 376,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 377,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 33,
                title: 'FAQ',
                link: '/faq'
            },
            {
                id: 39,
                title: 'Volunteer',
                link: '/volunteer'
            },
            {
                id: 34,
                title: '404 Error',
                link: '/404'
            },
            {
                id: 35,
                title: 'Login',
                link: '/login'
            },
            {
                id: 36,
                title: 'Register',
                link: '/register'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/support-progressive-change'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/support-progressive-change'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/support-progressive-change'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;