import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProduct } from '../store/productsSlice';
import { useEffect } from 'react';
import { sepetEkle,fetchSepet } from '../store/sepetSlice';

export default function Shop() {




const urunler = useSelector((state) => state.product.allProduct);


const sepete_ekle =(product) =>{
   console.log(product);
   dispatch(sepetEkle(product));

}


const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchSepet());
  }, [dispatch]);



  return (

    <>
           <div className="archive post-type-archive woocommerce woocommerce-page body_filled sidebar_show sidebar_left sidebar_outer_hide">
	
	<div className="body_wrap">
		
		<div className="page_wrap">
	
            <div className="page_content_wrap page_paddings_yes">
               
                <div className="content_wrap">
                   
                    <div className="content">
                         
                        <div className="list_products shop_mode_thumbs">
                            <nav className="woocommerce-breadcrumb"><a href="index-2.html">Home</a>&nbsp;&#47;&nbsp;Product</nav>
                            <div className="mode_buttons">
                                <form action="#" method="post">
                                    <input type="hidden" name="lovestory_shop_mode" value="thumbs" />
                                    <a href="shop.html" className="woocommerce_thumbs icon-th" title="Show products as thumbs"></a><a href="shop-list.html" className="woocommerce_list icon-th-list" title="Show products as list"></a>
                                </form>
                            </div>
                            <p className="woocommerce-result-count"> Showing all 6 results</p>
                            <form className="woocommerce-ordering" method="get">
                                <select name="orderby" className="orderby">
                                    <option value="menu_order" selected='selected'>Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="date">Sort by newness</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select>
                            </form>
                            <ul className="products">
                                {urunler.map((product)=>(
  <li className="product has-post-thumbnail column-1_2 last" key={product.id}>
  <div className="post_item_wrap">
      <div className="post_featured">
          <div className="post_thumb">
              <a className="hover_icon hover_icon_link" href="shop-single.html">
                <img src={product.img} alt="product4" title="product4"/> 
              </a>
          </div>
      </div>
      <div className="post_content">
          <h3><a href="shop-single.html">{product.name}</a></h3> <span className="price"><span className="amount"><span className="woocommerce-Price-currencySymbol"></span>{product.price} TL</span>
          </span> <a rel="nofollow" href="#" className="button add_to_cart_button" onClick={()=>sepete_ekle(product)}>Sepete Ekle</a> 
         
      </div>
  </div>
</li>

                                ))}
                              
                                
                            </ul>
                        </div>
                        
                    </div>
                    
                     
                    <div className="sidebar widget_area scheme_original">
                        <div className="sidebar_inner widget_area_inner">
                            <aside className="widget woocommerce widget_shopping_cart">
                                <h5 className="widget_title">Alışveriş Sepetiniz</h5>
                                <div className="widget_shopping_cart_content">
                                    
                                    <ul className="cart_list product_list_widget ">
                                        <li className="mini_cart_item"> <a href="#" className="remove" title="Remove this item">×</a>
                                            <a href="#"> <img src="images/product4-180x180.jpg" alt="product4"/>Flower Decor&nbsp; </a> <span className="quantity">1 × <span className="amount"><span className="woocommerce-Price-currencySymbol">$</span>55.00</span>
                                            </span>
                                        </li>
                                        <li className="mini_cart_item"> <a href="#" className="remove" title="Remove this item">×</a>
                                            <a href="#"> <img src="images/product1-180x180.jpg" alt="product1"/>Love Balloons&nbsp; </a> <span className="quantity">1 × <span className="amount"><span className="woocommerce-Price-currencySymbol">$</span>65.00</span>
                                            </span>
                                        </li>
                                    </ul>
                                    
                                    <p className="total"><strong>Toplam: </strong><span className="amount"><span className="woocommerce-Price-currencySymbol">$</span>120.00</span>
                                    </p>
                                    <p className="buttons custom_style"><a href="#" className="button wc-forward">Sepete Git</a><a href="#" className="button checkout wc-forward">Satın Al</a></p>
                                </div>
                            </aside><aside id="woocommerce_price_filter-2" className="widget woocommerce widget_price_filter">
                                    <h5 className="widget_title">Fiyat Filtresi</h5>
                                    <form method="get" action="#">
                                        <div className="price_slider_wrapper">
                                            <div className="price_slider display_none"></div>
                                            <div className="price_slider_amount">
                                                <input type="text" id="min_price" name="min_price" value="" data-min="45" placeholder="Minimum Fiyat" />
                                                <input type="text" id="max_price" name="max_price" value="" data-max="130" placeholder="Maximum Fiyat" />
                                                <button type="submit" className="button">Filtrele</button>
                                                <div className="price_label display_none">
                                                    Price: <span className="from"></span> &mdash;
                                                           <span className="to"></span>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </form>
                            </aside><aside className="widget woocommerce widget_product_tag_cloud">
                                <h5 className="widget_title">Etiketler</h5>
                                <div>
                                    <a className="font-8pt" href='#' title='2 products'>beautiful</a>
                                    <a className="font-8pt" href='#' title='2 products'>decorations</a> 
                                    <a className="font-8pt" href='#' title='2 products'>floristic</a>
                                    <a className="font-8pt" href='#' title='2 products'>joy</a> 
                                    <a className="font-8pt" href='#' title='2 products'>love</a> 
                                    <a className="font-8pt" href='#' title='2 products'>roses</a>
                                </div>
                            </aside><aside id="woocommerce_product_categories-2" className="widget woocommerce widget_product_categories">
                                <h5 className="widget_title">Product Categories</h5>
                                <ul className="product-categories">
                                    <li className="cat-item"><a href="#">Balloons</a></li>
                                    <li className="cat-item"><a href="#">Bouquets</a></li>
                                    <li className="cat-item"><a href="#">Dessert Stands</a></li>
                                    <li className="cat-item"><a href="#">Flower Decor</a></li>
                                    <li className="cat-item"><a href="#">Lights &amp; Candles</a></li>
                                    <li className="cat-item"><a href="#">Signs &amp; Signatures</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            
       
        </div>
        
    </div>

</div>
    </>
  )
}
