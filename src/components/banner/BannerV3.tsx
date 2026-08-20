"use client";
import { useState } from "react";
import Image from "next/image";
import Animate from "../animation/Animate";
import il1 from "@/assets/img/illustration/ill_with_pc.png";
import Link from "next/link";
import TrialModal from "../modals/TrialModal";
import VideoModal from "../modals/VideoModal";

interface DataType {
    hasBg?: boolean
}

const BannerV3 = ({ hasBg }: DataType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [trialOpen, setTrialOpen] = useState(false);

    return (
        <>
            <section className="banner-style-three-area overflow-hidden"
                aria-label="Intro Molab.app - Prueba sin costo">
                <div className="banner-shape-left-top" />
                <div className="banner-style-three">
                    <div className="container">
                        <div className="pt-5">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                        <Animate className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                            <h1> 
                                                <span className="text-gradient">
                                                    Molab.app 
                                                </span>
                                                <br /> 
                                                tu laboratorio dental, siempre conectado
                                            </h1>
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                            <p>
                                            Dejá atrás las planillas y tené toda la información de tu laboratorio, simple, ordenada y siempre a mano.
                                            </p>
                                        </Animate>
                                        <div className="d-flex flex-row justify-content-center justify-content-lg-start gap-3">
                                        <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                            <div className="button mt-40">
                                                <Link href="#" scroll={false} className="popup-youtube video-play-button with-text mt-20" onClick={() => setIsOpen(true)}>
                                                    <div className="effect" />
                                                    <span><i className="fas fa-play" /></span>
                                                </Link>
                                            </div>
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                            <div className="button mt-40">
                                                <button
                                                    type="button"
                                                    aria-label="Solicitar prueba sin costo"
                                                    className="btn btn-sm btn-cta"
                                                    onClick={() => setTrialOpen(true)}
                                                >
                                                    Prueba sin costo
                                                </button>
                                            </div>
                                        </Animate>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Animate className="animate__animated animate__fadeInDown">
                                            <Image src={il1} alt="Ilustración de Molab.app - Plataforma de gestión para laboratorios dentales" />
                                        </Animate>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoModal
                open={isOpen}
                videoId="mdO0JCx29NA"
                onClose={() => setIsOpen(false)}
            />
            <TrialModal open={trialOpen} onClose={() => setTrialOpen(false)} />
        </>
    );
};

export default BannerV3;