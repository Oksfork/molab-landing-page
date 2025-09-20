"use client"
import Image from "next/image";
import team4 from "@/assets/img/team/4.jpg";
import team6 from "@/assets/img/team/6.jpg";
import team9 from "@/assets/img/team/9.jpg";
import TestimonialV3Data from "@/assets/jsonData/testimonial/TestimonialV3Data.json";
import SingleTestimonialV3 from "./SingleTestimonialV3";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

interface DataType {
    hasShape?: boolean;
    sectionClass?: string
}

const TestimonialV3 = ({ hasShape, sectionClass }: DataType) => {
    return (
        <>
            <div className={`testimonial-style-three-area overflow-hidden default-padding ${sectionClass ? sectionClass : ""}`}>
                {hasShape &&
                    <div className="testimonial-shape">
                        <Image src={team4} alt="Image Not Found" />
                        <Image src={team6} alt="Image Not Found" />
                        <Image src={team9} alt="Image Not Found" />
                    </div>
                }
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading secondary text-center">
                                <h2 className="heading"> We helps <strong>87,000+</strong> people like you create better content 10X faster.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <Swiper
                                className="testimonial-style-two-carousel text-center"
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
                                {TestimonialV3Data.map(testimonial =>
                                    <SwiperSlide key={testimonial.id}>
                                        <SingleTestimonialV3 testimonial={testimonial} />
                                    </SwiperSlide>
                                )}
                                <div className="swiper-pagination testimonial-three-pagination" />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV3;