import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct, filterProductsByPrice ,setSortOrder, sortProducts} from '../store/productsSlice';
import { useEffect } from 'react';
import { sepetEkle, fetchSepet, sepetSil } from '../store/sepetSlice';
import Swal from 'sweetalert2';
import Notie from 'notie';
import 'notie/dist/notie.css';


export default function Shop() {

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");


    const filtreleHandler = (e) => {
        e.preventDefault();
        if(Number(minPrice) > Number(maxPrice)){
            Swal.fire({
                title: 'Hata!',
                text: 'Fiyat filtrelerken min fiyat daha az olmalıdır.',
                icon: 'error',
                confirmButtonText: 'Tamam'
              });
              
        }else if(minPrice == "" && maxPrice == ""){
            Swal.fire({
                title: 'Hata!',
                text: 'Fiyat bilgisi giriniz.',
                icon: 'error',
                confirmButtonText: 'Tamam'
              });
        }
        else{
            dispatch(filterProductsByPrice({ minPrice: Number(minPrice), maxPrice: Number(maxPrice) }));

        }

     
    };


    const sepet = useSelector((state) => state.sepet.sepettekiler);

    const urunler = useSelector((state) => state.product.filteredProducts);


    const sepete_ekle = (product) => {
        dispatch(sepetEkle(product));
        console.log(sepet);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct());
        dispatch(fetchSepet());
    }, [dispatch]);


    const sepettenSil = (product) => {
        console.log("sepetten siliniyor");
        console.log(product);
        dispatch(sepetSil(product));
    }

    const handleSortChange = (event) => {
        const newSortOrder = event.target.value;
        dispatch(setSortOrder(newSortOrder));
        dispatch(sortProducts());
      };

      const sortOrder = useSelector((state) => state.product.sortOrder);

      const kategorisec = (categoryName)=>{
       console.log(categoryName);
       dispatch(kategorifiltresi(categoryName))
      }

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
                                        <p className="woocommerce-result-count"> Toplamda {urunler.length} sonuç gösteriliyor.</p>
                                        <form className="woocommerce-ordering" method="get">
                                        <select name="orderby" className="orderby" value={sortOrder} onChange={handleSortChange}>
                                                <option value="menu_order" selected='selected'>Varsayılan sıralama</option>
                                                <option value="popularity">Popülerliğe Göre</option>
                                                <option value="rating">Ürün derecesine göre</option>
                                                <option value="date">Tarihe göre en yeni</option>
                                                <option value="price">En ucuzdan Pahalıya</option>
                                                <option value="price-desc">En pahalıdan Ucuza</option>
                                            </select>
                                        </form>
                                        <ul className="products">
                                            {urunler.map((product) => (
                                                <li className="product has-post-thumbnail column-1_2 last" key={product.id}>
                                                    <div className="post_item_wrap">
                                                        <div className="post_featured">
                                                            <div className="post_thumb">
                                                                <a className="hover_icon hover_icon_link" href="shop-single.html">
                                                                    <img src={product.img} alt="product4" title="product4" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="post_content">
                                                            <h3><a href="shop-single.html">{product.name}</a></h3> <span className="price"><span className="amount"><span className="woocommerce-Price-currencySymbol"></span>{product.price} TL</span>
                                                            </span> <a rel="nofollow" href="#" className="button add_to_cart_button" onClick={() => sepete_ekle(product)}>Sepete Ekle</a>

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

                                                    {sepet.map((item) => (

                                                        <li className="mini_cart_item" key={item.product.id}>
                                                            <a href="#" onClick={() => { sepettenSil(item.product) }} className="remove" title="Remove this item">×</a>
                                                            <a href="#"> <img src={item.product.img} alt="product4" />{item.product.name}</a> <span className="quantity">{item.quantity} × <span className="amount"><span className="woocommerce-Price-currencySymbol"></span>{item.product.price}</span> TL
                                                            </span>
                                                        </li>
                                                    ))}




                                                </ul>

                                                <p className="total"><strong>Toplam:  </strong><span className="amount"><span className="woocommerce-Price-currencySymbol">

                                                </span>
                                                    {sepet.reduce((a, c) => a + c.product.price * c.quantity, 0)}
                                                </span>
                                                    TL


                                                </p>
                                                <p className="buttons custom_style"><a href="#" className="button wc-forward">Sepete Git</a><a href="#" className="button checkout wc-forward">Satın Al</a></p>
                                            </div>
                                        </aside><aside id="woocommerce_price_filter-2" className="widget woocommerce widget_price_filter">
                                            <h5 className="widget_title">Fiyat Filtresi</h5>
                                            <form method="get" action="#">
                                                <div className="price_slider_wrapper">
                                                    <div className="price_slider display_none"></div>
                                                    <div className="price_slider_amount">
                                                        <input
                                                            type="text"
                                                            id="min_price"
                                                            name="min_price"
                                                            value={minPrice}
                                                            onChange={(e) => setMinPrice(e.target.value)}
                                                            placeholder="Minimum Fiyat"
                                                        />
                                                        <input
                                                            type="text"
                                                            id="max_price"
                                                            name="max_price"
                                                            value={maxPrice}
                                                            onChange={(e) => setMaxPrice(e.target.value)}
                                                            placeholder="Maximum Fiyat"
                                                        />

                                                        <button type="submit" className="button" onClick={filtreleHandler}>Filtrele</button>

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
                                                <li className="cat-item" onClick={()=>{kategorisec("Balloons")}}><a href="#">Balloons</a></li>
                                                <li className="cat-item" onClick={()=>{kategorisec("Bouquets")}}><a href="#">Bouquets</a></li>
                                                <li className="cat-item" onClick={()=>{kategorisec("DessertStands")}}><a href="#">Dessert Stands</a></li>
                                                <li className="cat-item" onClick={()=>{kategorisec("FlowerDecor")}}><a href="#">Flower Decor</a></li>
                                                <li className="cat-item" onClick={()=>{kategorisec("LightsCandles")}}><a href="#">Lights &amp; Candles</a></li>
                                                <li className="cat-item" onClick={()=>{kategorisec("SignsSignatures")}}><a href="#">Signs &amp; Signatures</a></li>
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
