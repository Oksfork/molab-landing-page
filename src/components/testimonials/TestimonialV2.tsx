"use client"
import TestimonialV2Data from "@/assets/jsonData/testimonial/TestimonialV2Data.json"
import SingleTestimonialV2 from "./SingleTestimonialV2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

interface DataType {
    sectionClass?: string
}

const TestimonialV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`testimonial-style-two-area text-center default-padding bg-gray ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-heading">Customer Feedback</h5>
                                <h2 className="title">What clients have to say
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <Swiper
                                className="testimonial-style-two-carousel"
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                pagination={{
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }}
                                modules={[Navigation, Pagination, Autoplay, Keyboard]}
                            >
                                {TestimonialV2Data.map(testimonial =>
                                    <SwiperSlide key={testimonial.id}>
                                        <SingleTestimonialV2 testimonial={testimonial} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV2;