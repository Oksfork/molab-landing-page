"use client";
import Link from "next/link";
import Animate from "../animation/Animate";

const NotFoundContent = () => {
    return (
        <>
            <section 
                className="error-page-area bg-dark text-light overflow-hidden"
                aria-label="Página no encontrada - 404"
            >
                <div className="banner-shape-left-top" style={{ backgroundImage: 'url(/assets/img/shape/5.png)' }} />
                <div className="container"> 
                    <article className="error-box glassmorphism-card p-5 text-center">
                        <div className="glass-layer" />
                        
                        <div>
                            <Animate className="animate__animated animate__fadeInDown" delay="200ms" duration="600ms">
                                <h1>Ups!</h1>
                            </Animate>
                            
                            <Animate className="animate__animated animate__fadeInUp" delay="400ms" duration="600ms">
                                <h2>Página no encontrada</h2>
                            </Animate>
                            
                            <Animate className="animate__animated animate__fadeInUp" delay="600ms" duration="600ms">
                                <p>
                                    Lo sentimos, la página que buscas no existe o ha sido movida. 
                                    <br />
                                    Regresá al inicio y seguí explorando <span className="text-gradient">Molab.app</span>
                                </p>
                            </Animate>
                            
                            <Animate className="animate__animated animate__fadeInUp" delay="800ms" duration="600ms">
                                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                                    <Link 
                                        className="btn btn-md btn-theme secondary" 
                                        href="/"
                                        aria-label="Volver al inicio de Molab.app"
                                    >
                                        <i className="fas fa-home me-2"></i>
                                        Volver al inicio
                                    </Link>
                                    <Link 
                                        className="btn btn-md btn-light" 
                                        href="https://wa.me/5491173576766"
                                        target="_blank"
                                        aria-label="Contactar por WhatsApp"
                                    >
                                        <i className="fab fa-whatsapp me-2"></i>
                                        Contactar soporte
                                    </Link>
                                </div>
                            </Animate>
                        </div>
                    </article> 
                </div>
            </section>
        </>
    );
};

export default NotFoundContent;