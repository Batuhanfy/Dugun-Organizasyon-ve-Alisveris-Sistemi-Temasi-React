import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ArticlesBlog() {

    const bloglar = useSelector((state)=> state.blog.blogs);
console.log(bloglar);
  return (
<>
<section className="no-col-padding">
                                <div className="container-fluid">
                                    <div className="content_container">
                                        <div className="columns_wrap">
                                            <div className="column_container column-1_1">
                                                <div className="column-inner">
                                                    <div className="m_wrapper">
                                                        <div className="sc_blogger layout_classNameic_3 template_masonry margin_top_small  sc_blogger_horizontal no_description sc_home-margin-type-h">
                                                            <h3 className="sc_blogger_title sc_item_title sc_item_title_without_descr">Blogdan Makaleler</h3>
                                                            <h6 className="sc_blogger_subtitle sc_item_subtitle">Blog</h6>
                                                            <div className="isotope_wrap" data-columns="3">


                                                                <div className="isotope_item isotope_item_classNameic isotope_item_classNameic_3 isotope_column_3">

                                                                    <div className="post_item post_item_classNameic post_item_classNameic_3	post_format_standard odd">
                                                                        <div className="post_featured">
                                                                            <div className="post_thumb" data-image="images/blog_img1.jpg" data-title="An occasion that joins two hearts in a symphony">
                                                                                <a className="hover_icon hover_icon_link" href="blog-standart-post.html"><img className="post-image" alt="An occasion that joins two hearts in a symphony" src="images/blog_img1-370x240.jpg" /></a>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post_content isotope_item_content">
                                                                            <div className="post_info"> <span className="post_info_item post_info_posted"> <a href="blog-standart-post.html" className="post_info_date">Jul 27, 2016</a></span> </div>
                                                                            <h5 className="post_title"><a href="blog-standart-post.html">İki kalbi bir senfonide birleştiren olay</a></h5>
                                                                            <div className="post-info-bottom">
                                                                                <div className="post_info"> <span className="post_info_item post_info_posted_by">By <a href="#" className="post_info_author">Cindy Jefferson</a></span> <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments" title="Comments - 3" href="#"><span className="post_counters_number">3 comments</span></a> </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post_descr">
                                                                                <p></p>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                <div className="isotope_item isotope_item_classNameic isotope_item_classNameic_3 isotope_column_3">

                                                                    <div className="post_item post_item_classNameic post_item_classNameic_3	post_format_standard even">
                                                                        <div className="post_featured">
                                                                            <div className="post_thumb" data-image="images/blog_img2.jpg" data-title="The role of your bouquette in wedding compositions">
                                                                                <a className="hover_icon hover_icon_link" href="blog-standart-post.html"><img className="post-image" alt="The role of your bouquette in wedding compositions" src="images/blog_img2-370x240.jpg" /></a>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post_content isotope_item_content">
                                                                            <div className="post_info"> <span className="post_info_item post_info_posted"> <a href="blog-standart-post.html" className="post_info_date">Jul 18, 2016</a></span> </div>
                                                                            <h5 className="post_title"><a href="blog-standart-post.html">Buketinizin düğün kompozisyonlarındaki rolü</a></h5>
                                                                            <div className="post-info-bottom">
                                                                                <div className="post_info"> <span className="post_info_item post_info_posted_by">By <a href="#" className="post_info_author">Cindy Jefferson</a></span> <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments" title="Comments - 1" href="#"><span className="post_counters_number">1 comment</span></a> </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post_descr">
                                                                                <p></p>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                <div className="isotope_item isotope_item_classNameic isotope_item_classNameic_3 isotope_column_3">

                                                                    <div className="post_item post_item_classNameic post_item_classNameic_3 post_format_standard odd last">
                                                                        <div className="post_featured">
                                                                            <div className="post_thumb" data-image="images/blog_img3.jpg" data-title="10 reasons why you should hire a wedding planner">
                                                                                <a className="hover_icon hover_icon_link" href="blog-standart-post.html"><img className="post-image" alt="10 reasons why you should hire a wedding planner" src="images/blog_img3-370x240.jpg" /></a>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post_content isotope_item_content">
                                                                            <div className="post_info"> <span className="post_info_item post_info_posted"> <a href="blog-standart-post.html" className="post_info_date">Jul 9, 2016</a></span> </div>
                                                                            <h5 className="post_title"><a href="blog-standart-post.html">Bir düğün planlamacısı tutmanız için 10 neden</a></h5>
                                                                            <div className="post-info-bottom">
                                                                                <div className="post_info"> <span className="post_info_item post_info_posted_by">By <a href="#" className="post_info_author">Cindy Jefferson</a></span> <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments" title="Comments - 2" href="#"><span className="post_counters_number">2 comments</span></a> </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post_descr">
                                                                                <p></p>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div className="sc_blogger_button sc_item_button"><Link to='/blogs'><a href="blog-masonry-3-columns.html" className="sc_button sc_button_square sc_button_style_filled sc_button_size_medium">Daha Fazla</a></Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
</>
)
}
