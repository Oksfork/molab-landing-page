import illustration7 from "@/assets/img/illustration/7.png"
import Image from "next/image";
import Animate from "../animation/Animate";
import AppButtonData from "@/assets/jsonData/app/AppButtonData.json"
import AppButton from "../app/AppButton";

const BannerV7 = () => {
    return (
        <>
            <div className="banner-style-seven-area text-light bg-cover overflow-hidden" style={{ backgroundImage: 'url(/assets/img/shape/banner-10.png)' }}>
                <div className="banner-style-seven">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6 pr-80 pr-md-15 pr-xs-15">
                                    <div className="information mt--180">
                                        <Animate className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                            <h2>Best way to manage your customers.</h2>
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                            <p>
                                                An all-in-one platform to build and launch conversational chatbots without coding.
                                            </p>
                                        </Animate>
                                        <div className="app-review">
                                            <div className="rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <span>(112K) Review</span>
                                        </div>
                                        <ul className="multi-button">
                                            {AppButtonData.map(app =>
                                                <AppButton app={app} key={app.id} />
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Image src={illustration7} alt="Thumb" />
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

export default BannerV7;