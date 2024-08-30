import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBlogs } from '../store/blogSlice';

export default function ArticlesBlog() {


    const bloglar = useSelector((state) => state.blog.blogs); // useSelector'ı bileşenin en üstünde çağırın
    const blogdurum = useSelector((state) => state.blog.status);
    const dispatch = useDispatch();

    useEffect(() => {
        // Eğer bloglar boşsa veya `status` loading ise fetch yap
        if (bloglar.length === 0 || blogdurum === 'loading') {
            dispatch(fetchBlogs());
        }
    }, [dispatch, bloglar, blogdurum]);

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
                                                {blogdurum === 'loading' && <p>Loading...</p>}
                                                {blogdurum === 'failed' && <p>Error fetching blogs</p>}
                                                {blogdurum === 'ok' && (
                                                    <ul>
                                                        {bloglar.map((item) => (
                                                            <div key={item.id} className="isotope_item isotope_item_classNameic isotope_item_classNameic_3 isotope_column_3">
                                                                <div className="post_item post_item_classNameic post_item_classNameic_3 post_format_standard odd">
                                                                    <div className="post_featured">
                                                                        <div className="post_thumb" data-image={item.img} data-title={item.mindesc}>
                                                                            <Link to={'blog/' + item.slug}>
                                                                                <a className="hover_icon hover_icon_link" href="#">
                                                                                    <img className="post-image" alt={item.mindesc} src={item.img} />
                                                                                </a>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="post_content isotope_item_content">
                                                                        <div className="post_info">
                                                                            <span className="post_info_item post_info_posted">
                                                                                <a href="blog-standart-post.html" className="post_info_date">{item.date}</a>
                                                                            </span>
                                                                        </div>
                                                                        <h5 className="post_title">
                                                                            <a href="blog-standart-post.html">{item.mindesc}</a>
                                                                        </h5>
                                                                        <div className="post-info-bottom">
                                                                            <div className="post_info">
                                                                                <span className="post_info_item post_info_posted_by">By <a href="#" className="post_info_author">{item.author}</a></span>
                                                                                <span className="post_info_item post_info_counters">
                                                                                    <a className="post_counters_item post_counters_comments" title="Comments - 3" href="#">
                                                                                        <span className="post_counters_number">{item.commentcount} yorum</span>
                                                                                    </a>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="post_descr">
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                )}

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
