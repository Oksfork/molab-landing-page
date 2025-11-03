"use client"
import shape44 from "@/assets/img/shape/44.png"
import Image from "next/image"
import Link from "next/link"

const BannerV4 = () => {

    return (
            <section className="banner-style-four-area text-center text-light" style={{ backgroundImage: 'url(/assets/img/shape/42.png)' }}>
                <div className="banner-style-four-shape">
                    <Image src={shape44} alt="Ilustración decorativa de Molab.app en la nube" />
                </div>

                <div className="banner-style-four">
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="">
                                    <h3 className="title">
                                        El futuro de tu laboratorio 
                                        <span className="text-gradient">
                                            {' '}
                                        está en la nube.
                                        </span>
                                    </h3>
                                    <p>
                                        Con Molab.app trabajás mejor, más rápido y con control total.
                                    </p>
                                    <Link className="btn mt-25 btn-md btn-theme secondary animation" href="/contact-us">Prueba sin costo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default BannerV4;