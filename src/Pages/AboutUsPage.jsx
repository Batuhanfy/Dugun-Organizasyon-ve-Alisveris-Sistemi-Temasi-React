import React from 'react'
import AboutUsInPage from '../Components/AboutUsInPage'
import QuotationTab from '../Components/QuotationTab'
import ArticlesBlog from '../Components/ArticlesBlog'
import SloganBanner from '../Components/SloganBanner'
import NewsMailTab from '../Components/NewsMailTab'
import { Link } from 'react-router-dom'


export default function AboutUsPage() {
  return (
    <>
                 <div className="top_panel_title title_present">
                <div className="top_panel_title_inner title_present bg-breadcrumbs">
                    <div className="content_wrap">
                        <h1 className="page_title">Biz Kimiz?</h1>
                        <div className="breadcrumbs">
                           <Link to="/">Anasayfa </Link><span className="breadcrumbs_delimiter"></span><span className="breadcrumbs_item current">Hakkımızda</span>
                        </div>	
                    </div>
                </div>
            </div>
            
			<div className="page_content_wrap page_paddings_no">
               
                <div className="content">
                    
                    <article className="post_item post_item_single page type-page">
                        
                        <div className="post_content">
                         <AboutUsInPage/>
                            <QuotationTab/>
                           
                           <SloganBanner/>
                            <NewsMailTab/>    
                        </div>
                        
                    </article>
                   
                </div>
                
            </div>
    </>
  )
}
