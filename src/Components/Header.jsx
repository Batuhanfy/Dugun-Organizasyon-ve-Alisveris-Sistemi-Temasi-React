import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sepetEkle, sepetSil } from '../store/sepetSlice';

export default function Header() {
  const sepetteki_urun_sayisi = useSelector((state) => state.sepet.sepettekiler.length);
  const sepet = useSelector((state) => state.sepet.sepettekiler);
  const dispatch = useDispatch();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const sepettenSil = (product) => {
    dispatch(sepetSil(product));
  };

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

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
                    <Link to="/">
                      <img src="images/logo.png" className="logo_main" alt="" />
                      <img src="images/logo.png" className="logo_fixed" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="column-1_5 contact_field contact_cart">
                  <div className="top_panel_cart_button" onClick={toggleSidePanel}>
                    <span className="contact_icon icon-icon_cart"></span>
                    <span className="contact_label contact_cart_label">Sepetindekiler:</span>
                    <span className="contact_cart_totals">
                      <span className="cart_items">({sepetteki_urun_sayisi})</span> - 
                      <span className="cart_summa">
                        {sepet.reduce((a, c) => a + c.product.price * c.quantity, 0)} TL
                      </span>
                    </span>
                  </div>
                  <ul className={`widget_area sidebar_cart sidebar ${isSidePanelOpen ? 'open' : ''}`}>
                    <li>
                      <div className="widget woocommerce widget_shopping_cart">
                        <div className="hide_cart_widget_if_empty">
                          <div className="widget_shopping_cart_content">
                            <ul className="cart_list product_list_widget">
                              {sepet.map((item) => (
                                <li className="mini_cart_item" key={item.product.id}>
                                  <button onClick={() => sepettenSil(item.product)} className="remove" title="Remove this item">
                                    ×
                                  </button>
                                  <Link to={`/product/${item.product.id}`}>
                                    <img src={item.product.img} alt="product4" />{item.product.name}
                                  </Link>
                                  <span className="quantity">
                                    {item.quantity} × <span className="amount">{item.product.price}</span> TL
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <p className="total">
                              <strong>Toplam:</strong> 
                              <span className="woocommerce-Price-amount amount">
                                {sepet.reduce((a, c) => a + c.product.price * c.quantity, 0)} TL
                              </span>
                            </p>
                            <p className="buttons">
                              <Link to="/shop" className="button wc-forward">Sepetim</Link>
                              <Link to="/checkout" className="button checkout wc-forward">SATIN AL</Link>
                            </p>
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
                  <li className="menu-item">
                    <Link to="/"><span>Anasayfa</span></Link>
                  </li>
                  <li className="menu-item"><Link to="/about-us"><span>Hakkımızda</span></Link></li>
                  <li className="menu-item"><Link to="/shop"><span>MAĞAZA</span></Link></li>
                  <li className="menu-item"><Link to="/our-team"><span>EKİBİMİZ</span></Link></li>
                  <li className="menu-item"><Link to="/our-services"><span>HİZMETLERİMİZ</span></Link></li>
                  <li className="menu-item"><Link to="/blogs"><span>Blog</span></Link></li>
                  <li className="menu-item"><Link to="/contact"><span>İLETİŞİM</span></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="header_mobile">
        <div className="content_wrap">
          <div className="menu_button icon-menu" onClick={toggleSidePanel}></div>
          <div className="logo">
            <Link to="/"><img src="images/logo.png" className="logo_main" alt="" /></Link>
          </div>
          <div className="menu_main_cart top_panel_icon" onClick={toggleSidePanel}>
            <span className="contact_icon icon-icon_cart"></span>
            <span className="contact_label contact_cart_label">Your cart:</span>
            <span className="contact_cart_totals">
              <span className="cart_items">({sepetteki_urun_sayisi})</span> - 
              <span className="cart_summa">
                {sepet.reduce((a, c) => a + c.product.price * c.quantity, 0)} TL
              </span>
            </span>
            <ul className={`widget_area sidebar_cart sidebar ${isSidePanelOpen ? 'open' : ''}`}>
              <li>
                <div className="widget woocommerce widget_shopping_cart">
                  <div className="hide_cart_widget_if_empty">
                    <div className="widget_shopping_cart_content">
                      <ul className="cart_list product_list_widget">
                        {sepet.map((item) => (
                          <li className="mini_cart_item" key={item.product.id}>
                            <button onClick={() => sepettenSil(item.product)} className="remove" title="Remove this item">
                              ×
                            </button>
                            <Link to={`/product/${item.product.id}`}>
                              <img src={item.product.img} alt="product4" />{item.product.name}
                            </Link>
                            <span className="quantity">
                              {item.quantity} × <span className="amount">{item.product.price}</span> TL
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="total">
                        <strong>Toplam:</strong> 
                        <span className="woocommerce-Price-amount amount">
                          {sepet.reduce((a, c) => a + c.product.price * c.quantity, 0)} TL
                        </span>
                      </p>
                      <p className="buttons">
                        <Link to="/cart" className="button wc-forward">View Cart</Link>
                        <Link to="/checkout" className="button checkout wc-forward">Checkout</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`side_wrap ${isSidePanelOpen ? 'open' : ''}`}>
          <div className="close" onClick={toggleSidePanel}>Close</div>
          <div className="panel_top">
            <nav className="menu_main_nav_area">
              <ul id="menu_mobile" className="menu_main_nav">
                <li className="menu-item">
                  <Link to="/"><span>Anasayfa</span></Link>
                </li>
                <li className="menu-item"><Link to="/about-us"><span>Hakkımızda</span></Link></li>
                <li className="menu-item"><Link to="/shop"><span>MAĞAZA</span></Link></li>
                <li className="menu-item"><Link to="/our-team"><span>EKİBİMİZ</span></Link></li>
                <li className="menu-item"><Link to="/our-services"><span>HİZMETLERİMİZ</span></Link></li>
                <li className="menu-item"><Link to="/blogs"><span>Blog</span></Link></li>
                <li className="menu-item"><Link to="/contact"><span>İLETİŞİM</span></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
