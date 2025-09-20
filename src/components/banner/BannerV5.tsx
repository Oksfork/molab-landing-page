"use client"
import Link from "next/link";
import illustration5 from "@/assets/img/illustration/5.png"
import shape47 from "@/assets/img/shape/47.png"
import Image from "next/image";
import SocialShareV3 from "../social/SocialShareV3";
import { ReactTyped } from "react-typed";

const BannerV5 = () => {

    const textLines = [
        '<b> Web Developer</b>',
        '<b> Professional Coder</b>',
        '<b> UI/UX Designer</b>'
    ]

    return (
        <>
            <div id="home" className="banner-style-five-area auto-height overflow-hidden bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-6.jpg)' }}>
                <div className="banner-style-five">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                        <h2>{`Hey, I'm Mikon`}</h2>
                                        <h4>
                                            Expert in
                                            <ReactTyped
                                                strings={textLines} typeSpeed={40} backSpeed={40} backDelay={2000} loop>
                                            </ReactTyped>
                                        </h4>
                                        <p>
                                            {`I'm creative designer based in USA, and I'm`} <br /> very passionate and dedicated to my work. Say Hello
                                        </p>
                                        <Link href="/contact-us" className="btn-shape mt-35">Hire me now</Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Image src={illustration5} alt="Thumb" />
                                        <div className="author-social">
                                            <input type="checkbox" id="toggle" className="share-toggle" hidden />
                                            <label htmlFor="toggle" className="share-button">
                                                <i className="fas fa-plus" />
                                            </label>
                                            <SocialShareV3 />
                                        </div>
                                        <div className="shape">
                                            <Image src={shape47} alt="Image Not Found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV5;