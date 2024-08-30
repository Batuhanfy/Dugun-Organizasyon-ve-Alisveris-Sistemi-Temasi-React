import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from '@react-spring/web';
import { setTalep } from '../store/sepetSlice'

import Swal from 'sweetalert2';

const WeddingRequestModal = ({ isOpen, onClose,guncelle }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    venue: '',
    guestCount: '',
    specialRequests: ''
  });

  const props = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-100px)',
    config: { tension: 220, friction: 120 }
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    guncelle(1);
    Swal.fire({
        title: 'Başarılı! Talebiniz Alındı',
        text: 'En yakın zamanda sizinle iletişime geçeceğiz.',
        icon: 'success',
        confirmButtonText: 'Tamam'
      });
      
    dispatch(setTalep(formData));
    onClose();
  };

  return (
    <animated.div
      style={{
        ...props,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClose}
    >
      <animated.div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          width: '90%',
          maxWidth: '600px',
          maxHeight: '80%',
          overflowY: 'auto',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Düğün Organizasyon Talebi</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>
              İsim:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınız ve Soyadınız"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Telefon Numarası:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon Numaranız"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              E-posta:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta Adresiniz"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Düğün Tarihi:
              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Salon Tercihininiz:
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Hangi Tip Salonumuzu Tercih Ediyorsunuz?"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Misafir Sayısı:
              <input
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="Tahmini Misafir Sayısı"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Özel İstekler veya Notlar:
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Özel istekleriniz veya notlarınız"
                style={{ width: '100%', padding: '8px', marginTop: '5px', height: '100px' }}
              />
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Gönder
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ccc',
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Kapat
            </button>
          </div>
        </form>
      </animated.div>
    </animated.div>
  );
};

export default WeddingRequestModal;
