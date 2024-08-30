import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import '../swipercss.css';

export default function AboutUs() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update(); 
      }
    };

    // Wait for images to load and then reinitialize swiper
    const imagesLoaded = document.querySelectorAll('img');
    let loadedCount = 0;

    imagesLoaded.forEach((img) => {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesLoaded.length && swiperRef.current?.swiper) {
          swiperRef.current.swiper.update(); // Reinitialize swiper after images are loaded
        }
      };
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="no-col-padding">
      <div className="container-fluid sc_home-bg-type-b">
        <div className="content_container">
          <div className="columns_wrap">
            <div className="column_container column-1_1">
              <div className="column-inner">
                <div className="m_wrapper">
                  <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_9 sc_home-margin-type-a">
                    <div className="column-5_9 sc_column_item odd first span_5">
                      <h6 className="sc_title sc_title_regular margin_top_null sc_home-margin-type-b">Hakkımızda</h6>
                      <h2 className="sc_title sc_title_iconed margin_top_tiny margin_bottom_null sc_home-margin-type-c fsz_cust">Sizin için  &amp; Hayalinizdeki<br />
                        Düğünü Tasarlıyoruz!<span className="sc_title_icon sc_title_icon_bottom  sc_title_icon_small"><img src="images/vector-smart-object-copy-12.png" alt="" /></span></h2>
                      <div className="m_text_column m_content_element ">
                        <div className="m_wrapper">
                          <p>Düğününüzün her anını hayalinizdeki gibi planlayın. Biz, en özel gününüzü unutulmaz kılmak için tüm detaylarla ilgileniyoruz, siz sadece anın tadını çıkarın.</p>
                        </div>
                      </div>
    
                    </div>
                    <div className="column-4_9 sc_column_item even span_4">
                      <div className="cq-coverslider navigation-overlay-right tinyshadow grapefruit" data-imagemaxheight="300" data-buttonbackground="" data-buttonhoverbackground="#222F46" data-contentbackground="" data-contentcolor="" data-arrowcolor="" data-arrowhovercolor="" data-delaytime="2">
                        <Swiper
                          ref={swiperRef}
                          slidesPerView={1}
                          spaceBetween={30}
                          freeMode={true}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[FreeMode, Pagination]}
                          className="mySwiper"
                        >
                          <SwiperSlide><img src="images/welcome_gallery_img1.jpg" className="cq-coverslider-image" alt="Slide 1" /></SwiperSlide>
                          <SwiperSlide><img src="images/welcome_gallery_img2-1.jpg" className="cq-coverslider-image" alt="Slide 2" /></SwiperSlide>
                          <SwiperSlide><img src="images/welcome_gallery_img3.jpg" className="cq-coverslider-image" alt="Slide 3" /></SwiperSlide>
                        </Swiper>
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
  );
}
