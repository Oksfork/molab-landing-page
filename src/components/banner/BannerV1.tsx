import Image from 'next/image';
import Animate from '../animation/Animate';
import Link from 'next/link';
import dashboard1 from "@/assets/img/dashboard/1.png"
import dashboard3 from "@/assets/img/dashboard/3.png"
import dashboard4 from "@/assets/img/dashboard/4.png"
import shape3 from "@/assets/img/shape/3.png"

interface DataType {
    hasBg?: boolean
}

const BannerV1 = ({ hasBg }: DataType) => {
    return (
        <>
            <div className="banner-style-one-area text-light overflow-hidden" style={{ backgroundImage: hasBg ? 'url(/assets/img/shape/2.png)' : "" }}>
                <div className="banner-shape-left-top" style={{ backgroundImage: 'url(/assets/img/shape/5.png)' }} />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                        <Animate className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h2>Committed people Connecting the Future</h2>
                                        </Animate>
                                        <Animate className='animate__animated animate__fadeInUp' delay='900ms' duration="400ms">
                                            <p>
                                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily perfectly to the minister.
                                            </p>
                                        </Animate>
                                        <Animate className='animate__animated animate__fadeInUp' delay='1200ms' duration="400ms">
                                            <div className="button mt-40">
                                                <Link className="btn btn-md circle btn-gradient animation" href="/contact-us">Get Started</Link>
                                            </div>
                                        </Animate>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Animate className='animate__animated animate__fadeInDown'>
                                            <Image src={dashboard1} alt="Thumb" />
                                        </Animate>
                                        <Animate className='animate__animated animate__fadeInUp' delay="600ms">
                                            <div className="inner">
                                                <Image src={dashboard3} alt="Thumb" />
                                            </div>
                                        </Animate>
                                        <Animate className='animate__animated animate__fadeInRight' delay='1000ms'>
                                            <div className="thumb-right">
                                                <Image src={dashboard4} alt="Thumb" />
                                            </div>
                                        </Animate>
                                        <div className="shape">
                                            <Image src={shape3} alt="Thumb" />
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

export default BannerV1;