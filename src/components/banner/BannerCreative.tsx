import banner4 from '@/assets/img/banner/4.jpg';
import Image from 'next/image';

const BannerCreative = () => {
    return (
        <>
            <div className="banner-creative text-light overflow-hidden">
                <div className="creative-banner bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-9.jpg)' }} />
                <div className="banner-style-creative">
                    <div className="container">
                        <div className="content">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Digital Business <br /> <strong style={{ backgroundImage: 'url(/assets/img/shape/banner-8.jpg)' }}>Ideas</strong></h2>
                                </div>
                            </div>
                        </div>
                        <div className="creative-thumb">
                            <Image src={banner4} alt="Image Not Found" />
                            <ul className="contact-list">
                                <li>
                                    <h5>Mail Us</h5>
                                    <a href="mailto:abc@example.com">support@anaton.com</a>
                                </li>
                                <li>
                                    <h5>Call Us</h5>
                                    <a href="tel:+473337890">+473337890</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerCreative;