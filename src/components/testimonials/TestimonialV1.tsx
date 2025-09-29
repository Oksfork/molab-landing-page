"use client"
import TestimonialV1Data from '@/assets/jsonData/testimonial/TestimonialV1Data.json';
import SingleTestimonialV1 from './SingleTestimonialV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonials-area  default-padding-bottom" style={{ backgroundImage: 'url(/assets/img/shape/20.png)' }}>
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="content-left">
                                    <h2 className="title">Mira lo que dicen nuestros clientes</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testimonail-item-one-items">
                                <div className="testimonial-nav">
                                    <div className="testimonial-button-prev" />
                                    <div className="testimonial-button-next" />
                                </div>
                                <Swiper
                                    className="carousel-stage-right"
                                    loop={true}
                                    freeMode={true}
                                    grabCursor={true}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    navigation={{
                                        nextEl: ".testimonial-button-next",
                                        prevEl: ".testimonial-button-prev"
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 50,
                                        },
                                        1367: {
                                            slidesPerView: 2.5,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Navigation, Autoplay, Keyboard]}
                                >
                                    {TestimonialV1Data.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV1 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;