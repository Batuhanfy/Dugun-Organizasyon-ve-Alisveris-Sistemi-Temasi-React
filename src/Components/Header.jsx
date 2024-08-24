import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSepet,sepetEkle,sepetSil } from '../store/sepetSlice';


export default function Header() {


    const sepetteki_urun_sayisi= useSelector((state)=>state.sepet.sepettekiler.length);
    const sepet = useSelector((state) => state.sepet.sepettekiler);

    const urunler = useSelector((state) => state.product.allProduct);

    const sepettenSil = (product)=>{
        console.log("sepetten siliniyor");
        console.log(product);
        dispatch(sepetSil(product));
    }

    const dispatch=useDispatch();



  return (
    <>
              <div className="top_panel_fixed_wrap"></div>
            <header className="top_panel_wrap top_panel_style_2 scheme_original">
                <div className="top_panel_wrap_inner top_panel_inner_style_2 top_panel_position_above">
                    <div className="top_panel_middle">
                        <div className="content_wrap">
                            <div className="columns_wrap columns_fluid">
                                <div className="column-1_5 contact_field contact_phone">
                                     <span className="contact_icon icon-icon_phone"></span>
                                     <span className="contact_us">Bizi Ara</span>
                                     <span className="contact_label contact_phone">212 654 48 45</span>
                                </div>
                                <div className="column-3_5 contact_logo">
                                    <div className="logo">
                                        <a href="#"><img src="images/logo.png" className="logo_main" alt=""/>
                                        <img src="images/logo.png" className="logo_fixed" alt=""/></a>
                                    </div>
                                </div>
                                <div className="column-1_5 contact_field contact_cart">
                                    <a href="#" className="top_panel_cart_button"> 
                                        <span className="contact_icon icon-icon_cart"></span>
                                        <span className="contact_label contact_cart_label">Sepetindekiler:</span> 
                                        <span className="contact_cart_totals">
                                        <span className="cart_items">({sepetteki_urun_sayisi})</span> - <span className="cart_summa">
                                      
                              <span>
                                
                                {sepet.reduce(
                                  (a, c) =>
                                    a + c.product.price * c.quantity,
                                  0
                                )}
                                 
                              </span> TL
                                          
                                        </span>
                                        </span>
                                    </a>
                                       <ul className="widget_area sidebar_cart sidebar">
                                        <li>
                                            <div className="widget woocommerce widget_shopping_cart">
                                                <div className="hide_cart_widget_if_empty">
                                                    <div className="widget_shopping_cart_content">
                                                        <ul className="cart_list product_list_widget ">
                                                                       
                                                    {sepet.map((item) => (
                                                        
                                                        <li className="mini_cart_item" key={item.product.id}>
                                                             <a href="#" onClick={()=>{sepettenSil(item.product)}} className="remove" title="Remove this item">×</a>
                                                            <a href="#"> <img src={item.product.img} alt="product4" />{item.product.name}</a> <span className="quantity">{item.quantity} × <span className="amount"><span className="woocommerce-Price-currencySymbol"></span>{item.product.price}</span> TL
                                                            </span>
                                                        </li>
                                                    ))}
                                                            
                                                        
                                                        </ul>
                                                        
                                                        <p className="total"><strong>Toplam:</strong> <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol"></span>
                                                        {sepet.reduce(
                                  (a, c) =>
                                    a + c.product.price * c.quantity,
                                  0
                                )} TL
                                                        </span>
                                                        </p>
                                                        <p className="buttons"><a href="#" className="button wc-forward">Sepetim</a><a href="#" className="button checkout wc-forward">SATIN AL</a> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top_panel_bottom">
                        <div className="content_wrap clearfix">
                            <nav className="menu_main_nav_area menu_hover_fade">
                                <ul id="menu_main" className="menu_main_nav">
                                    <li className="menu-item ">
                                    <Link to="/"><span>Anasayfa</span></Link>
                                       
                                    </li>
                                    <li className="menu-item"><Link to="/about-us"><span>Hakkımızda</span></Link>
                                       
                                    </li>
                                  
                                    <li className="menu-item">  <Link to="/shop"><span>MAĞAZA</span></Link></li>
                                    <li className="menu-item">  <Link to="/our-team"><span>EKİBİMİZ</span></Link></li>
                                    <li className="menu-item ">  <Link to="/our-services"><span>HİZMETLERİMİZ</span></Link>
                                       
                                    </li>
                                    <li className="menu-item ">  <Link to="/blogs"><span>Blog</span></Link>
                                       
                                    </li>
                                    <li className="menu-item">  <Link to="/contact"><span>İLETİŞİM</span></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>




            <div className="header_mobile">
                <div className="content_wrap">
                    <div className="menu_button icon-menu"></div>
                    <div className="logo">
                        <a href="#"><img src="images/logo.png" className="logo_main" alt=""/></a>
                    </div>
                    <div className="menu_main_cart top_panel_icon">
                        <a href="#" className="top_panel_cart_button"> <span className="contact_icon icon-icon_cart"></span><span className="contact_label contact_cart_label">Your cart:</span> <span className="contact_cart_totals">
                        <span className="cart_items">(2)</span> - <span className="cart_summa">&#36;120.00</span> </span>
                        </a>
                        <ul className="widget_area sidebar_cart sidebar">
                            <li>
                                <div className="widget woocommerce widget_shopping_cart">
                                    <div className="hide_cart_widget_if_empty">
                                        <div className="widget_shopping_cart_content">
                                            <ul className="cart_list product_list_widget ">
                                                <li className="mini_cart_item"><a href="#" className="remove" title="Remove this item">×</a>
                                                    <a href="#"><img src="images/product4-180x180.jpg"/>Flower Decor&nbsp; </a><span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>55.00</span>
                                                    </span>
                                                </li>
                                                <li className="mini_cart_item"><a href="#" className="remove" title="Remove this item">×</a>
                                                    <a href="#"><img src="images/product1-180x180.jpg"/>Love Balloons&nbsp; </a><span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>65.00</span>
                                                    </span>
                                                </li>
                                            </ul>
                                            <p className="total"><strong>Subtotal:</strong> <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>120.00</span>
                                            </p>
                                            <p className="buttons"><a href="#" className="button wc-forward">View Cart</a><a href="#" className="button checkout wc-forward">Checkout</a> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="side_wrap">
                    <div className="close">Close</div>
                    <div className="panel_top">
                        <nav className="menu_main_nav_area">
                            <ul id="menu_mobile" className="menu_main_nav">
                                <li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent">
                                <Link to="/"><span>Anasayfa</span></Link>
                                  
                                </li>
                                <li className="menu-item"><Link to="/about-us"><span>Hakkımızda</span></Link>
                                       
                                       </li>
                                     
                                       <li className="menu-item">  <Link to="/shop"><span>MAĞAZA</span></Link></li>
                                       <li className="menu-item">  <Link to="/our-team"><span>EKİBİMİZ</span></Link></li>
                                       <li className="menu-item ">  <Link to="/our-services"><span>HİZMETLERİMİZ</span></Link>
                                          
                                       </li>
                                       <li className="menu-item ">  <Link to="/blogs"><span>Blog</span></Link>
                                          
                                       </li>
                                       <li className="menu-item">  <Link to="/contact"><span>İLETİŞİM</span></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="panel_middle">
                        <div className="contact_field contact_phone">
                             <span className="contact_icon icon-phone"></span>
                             <span className="contact_label contact_phone">212 654 48 45</span>
                             <span className="contact_icon icon-mail"></span>
                             <span className="contact_label contact_email ">iletisim@sevgievim.com</span>
                        </div>
                    </div>
                </div>
                <div className="mask"></div>
            </div>
    </>
  )
}
