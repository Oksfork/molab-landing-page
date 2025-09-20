import Image from 'next/image';
import about1 from "@/assets/img/about/1.jpg"
import about2 from "@/assets/img/about/2.jpg"
import logoIcon from "@/assets/img/logo-icon.png"
import Link from 'next/link';

const AboutV4 = () => {
    return (
        <>
            <div className="default-padding-bottom text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="about-style-four-thumb">
                                <Image src={about1} alt="Image not Found" />
                                <Image src={about2} alt="Image not Found" />
                                <div className="curve-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                        <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z" />
                                        <text><textPath href="#textPath">Award Winning Agency</textPath></text>
                                    </svg>
                                    <Image src={logoIcon} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="about-style-four-info">
                                <h2 className="title">The best creative process behind our marketing.</h2>
                                <h5>Our goal is to make it as easy as possible for you to walk away with the solution that suits your needs perfectly.</h5>
                                <p>
                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters.
                                </p>
                                <div className="button-more mt-65">
                                    <Link href="/about-us">Know More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV4;