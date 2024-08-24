import React from 'react'

export default function GeriBildirimVer() {
  return (
<>
<section className="no-col-padding">
    <div className="container-fluid sc_home-bg-type-b">
        <div className="content_container">
            <div className="columns_wrap">
                <div className="column_container column-1_1">
                    <div className="column-inner">
                        <div className="m_wrapper">
                            <div className="sc_form_wrap">
                                <div className="sc_form sc_form_style_form_1 aligncenter sc_home-param-type-g">
                                    <h3 className="sc_form_title sc_item_title sc_item_title_without_descr">Bize Geri Bildirim Verin</h3>
                                    <h6 className="sc_form_subtitle sc_item_subtitle">iletişim formu</h6>
                                    <form className="sc_input_hover_default" data-formtype="form_1" method="post" action="https://lovestory-html.themerex.net/include/contact-form.php">
                                        <div className="sc_form_info columns_wrap">
                                            <div className="sc_form_item sc_form_field label_over column-1_2">
                                                <input id="sc_form_username" type="text" name="username" placeholder="Ad *" aria-required="true" />
                                            </div>
                                            <div className="sc_form_item sc_form_field label_over column-1_2">
                                                <input id="sc_form_email" type="text" name="email" placeholder="E-posta *" aria-required="true" />
                                            </div>
                                            <div className="sc_form_item sc_form_message column-1_1">
                                                <textarea id="sc_form_message" name="message" placeholder="Mesaj" aria-required="true"></textarea>
                                            </div>
                                        </div>
                                        <div className="sc_form_item sc_form_button">
                                            <button>Mesaj Gönder</button>
                                        </div>
                                        <div className="result sc_infobox"></div>
                                    </form>
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
