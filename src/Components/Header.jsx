import React from 'react'

export default function Header() {
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
                                        <span className="cart_items">(2)</span> - <span className="cart_summa">&#36;120.00</span>
                                        </span>
                                    </a>
                                       <ul className="widget_area sidebar_cart sidebar">
                                        <li>
                                            <div className="widget woocommerce widget_shopping_cart">
                                                <div className="hide_cart_widget_if_empty">
                                                    <div className="widget_shopping_cart_content">
                                                        <ul className="cart_list product_list_widget ">
                                                            <li className="mini_cart_item"> <a href="#" className="remove" title="Remove this item">×</a>
                                                                <a href="#"><img src="images/product4-180x180.jpg"/>Flower Decor&nbsp; </a> <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>55.00</span>
                                                                </span>
                                                            </li>
                                                            <li className="mini_cart_item"> <a href="#" className="remove" title="Remove this item">×</a>
                                                                <a href="#"><img src="images/product1-180x180.jpg"/>Love Balloons&nbsp; </a> <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>65.00</span>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        
                                                        <p className="total"><strong>Toplam:</strong> <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>120.00</span>
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
                                        <a href="#"><span>Anasayfa</span></a>
                                       
                                    </li>
                                    <li className="menu-item"><a href="#"><span>Hakkımızda</span></a>
                                       
                                    </li>
                                  
                                    <li className="menu-item"><a href="shop.html"><span>MAĞAZA</span></a></li>
                                    <li className="menu-item"><a href="our-team.html"><span>EKİBİMİZ</span></a></li>
                                    <li className="menu-item "><a href="#"><span>HİZMETLERİMİZ</span></a>
                                       
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a href="#"><span>Blog</span></a>
                                        <ul className="sub-menu fadeOutDown animated fast">
                                            <li className="menu-item"><a href="blog-classNameic.html"><span>classNameic</span></a></li>
                                            <li className="menu-item menu-item-has-children"><a href="#"><span>Style Masonry</span></a>
                                                <ul className="sub-menu fadeOutDown animated fast">
                                                    <li className="menu-item"><a href="blog-masonry-2-columns.html"><span>Masonry 2 Columns</span></a></li>
                                                    <li className="menu-item"><a href="blog-masonry-3-columns.html"><span>Masonry 3 Columns</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children"><a href="#"><span>Style Portfolio</span></a>
                                                <ul className="sub-menu fadeOutDown animated fast">
                                                    <li className="menu-item"><a href="blog-portfolio-2-columns.html"><span>Portfolio 2 Columns</span></a></li>
                                                    <li className="menu-item"><a href="blog-portfolio-3-columns.html"><span>Portfolio 3 Columns</span></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="contacts.html"><span>İLETİŞİM</span></a></li>
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
                                <li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent"><a href="#"><span>Home</span></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item current-menu-item"><a href="index-2.html"><span>Home Fullwidth</span></a></li>
                                        <li className="menu-item"><a href="home-boxed.html"><span>Home Boxed</span></a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"><a href="#"><span>About</span></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="about-us.html"><span>About Us</span></a></li>
                                        <li className="menu-item menu-item-has-children"><a href="#"><span>Portfolio</span></a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="gallery-grid.html"><span>Grid</span></a></li>
                                                <li className="menu-item"><a href="gallery-cobbles.html"><span>Cobbles</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item  menu-item-has-children"><a href="#"><span>Features</span></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item  menu-item-has-children"><a href="#"><span>Tools</span></a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="features-shortcodes.html"><span>Shortcodes</span></a></li>
                                                <li className="menu-item"><a href="features-typography.html"><span>Typography</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="#"><span>Support</span></a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="features-support.html"><span>Support</span></a></li>
                                                
                                                <li className="menu-item"><a href="features-video-tutorials.html"><span>Video Tutorials</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a href="shop.html"><span>Shop</span></a></li>
                                <li className="menu-item"><a href="our-team.html"><span>Team</span></a></li>
                                <li className="menu-item menu-item-has-children"><a href="#"><span>Services</span></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="services-our.html"><span>Our Services</span></a></li>
                                        <li className="menu-item"><a href="services-single.html"><span>Single Service</span></a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"><a href="#"><span>Blog</span></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="blog-classNameic.html"><span>classNameic</span></a></li>
                                        <li className="menu-item menu-item-has-children"><a href="#"><span>Style Masonry</span></a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="blog-masonry-2-columns.html"><span>Masonry 2 Columns</span></a></li>
                                                <li className="menu-item"><a href="blog-masonry-3-columns.html"><span>Masonry 3 Columns</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="#"><span>Style Portfolio</span></a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="blog-portfolio-2-columns.html"><span>Portfolio 2 Columns</span></a></li>
                                                <li className="menu-item"><a href="blog-portfolio-3-columns.html"><span>Portfolio 3 Columns</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a href="contacts.html"><span>Contacts</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="panel_middle">
                        <div className="contact_field contact_phone">
                             <span className="contact_icon icon-phone"></span>
                             <span className="contact_label contact_phone">800-123-4567</span>
                             <span className="contact_icon icon-mail"></span>
                             <span className="contact_label contact_email ">info@yoursite.com</span>
                        </div>
                    </div>
                </div>
                <div className="mask"></div>
            </div>
    </>
  )
}
