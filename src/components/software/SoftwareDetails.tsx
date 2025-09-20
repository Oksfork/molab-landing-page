"use client"
import SoftwareDetailsData from "@/assets/jsonData/software/SoftwareDetailsData.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import SingleSoftwareDetails from "./SingleSoftwareDetails";
import SoftwareProgressData from "@/assets/jsonData/software/SoftwareProgressData.json";
import SingleProgress from "./SingleProgress";

interface DataType {
    bgImage?: string
    shape?: string
}

const SoftwareDetails = ({ bgImage, shape }: DataType) => {
    return (
        <>
            <div className="software-details-area default-padding-top pb-80 pb-xs-50" style={{ backgroundImage: `url(/assets/img/shape/${bgImage})` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-5 order-xl-last">
                            <div className="soft-details-style-one">
                                <h4 className="sub-heading">Structure</h4>
                                <h2 className="title">Build your SAAS landing page using the intelligent BEM interface</h2>
                                <div className="circle-process mt-40">
                                    <ul>
                                        {SoftwareProgressData.map(progress =>
                                            <SingleProgress progress={progress} key={progress.id} />
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <Swiper
                                className="soft-details-carousel"
                                modules={[Navigation, Pagination, Autoplay, Keyboard]}
                                freeMode={true}
                                loop={true}
                                autoplay={true}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                pagination={{
                                    el: '.pf-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                            >
                                {SoftwareDetailsData.map(software =>
                                    <SwiperSlide key={software.id}>
                                        <SingleSoftwareDetails software={software} />
                                    </SwiperSlide>
                                )}
                                <div className="shape-left-bottom">
                                    <Image src={`/assets/img/shape/${shape}`} alt="Image Not Found" width={100} height={80} />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SoftwareDetails;