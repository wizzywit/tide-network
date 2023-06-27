import React from 'react'
import { Link } from 'react-router-dom'
import blog3 from '../../../images/blog-details/comments-author/img-1.jpg'
import blog4 from '../../../images/blog-details/comments-author/img-2.jpg'
import blog5 from '../../../images/blog-details/comments-author/img-3.jpg'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const Comments = () => {
    return (
        <div id="Comments" className="wpo-blog-single-section">
            <div className="comments-area">
                <div className="comments-section">
                    <h3 className="comments-title">Comments</h3>
                    <ol className="comments">
                        <li className="comment even thread-even depth-1" id="comment-1">
                            <div id="div-comment-1">
                                <div className="comment-theme">
                                    <div className="comment-image"><img src={blog3} alt="" /></div>
                                </div>
                                <div className="comment-main-area">
                                    <div className="comment-wrapper">
                                        <div className="comments-meta">
                                            <h4>John Abraham <span className="comments-date">January 12,2022
                                                At 9.00am</span></h4>
                                        </div>
                                        <div className="comment-area">
                                            <p>I will give you a complete account of the system, and
                                                expound the actual teachings of the great explorer of
                                                the truth, </p>
                                            <div className="comments-reply">
                                                <Link className="comment-reply-link" to="/blog-single/support-progressive-change"><span>Reply</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="children">
                                <li className="comment">
                                    <div>
                                        <div className="comment-theme">
                                            <div className="comment-image"><img src={blog4} alt="" /></div>
                                        </div>
                                        <div className="comment-main-area">
                                            <div className="comment-wrapper">
                                                <div className="comments-meta">
                                                    <h4>Lily Watson <span className="comments-date">January
                                                        12,2022 At 9.00am</span></h4>
                                                </div>
                                                <div className="comment-area">
                                                    <p>I will give you a complete account of the system,
                                                        and expound the actual teachings of the great
                                                        explorer of the truth, </p>
                                                    <div className="comments-reply">
                                                        <Link className="comment-reply-link" to="/blog-single/support-progressive-change"><span>Reply</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul>
                                        <li className="comment">
                                            <div>
                                                <div className="comment-theme">
                                                    <div className="comment-image"><img src={blog5} alt="" /></div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">January
                                                                12,2022 At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>I will give you a complete account of the
                                                                system, and expound the actual teachings
                                                                of the great explorer of the truth, </p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/blog-single/support-progressive-change"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="comment">
                            <div>
                                <div className="comment-theme">
                                    <div className="comment-image"><img src={blog3} alt="" /></div>
                                </div>
                                <div className="comment-main-area">
                                    <div className="comment-wrapper">
                                        <div className="comments-meta">
                                            <h4>John Abraham <span className="comments-date">January 12,2022
                                                At 9.00am</span></h4>
                                        </div>
                                        <div className="comment-area">
                                            <p>I will give you a complete account of the system, and
                                                expound the actual teachings of the great explorer of
                                                the truth, </p>
                                            <div className="comments-reply">
                                                <Link className="comment-reply-link" to="/blog-single/support-progressive-change"><span>Reply</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="comment-respond">
                <h3 className="comment-reply-title">Leave a Comment</h3>
                <form method="post" id="commentform" className="comment-form" onSubmit={SubmitHandler}>
                    <div className="form-inputs">
                        <input placeholder="Name" type="text" />
                        <input placeholder="Email" type="email" />
                        <input placeholder="Website" type="url" />
                    </div>
                    <div className="form-textarea">
                        <textarea id="comment"
                            placeholder="Write Your Comments..."></textarea>
                    </div>
                    <div className="form-submit">
                        <input id="submit" value="Reply" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Comments;