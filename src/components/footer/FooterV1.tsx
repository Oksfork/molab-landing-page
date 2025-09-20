"use client";
import Image from "next/image";
import shape10 from "@/assets/img/shape/10.png";
import Link from "next/link";
import SocialShareV1 from "../social/SocialShareV1";
import { toast } from "react-toastify";

import logo from "@/assets/img/logo.png"
import logoLight from "@/assets/img/logo-light.png"
import logoBlue from "@/assets/img/logo-blue.png"

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

interface DataType {
    logoColor?: string;
    sectionClass?: string
}

const FooterV1 = ({ logoColor, sectionClass }: DataType) => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscribe")
    }

    // Footer Logo Color

    let logoSrc;
    switch (logoColor) {
        case "blue":
            logoSrc = logoBlue;
            break;
        case "light":
            logoSrc = logoLight;
            break;
        default:
            logoSrc = logo;
    }

    return (
        <>
            <footer className={`bg-dark text-light ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">

                            <div className="col-lg-5 col-md-6 footer-item pr-50 pr-xs-15 pr-md-15">
                                <div className="f-item about">
                                    <Image className="logo" src={logoSrc} alt="Logo" />
                                    <div className="f-item newsletter">
                                        <p>
                                            Join our subscribers list to get the instant <br /> latest news and special offers.
                                        </p>
                                        <form onSubmit={handleForm}>
                                            <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete="off" required />
                                            <button type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                    <div className="copyright-text mt-40">
                                        <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="https://themeforest.net/user/validthemes/portfolio" target="_blank">validthemes</a></p>
                                    </div>
                                    <div className="footer-social mt-20">
                                        <ul>
                                            <SocialShareV1 />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Company</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about-us">Company Profile</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">Career</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">Plans & Pricing</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Community</h4>
                                    <ul>
                                        <li>
                                            <Link href="/contact-us">Career</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">Leadership</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">Strategy</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">Services</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">History</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">Components</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item contact">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-home" />
                                            </div>
                                            <div className="content">
                                                <strong>Address:</strong>
                                                5919 Trussville Crossings Pkwy, Birmingham
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:info@validtheme.com">info@validtheme.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone" />
                                            </div>
                                            <div className="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:2151234567">+123 34598768</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom bg-dark text-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} Anaton. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer Bottom */}
                <div className="foter-shape-right-bottom">
                    <Image src={shape10} alt="Thumb" />
                </div>
            </footer>
        </>
    );
};

export default FooterV1;