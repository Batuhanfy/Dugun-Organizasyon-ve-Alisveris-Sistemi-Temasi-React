import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs, filtreleBlogs } from '../store/blogSlice';


export default function BlogDetail() {

    const { slug } = useParams();
    const dispatch = useDispatch();
    const blogPost = useSelector((state) => state.blog.blogs);
    const blogdurum = useSelector((state) => state.blog.status);


    useEffect(() => {
        if (blogdurum == "idle") {
            dispatch(fetchBlogs());
        }
    }, [blogdurum, dispatch]);

    const filteredBlog = blogPost.filter((blog) => blog.slug === slug);
    if(!filteredBlog){
        return <h1>Blog post not found.</h1>;
    }
   const blog = filteredBlog[0];
    return (
        <>
            <div className="single single-post body_filled sidebar_show sidebar_right sidebar_outer_hide">
                <div className="top_panel_title title_present">
                    <div className="top_panel_title_inner title_present bg-breadcrumbs">
                        <div className="content_wrap">
                            <h1 className="page_title">{blog.title}</h1>
                            <div className="breadcrumbs"><a className="breadcrumbs_item home" href="index-2.html">Anasayfa</a><span className="breadcrumbs_delimiter"></span><a className="breadcrumbs_item all" href="blog-classNameic.html">Bloglar</a><span className="breadcrumbs_delimiter"></span><a className="breadcrumbs_item cat_post" href="blog-standart-post.html">-</a><span className="breadcrumbs_delimiter"></span><span className="breadcrumbs_item current">{blog.title}</span></div>
                        </div>
                    </div>
                </div>

                <div className="page_content_wrap page_paddings_yes">

                    <div className="content_wrap">

                        <div className="content">

                            <article className="post_item post type-post">


                                <section className="post_content">
                                    <div className="post_info"> <span className="post_info_item post_info_posted"> <a href="#" className="post_info_date date updated" itemprop="datePublished" content="2016-08-15 08:29:39">{blog.date}</a></span> <span className="post_info_item post_info_posted_by vcard" itemprop="author">{blog.author} <a href="#" className="post_info_author"> tarafından yazıldı.</a></span> <span className="post_info_item post_info_counters">	<a className="post_counters_item post_counters_comments" title="Comments - 0" href="#"><span className="post_counters_number"></span></a>
                                    </span>
                                    </div>
                                    {blog.description}
                                    <div className="post_info post_info_bottom"> <span className="post_info_item post_info_tags">Etiketler: <a className="post_tag_link" href="#">blog</a>, <a className="post_tag_link" href="#">düğün</a></span> </div>
                                    
                                </section>

                                <section className="post_author author vcard">
                                    <div className="post_author_avatar">
                                        <a href="#"><img alt='' src='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png' /></a>
                                    </div>
                                    <h6 className="post_author_title"> {blog.author} <span itemprop="name"><div href="#" className="fn">Hakkında</div></span></h6>
                                    <div className="post_author_info" itemprop="description">Websitemizin blog yazarı. </div>
                                </section>
                            </article>


                        

                        </div>



                      


                    </div>

                </div>
            </div>
        </>
    )
}
