import React, { useState } from 'react';
import WeddingRequestModal from '../Components/Modal'; 

export default function SloganBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
                          <a
                            href="#"
                            onClick={openModal}
                            className="sc_button sc_button_square sc_button_style_filled sc_button_size_large aligncenter sc_home-param-type-e"
                          >
                            İstek Gönder
                          </a>

                          <WeddingRequestModal isOpen={modalOpen} onClose={closeModal} />
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
