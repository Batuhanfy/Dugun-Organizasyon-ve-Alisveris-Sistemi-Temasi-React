import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import '../swipercss.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { motion } from "framer-motion"
import { useEffect } from "react";
import Planning from '../Components/Planning';
import AboutUs from '../Components/AboutUs';
import ExtraOptions from '../Components/ExtraOptions';
import BuyLastItems from '../Components/BuyLastItems';
import GalleryBanner from '../Components/GalleryBanner';
import QuotationTab from '../Components/QuotationTab';
import ArticlesBlog from '../Components/ArticlesBlog';
import SloganBanner from '../Components/SloganBanner';
import EventPlans from '../Components/EventPlans';
import NewsMailTab from '../Components/NewsMailTab';
import GiveFeedBack from '../Components/GiveFeedBack';


export default function Main() {

    return (
        <>

            <section className="slider_wrap slider_fullwide slider_engine_revo slider_alias_Homeslider mainslider_1">

                <div id="mainslider_1" className="rev_slider_wrapper fullwidthbanner-container revslider-global-param " data-source="gallery">
               
                    <div id="rev_slider_2_1" className="rev_slider fullwidthabanner " data-version="5.3.0.2">

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper mb-4 mt-4"
                        >
                            <SwiperSlide><img src="images/wedding1.png" /></SwiperSlide>
                            <SwiperSlide><img src="images/wedding2.png" /></SwiperSlide>
                            <SwiperSlide><img src="images/wedding3.png" /></SwiperSlide>
                            <SwiperSlide><img src="images/wedding4.png" /></SwiperSlide>
                            <SwiperSlide><img src="images/wedding5.png" /></SwiperSlide>
                        </Swiper>
                        <ul>

                            <li data-index="rs-5" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="images/slide1-100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">

                                <img src="images/slide1.jpg" alt="" title="slide1" width="1920" height="820" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="110" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" data-no-retina />


                                <div className="tp-caption Title-slider tp-resizeme revslider-param-type-a"
                                    id="slide-5-layer-1"
                                    data-x="center"
                                    data-hoffset=""
                                    data-y="center"
                                    data-voffset="-50"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:50px;opacity:0;","speed":700,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                    data-textAlign="['center','center','center','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]">We’ll Make Your Wedding
                                    <br />Perfect
                                </div>

                                <div className="tp-caption Divider-slider tp-resizeme revslider-param-type-b"
                                    id="slide-5-layer-2"
                                    data-x="center"
                                    data-hoffset="1"
                                    data-y="center"
                                    data-voffset="49"
                                    data-width="['none','none','none','none']"
                                    data-height="['none','none','none','none']"
                                    data-type="image"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:50px;opacity:0;","speed":700,"to":"o:1;","delay":1000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                    data-textAlign="['left','left','left','left']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]">
                                    <img src="images/divider_white.png" alt="" data-ww="260px" data-hh="26px" width="260" height="26" data-no-retina />
                                </div>
                            </li>

                            <li data-index="rs-9" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="images/slide2-100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">

                                <img src="images/slide2.jpg" alt="" title="slide2" width="1920" height="820" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="110" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" data-no-retina />


                                <div className="tp-caption Title-slider tp-resizeme  revslider-param-type-c"
                                    id="slide-9-layer-1"
                                    data-x="center"
                                    data-hoffset=""
                                    data-y="center"
                                    data-voffset="-50"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:50px;opacity:0;","speed":700,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                    data-textAlign="['center','center','center','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]">Gorgeous Flowers for Your
                                    <br />Special Event
                                </div>

                                <div className="tp-caption Divider-slider tp-resizeme revslider-param-type-d"
                                    id="slide-9-layer-2"
                                    data-x="center"
                                    data-hoffset="1"
                                    data-y="center"
                                    data-voffset="49"
                                    data-width="['none','none','none','none']"
                                    data-height="['none','none','none','none']"
                                    data-type="image"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:50px;opacity:0;","speed":700,"to":"o:1;","delay":1000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                    data-textAlign="['left','left','left','left']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]">
                                    <img src="images/divider_white.png" alt="" data-ww="260px" data-hh="26px" width="260" height="26" data-no-retina />
                                </div>
                            </li>

                            <li data-index="rs-10" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="images/slide3-100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">

                                <img src="images/slide3.jpg" alt="" title="slide3" width="1920" height="820" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="110" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" data-no-retina />


                                <div className="tp-caption Title-slider tp-resizeme revslider-param-type-e"
                                    id="slide-10-layer-1"
                                    data-x="center"
                                    data-hoffset=""
                                    data-y="center"
                                    data-voffset="-50"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:50px;opacity:0;","speed":700,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                    data-textAlign="['center','center','center','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]">Hand-Tied Bouquets
                                </div>

                                <div className="tp-caption Divider-slider tp-resizeme revslider-param-type-f"
                                    id="slide-10-layer-2"
                                    data-x="center"
                                    data-hoffset="1"
                                    data-y="center"
                                    data-voffset="49"
                                    data-width="['none','none','none','none']"
                                    data-height="['none','none','none','none']"
                                    data-type="image"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:50px;opacity:0;","speed":700,"to":"o:1;","delay":1000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                    data-textAlign="['left','left','left','left']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]">
                                    <img src="images/divider_white.png" alt="" data-ww="260px" data-hh="26px" width="260" height="26" data-no-retina />
                                </div>
                            </li>
                        </ul>
                        <div className="tp-bannertimer tp-bottom hidden"></div>
                    </div>
                </div>

            </section>
            <div className="page_content_wrap page_paddings_no">

                <div className="content">
                    <article className="post_item post_item_single page type-page">
                        <div className="post_content">
                           
                <Planning/>
                     <AboutUs/>
                         <ExtraOptions/>
                            <BuyLastItems/>
                            <GalleryBanner/>
                           <QuotationTab/>
                       <ArticlesBlog/>
                                <SloganBanner/>
                                <EventPlans/>
                           <NewsMailTab/>
                          <GiveFeedBack/>
                           
                        </div>

                    </article>

                </div>

            </div>
        </>
    )
}
