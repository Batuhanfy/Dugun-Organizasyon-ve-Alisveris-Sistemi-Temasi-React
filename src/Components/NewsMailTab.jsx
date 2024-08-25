import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {bulten} from '../store/dataSlice'
import Swal from 'sweetalert2';


export default function HaberMailTab() {
const[mailaddress,setmailaddress]=useState("");

const handleChange=(e)=>{
    setmailaddress(e.target.value);
}

const dispatch = useDispatch();

const handleSubmit=(e)=>{
    e.preventDefault();

  
    Swal.fire({
        title: 'Başarılı!',
        text: 'Bültenimize kayıt oldunuz.',
        icon: 'success',
        confirmButtonText: 'Tamam'
      });
      

      
    dispatch(bulten(mailaddress));
    
}


  return (
<>
<section className="no-col-padding">
    <div className="container-fluid sc_home-bg-type-a">
        <div className="content_container">
            <div className="columns_wrap">
                <div className="column_container column-1_1">
                    <div className="column-inner">
                        <div className="m_wrapper">
                            <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_2 margin_top_large margin_bottom_large" data-equal-height=".sc_column_item">
                                <div className="column-1_2 sc_column_item odd first">
                                    <h3 className="sc_title sc_title_regular margin_bottom_null sc_home-param-type-f">Güncellemelerden Haberdar Olun!</h3>
                                </div>
                                <div className="column-1_2 sc_column_item even">
                                    <div className="m_text_column m_content_element">
                                        <div className="m_wrapper">
                                            <form id="mc4wp-form" onSubmit={handleSubmit} className="mc4wp-form mc4wp-form-341" method="post" data-id="341" data-name="">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" onChange={handleChange}  placeholder="E-posta Adresinizi Girin" className="emailer_input" required />
                                                    <input type="submit" className="emailer_submit" value="Gönder" />
                                                    <div className="hide">
                                                        <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" />
                                                    </div>
                                                </div>
                                                <div className="mc4wp-response"></div>
                                            </form>
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
