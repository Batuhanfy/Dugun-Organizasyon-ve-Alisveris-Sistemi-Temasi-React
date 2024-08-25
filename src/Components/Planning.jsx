import React from 'react'
import { Link } from 'react-router-dom'
import WeddingRequestModal from '../Components/Modal'; 
import { useSelector } from 'react-redux';
import { useState } from 'react';
export default function Planning() {
    const [modalOpen, setModalOpen] = useState(false);
    const[countOrg,setcountOrg]= useState(0);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <>
            <section className="no-col-padding">
                <div className="content_container">
                    <div className="columns_wrap">
                        <div className="column_container column-1_1">
                            <div className="column-inner">
                                <div className="m_wrapper">

                                    <div className="sc_services_wrap">

                                        <div className="sc_services sc_services_style_services-1 sc_services_type_images margin_bottom_medium sc_home-param-type-a">
                                            <h3 className="sc_services_title sc_item_title sc_item_title_without_descr">Harika bir düğün planlayalım!</h3>
                                            <h6 className="sc_services_subtitle sc_item_subtitle">Hoşgeldiniz :)</h6>
                                            <div className="sc_columns columns_wrap">
                                                <div className="column-1_3 column_padding_bottom">
                                                    <div className="sc_services_item odd first">
                                                        <div className="sc_services_item_featured post_featured">
                                                            <div className="post_thumb" data-image="" data-title="Bouquets &amp; Style">
                                                                <a className="hover_icon hover_icon_link" href="services-our.html"><img className="post-image" alt="img1.jpg" src="images/img1-370x240.jpg" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="sc_services_item_content">
                                                            <h4 className="sc_services_item_title"><a href="services-our.html">Çiçekler &amp; Still</a></h4>
                                                            <div className="sc_services_item_description"> <Link to='/shop'><div className="sc_button sc_button_square sc_button_style_hovered sc_button_size_small">Alışverişe Başla</div></Link> </div>
                                                        </div>
                                                    </div>
                                                </div><div className="column-1_3 column_padding_bottom">
                                                    <div className="sc_services_item even">
                                                        <div className="sc_services_item_featured post_featured">
                                                            <div className="post_thumb" data-image="" data-title="Wedding Planning">
                                                                <a className="hover_icon hover_icon_link" href="shop.html"><img className="post-image" alt="img2.jpg" src="images/img2-370x240.jpg" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="sc_services_item_content">
                                                            <h4 className="sc_services_item_title"><a href="shop.html">Düğün Planlamanız</a></h4>
                                                            <div className="sc_services_item_description"> <a href="#" onClick={openModal} className="sc_button sc_button_square sc_button_style_hovered sc_button_size_small">Hemen Planla</a> </div>
                                                        </div>

                           
                       
                          <WeddingRequestModal isOpen={modalOpen} onClose={closeModal} guncelle={setcountOrg} />
                                                    </div>
                                                </div><div className="column-1_3 column_padding_bottom">
                                                    <div className="sc_services_item odd">
                                                        <div className="sc_services_item_featured post_featured">
                                                            <div className="post_thumb" data-image="" data-title="Catering &amp; Decoration">
                                                                <a className="hover_icon hover_icon_link" href="shop.html"><img className="post-image" alt="img3.jpg" src="images/img3-370x240.jpg" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="sc_services_item_content">
                                                            <h4 className="sc_services_item_title"><a href="shop.html">İkram &amp; Dekorasyon</a></h4>
                                                            <div className="sc_services_item_description"> <Link to='/shop'><div className="sc_button sc_button_square sc_button_style_hovered sc_button_size_small">Alışverişe Başla</div></Link> </div>
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
                </div>
            </section>
        </>
    )
}
