"use client"
import BrandV1Data from "@/assets/jsonData/brand/BrandV1Data.json"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

const BrandV1 = () => {
    return (
        <>
            <div className="relative text-center">
                <div className="container">
                    <div className="brand-style-one-items default-padding bg-dark text-light"
                        style={{ backgroundImage: 'url(/assets/img/shape/13.png)' }}>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="brand-style-one">
                                    <h2>Trusted by <strong>250+</strong> Agencies in whole world</h2>
                                    <Swiper
                                        className="brand4col"
                                        modules={[Navigation, Pagination, Autoplay, Keyboard]}
                                        loop={true}
                                        slidesPerView={2}
                                        spaceBetween={30}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                        }}
                                        speed={1000}
                                        pagination={{
                                            el: '.swiper-pagination',
                                            clickable: true,
                                        }}
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 3,
                                                spaceBetween: 40,
                                            },
                                            992: {
                                                slidesPerView: 4,
                                                spaceBetween: 60,
                                            },
                                        }}
                                    >
                                        {BrandV1Data.map(brand =>
                                            <SwiperSlide key={brand.id}>
                                                <Image src={`/assets/img/brand/${brand.thumb}`} alt="Thumb" width={270} height={85} />
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandV1;