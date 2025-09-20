import Image from 'next/image';
import illustration6 from "@/assets/img/illustration/6.png"
import chat1 from "@/assets/img/illustration/chat-1.png"
import chat2 from "@/assets/img/illustration/chat-2.png"
import chat3 from "@/assets/img/illustration/chat-3.png"
import Animate from '../animation/Animate';
import NewsLetterFormV3 from '../form/NewsLetterFormV3';

const BannerV6 = () => {
    return (
        <>
            <div className="banner-style-six-area bg-cover overflow-hidden" style={{ backgroundImage: 'url(/assets/img/shape/banner-10.jpg)' }}>
                <div className="banner-style-six">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6 pr-80 pr-md-15 pr-xs-15">
                                    <div className="information mt--70">
                                        <Animate className='animate__animated animate__fadeInUp' delay="500ms" duration="400ms">
                                            <h2>Chatbot <strong>Mastermind</strong> </h2>
                                        </Animate>
                                        <Animate className='animate__animated animate__fadeInUp' delay="900ms" duration="400ms">
                                            <p>
                                                An all-in-one platform to build and launch conversational chatbots without coding.
                                            </p>
                                        </Animate>
                                        <NewsLetterFormV3 />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Image src={illustration6} alt="Thumb" />
                                        <Animate className="animate__animated animate__fadeInLeft">
                                            <Image src={chat1} alt="Thumb" />
                                        </Animate>
                                        <Animate className='animate__animated animate__fadeInRight' delay="500ms">
                                            <Image src={chat2} alt="Thumb" />
                                        </Animate>
                                        <Animate className='animate__animated animate__fadeInLeft' delay="1000ms">
                                            <Image src={chat3} alt="Thumb" />
                                        </Animate>
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

export default BannerV6;