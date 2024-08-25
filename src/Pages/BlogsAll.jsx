import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs, filtreleBlogs } from '../store/blogSlice';

export default function BlogsAll() {


    const[searchtext,setsearchtext]=useState("");


    const blogdurum = useSelector((state)=>state.blog.status);
    const dispatch=useDispatch();
useEffect(()=>{
if(blogdurum=="idle"){
    dispatch(fetchBlogs());
}
},[blogdurum,dispatch]);

    const bloglar=useSelector((state)=>state.blog.filteredblogs);

 
    const handleChange =(event)=>{
  setsearchtext(event.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch(filtreleBlogs(searchtext));
        

    }

  return (
<>
<div className='page body_filled sidebar_show sidebar_right sidebar_outer_hide'>
<div className="top_panel_title title_present">
                <div className="top_panel_title_inner title_present bg-breadcrumbs">
                    <div className="content_wrap">
                        <h1 className="page_title">Tüm Paylaşımlar</h1>
                        <div className="breadcrumbs"><a className="breadcrumbs_item home" href="index-2.html">Anasayfa</a><span className="breadcrumbs_delimiter"></span><a className="breadcrumbs_item all" href="blog-classNameic.html">Blog classNameic</a><span className="breadcrumbs_delimiter"></span><span className="breadcrumbs_item current">Bloglar</span></div>
                    </div>
                </div>
            </div>
            
            <div className="page_content_wrap page_paddings_yes">
                
                <div className="content_wrap">
                    
                    <div className="content">
                        

                        {bloglar.map((item)=>(
    <article className="post_item post_item_excerpt" key={item.id}>
    <h3 className="post_title"><a href="blog-standart-post.html">{item.title}</a></h3>
    <div className="post_info"> 
       <span className="post_info_item post_info_posted"> <a href="blog-standart-post.html" className="post_info_date">{item.date}</a></span> 
       <span className="post_info_item post_info_posted_by">By <a href="#" className="post_info_author">{item.author}</a></span> 
       <span className="post_info_item post_info_counters">	<a className="post_counters_item post_counters_comments" title="Comments - 0" href="#"><span className="post_counters_number">{item.commentcount} Yorum</span></a> </span>
    </div>
    <div className="post_featured">
        <div className="post_thumb" data-image="images/post-1.jpg" data-title="The First Day of the Rest of Their Lives">
            <a className="hover_icon hover_icon_link" href="blog-standart-post.html"><img className="post-image" alt="The First Day of the Rest of Their Lives" src={item.img}/></a>
        </div>
    </div>
    
    <div className="post_content clearfix">
        <div className="post_descr">
            <p>{item.mindesc}</p><a href="blog-standart-post.html" className="sc_button sc_button_square sc_button_style_filled sc_button_size_small">Read more</a> </div>
    </div>
    
</article>
                        ))}
                       
                        

                    
                        


                    </div>
                    
                    
                    
                    <div className="sidebar widget_area scheme_original">
                        <div className="sidebar_inner widget_area_inner">
                          <aside  className="widget widget_search">
                                <h5 className="widget_title">Search</h5>
                                <form method="post" onSubmit={handleSubmit} className="search_form" action="#">
                                    <input type="text" onChange={handleChange} className="search_field" placeholder="Search" name="search" />
                                    <button type="submit" className="search_button icon-search" href="#"></button>
                                </form>
                            </aside><aside  className="widget widget_archive">
                                <h5 className="widget_title">Archive</h5>
                                <ul>
                                    <li><a href='#'>August 2016</a></li>
                                    <li><a href='#'>June 2016</a></li>
                                    <li><a href='#'>May 2016</a></li>
                                    <li><a href='#'>April 2016</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            </div>
</>

  )
}
