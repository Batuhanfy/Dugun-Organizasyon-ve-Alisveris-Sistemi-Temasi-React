import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contact } from '../store/dataSlice';


import Swal from 'sweetalert2';

export default function GeriBildirimVer() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Verisi:', formData);

        if(formData.email === "" || formData.username === "" || formData.message === ""){
            Swal.fire({
                title: 'Hata!',
                text: 'Formu doldurunuz.',
                icon: 'error',
                confirmButtonText: 'Tamam'
              });
              
        }else {
            dispatch(contact(formData));
       
            Swal.fire({
                title: 'Başarılı!',
                text: 'En kısa sürede size geri dönüş sağlayacağız.',
                icon: 'success',
                confirmButtonText: 'Tamam'
              });
        }
       




    };

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
                                                <form   id="reactForm" className="sc_input_hover_default" onSubmit={handleSubmit}>
                                                    <div className="sc_form_info columns_wrap">
                                                        <div className="sc_form_item sc_form_field label_over column-1_2">
                                                            <input
                                                                id="sc_form_username"
                                                                type="text"
                                                                name="username"
                                                                placeholder="Ad *"
                                                                aria-required="true"
                                                                value={formData.username}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="sc_form_item sc_form_field label_over column-1_2">
                                                            <input
                                                                id="sc_form_email"
                                                                type="text"
                                                                name="email"
                                                                placeholder="E-posta *"
                                                                aria-required="true"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="sc_form_item sc_form_message column-1_1">
                                                            <textarea
                                                                id="sc_form_message"
                                                                name="message"
                                                                placeholder="Mesaj"
                                                                aria-required="true"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="sc_form_item sc_form_button">
                                                        <button type="submit">Mesaj Gönder</button>
                                                    </div>
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
