import React from 'react'
import { Link } from 'react-router-dom'

export default function GalleryBanner() {
  return (
<>
<section className="no-col-padding overflow-hidden">
                                <div className="container-fluid sc_home-bg-type-c">
                                    <div className="content_container">
                                        <div className="columns_wrap">
                                            <div className="column_container column-1_1">
                                                <div className="column-inner">
                                                    <div className="m_wrapper">
                                                        <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_7 sc_home-margin-type-e" data-equal-height=".sc_column_item">
                                                            <div className="column-4_7 sc_column_item odd first span_4"></div><div className="column-3_7 sc_column_item odd" data-animation="animated fadeInRightBig normal">
                                                                <h6 className="sc_title sc_title_regular sc_home-margin-type-f">Nefes Alın</h6>
                                                                <h3 className="sc_title sc_title_regular margin_top_tiny margin_bottom_tiny sc_home-font-type-a">En İyi Çiçekçilerden Özel Tasarım</h3>
                                                                <div className="m_text_column m_content_element ">
                                                                    <div className="m_wrapper">
                                                                        <p>Çiçeklerin özel etkinlik ve toplantıların dekorasyonunda büyük rol oynaması nedeniyle çiçekçilik işi, kurumsal ve sosyal etkinlik dünyasında önemli bir pazara sahiptir.</p>
                                                                    </div>
                                                                </div><Link to='/portfolio'> <a href="gallery-grid.html" className="sc_button sc_button_square sc_button_style_filled sc_button_size_large sc_home-margin-type-g" >Galerimizi Gör</a></Link>
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
