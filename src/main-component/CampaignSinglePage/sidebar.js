import React from 'react'
import Services from '../../api/service';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="blog-sidebar">
            <div className="widget search-widget">
                <form onSubmit={SubmitHandler}>
                    <div>
                        <input type="text" className="form-control" placeholder="Search Post.." />
                        <button type="submit"><i className="ti-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="widget category-widget">
                <h3>Services</h3>
                <ul>
                    {Services.slice(0, 5).map((service, Sitem) => (
                        <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="widget recent-post-widget">
                <h3>Related Posts</h3>
                <div className="posts">
                    {blogs.map((blog, bl) => (
                        <div className="post" key={bl}>
                            <div className="img-holder">
                                <img src={blog.screens} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                <span className="date">{blog.create_at}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="widget tag-widget">
                <h3>Tags</h3>
                <ul>
                    <li><Link to="/">ELECTION</Link></li>
                    <li><Link to="/">Campaign</Link></li>
                    <li><Link to="/">STATEMENT</Link></li>
                    <li><Link to="/">POLITICS</Link></li>
                    <li><Link to="/">PRESS</Link></li>
                    <li><Link to="/">SOCIAL</Link></li>
                    <li><Link to="/">SECURITY</Link></li>
                    <li><Link to="/">VOTE</Link></li>
                </ul>
            </div>
        </div>

    )
}

export default ServiceSidebar;