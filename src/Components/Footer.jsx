import React from 'react'
import { useSelector } from 'react-redux'



export default function Footer() {
    const rezervasyon_talebi_sayisi = useSelector((state)=>state.sepet.organizasyontalep.length);
console.log(rezervasyon_talebi_sayisi);
  return (
    <>
                
                <footer className="contacts_wrap scheme_original">
               
               <div className="contacts_wrap_inner">
                  
                   <div className="content_wrap">
                       <div className="contacts_address">
                           <address className="address_right address_block">
                               <span className="sc_icon icon-icon4"></span>
                               <p className="address_title">Adres</p><p>İslambey Mahallesi, Hükümet Sokak / Arnavutköy / İstanbul<br/></p>			
                           </address><address className="address_center phone_block">
                               <span className="sc_icon icon-icon5"></span>
                               <p className="address_title">Telefon</p><p>212 654 48 45 </p>				
                           </address><address className="address_left email_block">
                               <span className="sc_icon icon-icon6"></span>
                               <p className="address_title">Mail Adresi</p><p>iletisim@sevgievim.com </p>	
                           </address>
                       </div>
                   </div>	
                   
               </div>	
               
           </footer>
           
           
           
           <footer className="footer_wrap widget_area scheme_original">
              
               <div className="footer_wrap_inner widget_area_inner">
                  
                   <div className="content_wrap">
                       <aside id="lovestory_widget_socials-2" className="widget_number_1 widget widget_socials">
                           <div className="widget_inner">
                               <div className="logo">
                                   <a href="index-2.html"><img src="images/logo_2x.png" style={{maxHeight:"130px"}} className="logo_main" alt=""/></a>
                               </div>
                               <div className="sc_socials sc_socials_type_icons sc_socials_shape_round sc_socials_size_tiny">
                                   <div className="sc_socials_item"><a href="#" className="social_icons social_facebook"><span className="icon-facebook"></span></a></div><div className="sc_socials_item"><a href="#" className="social_icons social_twitter"><span className="icon-twitter"></span></a></div><div className="sc_socials_item"><a href="#" className="social_icons social_instagramm"><span className="icon-instagramm"></span></a></div><div className="sc_socials_item"><a href="#" className="social_icons social_gplus"><span className="icon-gplus"></span></a></div>
                              
                             
                               </div>
                              
                           </div>
                           <span>
                                Sitemizde şuana kadar {rezervasyon_talebi_sayisi} adet rezervasyon talebi oluşturuldu.
                              </span>
                       </aside>
                   </div>
                   
               </div>
               
           </footer>
           
                
           <div className="copyright_wrap copyright_style_text  scheme_original">
               <div className="copyright_wrap_inner">
                   <div className="content_wrap">
                       <div className="copyright_text">
                           <p>Batuhan Korkmaz Themes &copy; 2024 All Rights Reserved <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
                       </div>
                   </div>
               </div>
           </div>
    </>
  )
}
