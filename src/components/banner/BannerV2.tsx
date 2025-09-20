import Image from "next/image";
import shape9 from "@/assets/img/shape/9.png"
import dashboard2 from "@/assets/img/dashboard/2.png"
import Animate from "../animation/Animate";
import BannerV2FeatureData from "@/assets/jsonData/banner/BannerV2FeatureData.json"
import BannerV2Feature from "./BannerV2Feature";

const BannerV2 = () => {
    return (
        <>
            <div className="banner-style-two-area text-light overflow-hidden" style={{ backgroundImage: 'url(/assets/img/shape/6.png)' }}>
                <div className="banner-shape-right-top">
                    <Image src={shape9} alt="Image Not Found" />
                </div>
                <div className="banner-style-two">
                    <div className="container">
                        <div className="content">
                            <div className="row">
                                <div className="col-xl-5">
                                    <Animate className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                        <h2>Manage your business by <strong>Anaton</strong></h2>
                                    </Animate>
                                </div>
                                <div className="col-xl-6 offset-xl-1">
                                    <Animate className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                        <p>
                                            Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily perfectly to the minister.
                                        </p>
                                    </Animate>
                                </div>
                                <div className="col-lg-12">
                                    <div className="thumb">
                                        <Animate className="animate__animated animate__fadeInDown">
                                            <Image src={dashboard2} alt="Thumb" />
                                        </Animate>
                                        <div className="banner-app-features">
                                            <ul>
                                                {BannerV2FeatureData.map(feature =>
                                                    <BannerV2Feature feature={feature} key={feature.id} />
                                                )}
                                            </ul>
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

export default BannerV2;