"use client"
import PortfolioV2Data from '@/assets/jsonData/portfolio/PortfolioV2Data.json';
import SinglePortfolioV2 from './SinglePortfolioV2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay, FreeMode } from 'swiper/modules';

const PortfolioV2 = () => {
    return (
        <>
            <div className="relative overflow-hidden text-light">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="content-left">
                                    <h4 className="sub-heading">Latest Projects</h4>
                                    <h2 className="title">Our Completed Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-pagination">
                                    <div className="pf-pagination" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-stage">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="portfolio-item-one-items">
                                <Swiper
                                    className="portfolio-stage-right"
                                    modules={[Navigation, Pagination, FreeMode, Keyboard, Autoplay]}
                                    loop={true}
                                    freeMode={true}
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
                                >
                                    {PortfolioV2Data.slice(0, 6).map(portfolio =>
                                        <SwiperSlide key={portfolio.id}>
                                            <SinglePortfolioV2 portfolio={portfolio} />
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

export default PortfolioV2;