
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import '../swipercss.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { useEffect } from "react";
import Planning from '../Components/Planning';

export default function AboutUs() {
  return (
<>
<section className="no-col-padding">
                                <div className="container-fluid sc_home-bg-type-b">
                                    <div className="content_container">
                                        <div className="columns_wrap">
                                            <div className="column_container column-1_1">
                                                <div className="column-inner">
                                                    <div className="m_wrapper">
                                                        <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_9 sc_home-margin-type-a">
                                                            <div className="column-5_9 sc_column_item  odd first span_5">
                                                                <h6 className="sc_title sc_title_regular margin_top_null sc_home-margin-type-b">Hakkımızda</h6>
                                                                <h2 className="sc_title sc_title_iconed margin_top_tiny margin_bottom_null sc_home-margin-type-c fsz_cust">Sizin için  &amp; Hayalinizdeki<br />
                                                                    Düğünü Tasarlıyoruz!<span className="sc_title_icon sc_title_icon_bottom  sc_title_icon_small"><img src="images/vector-smart-object-copy-12.png" alt="" /></span></h2>
                                                                <div className="m_text_column m_content_element ">
                                                                    <div className="m_wrapper">
                                                                        <p>Düğününüzün her anını hayalinizdeki gibi planlayın. Biz, en özel gününüzü unutulmaz kılmak için tüm detaylarla ilgileniyoruz, siz sadece anın tadını çıkarın.</p>
                                                                    </div>
                                                                </div><Link to='/about-us'> <div className="sc_button sc_button_square sc_button_style_filled sc_button_size_medium sc_home-margin-type-d">Daha Fazlası</div></Link></div><div className="column-4_9 sc_column_item even span_4">
                                                                <div className="cq-coverslider  navigation-overlay-right tinyshadow grapefruit " data-imagemaxheight="300" data-buttonbackground="" data-buttonhoverbackground="#222F46" data-contentbackground="" data-contentcolor="" data-arrowcolor="" data-arrowhovercolor="" data-delaytime="2">
                                                                    <div className="cq-coverslider-area btn-large square">
                                                                        <div className="cq-coverslider-cover">
                                                                            <div className="cq-coverslider-itemcontainer">
                                                                                <div className="cq-coverslider-imageitem"><img src="images/welcome_gallery_img1.jpg" className="cq-coverslider-image" alt="" /></div>
                                                                                <div className="cq-coverslider-imageitem"><img src="images/welcome_gallery_img2-1.jpg" className="cq-coverslider-image" alt="" /></div>
                                                                                <div className="cq-coverslider-imageitem"><img src="images/welcome_gallery_img3.jpg" className="cq-coverslider-image" alt="" /></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cq-coverslider-content">
                                                                            <div className="cq-coverslider-contentitem"></div>
                                                                            <div className="cq-coverslider-contentitem"></div>
                                                                            <div className="cq-coverslider-contentitem"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cq-coverslider-navigation btn-large">
                                                                        <div className="coverslider-navigation-prev"><i className="cq-coverslider-icon entypo-icon entypo-icon-left-open-big"></i></div><div className="coverslider-navigation-next"><i className="cq-coverslider-icon entypo-icon entypo-icon-right-open-big"></i></div>
                                                                    </div>
                                                                </div>
                                                            </div>
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
