"use client";
import Image from "next/image";
import Animate from "../animation/Animate";
import il1 from "@/assets/img/illustration/ill_with_pc.png";
import { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

interface DataType {
    hasBg?: boolean
}

const BannerV3 = ({ hasBg }: DataType) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="banner-style-three-area overflow-hidden"
                style={{ backgroundImage: hasBg ? 'url(/assets/img/banner/trama_background_banner_1.png)' : "none" }}>
                <div className="banner-shape-left-top" style={{ backgroundImage: 'url(/assets/img/shape/5.png)' }} />
                <div className="banner-style-three">
                    <div className="container">
                        <div className="pt-5">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                        <Animate className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                            <h2>Molab.app <br /> tu laboratorio dental, siempre conectado</h2>
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                            <p>
                                            Centralizá trabajos, clientes, órdenes, pagos y liquidaciones en una única plataforma online
                                            <br />
                                            Moderno, ágil y accesible desde cualquier dispositivo.
                                            </p>
                                        </Animate>
                                        <div className="d-flex flex-row">
                                        <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                            <div className="button mt-40">
                                                <Link href="#" scroll={false} className="popup-youtube video-play-button with-text mt-20" onClick={() => setOpen(true)}>
                                                    <div className="effect" />
                                                    <span><i className="fas fa-play" /> PRESENTACIÓN</span>
                                                </Link>
                                            </div>
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                            <div className="button mt-40">
                                                <Link href="" className="ml-20 btn btn-sm btn-theme secondary">Prueba sin costo</Link>
                                            </div>
                                        </Animate>    
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Animate className="animate__animated animate__fadeInDown">
                                            <Image src={il1} alt="Thumb" />
                                        </Animate>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="EUfzHKBvkeY" onClose={() => setOpen(false)} />
        </>
    );
};

export default BannerV3;