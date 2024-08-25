import React, { useState } from 'react';
import WeddingRequestModal from '../Components/Modal'; 
import { useSelector } from 'react-redux';

export default function SloganBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const[countOrg,setcountOrg]= useState(0);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  const orgtalep = useSelector((state)=> state.sepet.organizasyontalep)
  return (
    <>
      <section className="no-col-padding">
        <div className="container-fluid sc_home-bg-type-d">
          <div className="content_container">
            <div className="columns_wrap">
              <div className="column_container column-1_1">
                <div className="column-inner">
                  <div className="m_wrapper">
                    <div className="sc_section sc_section_block sc_home-margin-type-i">
                      <div className="sc_section_inner">
                        <div className="sc_section_content_wrap">
                          <h3 className="sc_title sc_title_underline sc_align_center sc_home-param-type-d">
                            Düğününüzü Kusursuz Hale Getirelim
                          
                          </h3>
                          <h5 className='sc_title sc_title_underline sc_align_center' style={{color:'#fff',fontWeight:'bold'}}>
                          Şuana kadar rezervasyon talebi : {countOrg}
                          </h5>
                          <a
                            href="#"
                            onClick={openModal}
                            className="sc_button sc_button_square sc_button_style_filled sc_button_size_large aligncenter sc_home-param-type-e"
                          >
                            Rezervasyon Talebi
                            
                          </a>
                       
                          <WeddingRequestModal isOpen={modalOpen} onClose={closeModal} guncelle={setcountOrg} />
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
  );
}
