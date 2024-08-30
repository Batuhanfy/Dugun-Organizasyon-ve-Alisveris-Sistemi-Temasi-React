import React from 'react'
import GiveFeedBack from '../Components/GiveFeedBack'
import NewsMailTab from '../Components/NewsMailTab'

export default function ContactPage() {
  return (
   <>
               <div className="top_panel_title title_present">
                <div className="top_panel_title_inner title_present bg-breadcrumbs">
                    <div className="content_wrap">
                        <h1 className="page_title">Contacts</h1>
                        <div className="breadcrumbs">
                            <a className="breadcrumbs_item home" href="index-2.html">Home</a><span className="breadcrumbs_delimiter"></span><span className="breadcrumbs_item current">Contacts</span>
                        </div>	
                    </div>
                </div>
            </div>
            <div className="page_content_wrap page_paddings_no scheme_original">
                <div className="content">
                   
                    <article className="post_item_single page type-page">
                       
                        <div className="post_content">
                           
                            <GiveFeedBack/>
                           <NewsMailTab/>
                                              
                        </div>
                        
                    </article>
                    
                </div>
                
            </div>
   </>
  )
}
