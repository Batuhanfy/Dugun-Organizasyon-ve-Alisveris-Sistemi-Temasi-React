import React, { useEffect } from 'react'
import { fetchSepet } from '../store/sepetSlice'
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';


export default function Checkout() {


    const dispatch = useDispatch();
    useEffect(() => {
    }, [dispatch])

    const sepettekiler = useSelector((state) => state.sepet.sepettekiler);
    console.log(sepettekiler)


    if (sepettekiler.length === 0) {
        Swal.fire({
            title: 'Dikkat!',
            text: 'Sepetinizde ürün bulunmamaktadır.',
            icon: 'warning',
            confirmButtonText: 'Devam Et'
        });

    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="mb-4">Sepetiniz</h1>
                    <div className="col-12 odemeformu" style={{ display: 'flex' }}>

                        <div className='alinacaklar'>
                            {sepettekiler.length < 1 ? (
                                <div className="alert alert-warning" role="alert">
                                    Sepetinizde ürün bulunmamaktadır.
                                </div>
                            ) : 
                            sepettekiler.map(item => (
                                <div key={item.product.id} className="card">
                                    <img src={item.product.img} alt={item.product.name} />
                                    <div className="cardi-body">
                                        <h5 className="cardi-title">{item.product.name} {item.quantity} Adet</h5>
                                        <p className="cardi-text">{item.product.description}</p>
                                        <p className="cardi-text"><strong>{item.product.price} TL</strong></p>
                                    </div>
                                </div>
                            ))
                        }

                        </div>
                        <div className='adresFormu'>
                            <div className="custom-form-container">
                            <h2 className="custom-form-header">Ödeme Tutarı</h2>
                           <span>Toplam Ödenecek Tutar:  
                            <span style={{fontWeight:'500',marginBottom:'30px'}}>
                                {sepettekiler.reduce((total, current) => total + current.product.price*current.quantity, 0)} TL
                            </span>

                           </span>
                                <h2 className="custom-form-header">Adres ve Ödeme Bilgileri</h2>
                                <form>
                                    {/* Adres Bilgileri */}
                                    <div className="custom-form-group">
                                        <label htmlFor="fullName" className="custom-label">Ad ve Soyad</label>
                                        <input type="text" id="fullName" name="fullName" className="custom-input" required />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="address" className="custom-label">Adres</label>
                                        <input type="text" id="address" name="address" className="custom-input" required />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="city" className="custom-label">Şehir</label>
                                        <input type="text" id="city" name="city" className="custom-input" required />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="state" className="custom-label">İlçe</label>
                                        <input type="text" id="state" name="state" className="custom-input" required />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="zipCode" className="custom-label">Posta Kodu</label>
                                        <input type="text" id="zipCode" name="zipCode" className="custom-input" required />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="country" className="custom-label">Ülke</label>
                                        <input type="text" id="country" name="country" className="custom-input" required />
                                    </div>

                                    {/* Ödeme Yöntemi */}
                                    <div className="custom-form-group">
                                        <label htmlFor="paymentMethod" className="custom-label">Ödeme Yöntemi</label>
                                        <select id="paymentMethod" name="paymentMethod" className="custom-select" required>
                                            <option value="">Ödeme yöntemi seçin</option>
                                            <option value="creditCard">Kredi Kartı</option>
                                            <option value="debitCard">Banka Kartı</option>
                                            <option value="paypal">PayPal</option>
                                        </select>
                                    </div>

                                    {/* Kart Bilgileri */}
                                    <div className="custom-form-group">
                                        <label htmlFor="cardName" className="custom-label">Kart Üzerindeki İsim</label>
                                        <input type="text" id="cardName" name="cardName" className="custom-input" required />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="cardNumber" className="custom-label">Kart Numarası</label>
                                        <input type="text" id="cardNumber" name="cardNumber" className="custom-input" required />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="expiryDate" className="custom-label">Son Kullanma Tarihi (MM/YY)</label>
                                        <input type="text" id="expiryDate" name="expiryDate" className="custom-input" required />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="cvv" className="custom-label">CVV</label>
                                        <input type="text" id="cvv" name="cvv" className="custom-input" required />
                                    </div>

                                    <button type="submit" className="custom-submit-btn">Gönder</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
