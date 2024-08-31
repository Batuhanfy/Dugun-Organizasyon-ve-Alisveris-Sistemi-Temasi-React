import React from 'react'
import { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { fetchProduct, filterProductsByPrice, setSortOrder, sortProducts, kategorifiltresi } from '../store/productsSlice';
import { sepetEkle, fetchSepet, sepetSil } from '../store/sepetSlice';

export default function BuyLastItems() {


    const dispatch = useDispatch();

    const isurunler = useSelector((state) => state.product.loading);

    const urunler = useSelector((state)=> state.product.allProducts);
   
    useEffect(() => {
        if (isurunler === "idle") {
            dispatch(fetchProduct());
        }
    }, [dispatch, isurunler]);



    const sepete_ekle = (product) => {
        Swal.fire({
            title: 'Sepete Ekleniyor...',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
          
              // 1 saniye (1000ms) sonra otomatik olarak kapat
              setTimeout(() => {
                Swal.close();
              }, 1000);
            }
          });
        dispatch(sepetEkle(product));
    }


  return (
   <>
                           <section className="no-col-padding">
                                <div className="container-fluid">
                                    <div className="content_container">
                                        <div className="columns_wrap">
                                            <div className="column_container column-1_1">
                                                <div className="column-inner">
                                                    <div className="m_wrapper">
                                                        <div className="sc_section margin_top_huge margin_bottom_medium aligncenter">
                                                            <div className="sc_section_inner">
                                                                <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">En Yeni Tasarımlarımızdan Alışveriş</h2>
                                                                <h6 className="sc_section_subtitle sc_item_subtitle">Market</h6>
                                                                <div className="sc_section_content_wrap">
                                                                    <div className="woocommerce columns-3">
                                                                        <ul className="products">

                                                                            {urunler.map((item)=>(

<li key={item.id} className="product type-product status-publish has-post-thumbnail product_cat-flower-decor product_tag-floristic product_tag-joy instock shipping-taxable purchasable product-type-simple">
<div className="post_item_wrap">
    <div className="post_featured">
        <div className="post_thumb">
          <img src={item.img} className="attachment-shop_catalog size-shop_catalog post-image" alt="product4" title="product4" sizes="(max-width: 555px) 100vw, 555px" /> 
        </div>
    </div>
    <div className="post_content">
        <h3>{item.name}</h3> <span className="price"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol"></span>{item.price} TL</span>
        </span> <a rel="nofollow" href="#" data-quantity="1" data-product_id="143" data-product_sku=""  onClick={() => sepete_ekle(item)} className="button product_type_simple add_to_cart_button ajax_add_to_cart">Sepete Ekle</a>
    </div>
</div>
</li>
                                                                            ))}
                                                                          
                                                                           
                                                                        </ul>
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
