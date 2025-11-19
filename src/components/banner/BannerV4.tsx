import shape44 from "@/assets/img/shape/44.png"
import Image from "next/image"
import Link from "next/link"

const BannerV4 = () => {
    return (
            <section 
                className="banner-style-four-area text-center text-light" 
                style={{ backgroundImage: 'url(/assets/img/shape/42.png)' }}
                aria-label="El futuro de tu laboratorio dental está en la nube - Software de gestión para laboratorios dentales">
                <div className="banner-style-four-shape">
                    <Image src={shape44} alt="Ilustración decorativa de Molab.app en la nube" />
                </div>
                <div className="container mt-60">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="price-v3-cta-section text-center">
                        <div className="price-v3-cta-top-glow" />
                        <div className="price-v3-cta-radial-gradient" />
                
                        <div className="price-v3-cta-icon-wrapper">
                          <i className="fas fa-rocket" />
                        </div>
                
                        <h2 className="price-v3-cta-title text-light">
                          Comenzá a gestionar tu laboratorio con{' '}
                          <span className="text-gradient">
                            MOLAB
                          </span>
                        </h2>
                        <p className="price-v3-cta-text text-light">
                          Centralizá toda la operación en una sola plataforma, intuitiva y pensada para vos.
                        </p>
                        <Link 
                          href="https://wa.me/5491173576766" 
                          className="price-v3-btn-glass effect"
                        >
                          <span>
                            Consultá tu plan a medida{' '}
                            <i className="fas fa-arrow-right ms-10" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
    );
};

export default BannerV4;