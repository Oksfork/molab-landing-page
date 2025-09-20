import Image from "next/image";
import dashboard7 from "@/assets/img/dashboard/7.png"
import dashboard8 from "@/assets/img/dashboard/8.png"
import dashboard9 from "@/assets/img/dashboard/9.png"
import dashboard10 from "@/assets/img/dashboard/10.png"
import dashboard11 from "@/assets/img/dashboard/11.png"
import dashboard12 from "@/assets/img/dashboard/12.png"

interface DataType {
    sectionClass?: string
}

const FeatureV3 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`feature-style-three-area default-padding text-light ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4 feature-style-three">
                            <div className="nav nav-tabs feature-tab-navs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                    Video Calling
                                    <span>Unlimited Meeting</span>
                                </button>
                                <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                    Data Transfer
                                    <span>Superfast File Transfer</span>
                                </button>
                                <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                                    Instant Collaboration
                                    <span>Duration free collaboration</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1 feature-style-three">
                            <div className="tab-content feature-tab-content" id="nav-tabContent">

                                {/* Tab Single */}
                                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                                    <div className="row align-center">
                                        <div className="col-lg-12">
                                            <div className="feature-three-thumb">
                                                <Image src={dashboard7} alt="Image Not Found" />
                                                <Image src={dashboard8} alt="Image Not Found" />
                                                <div className="icon">
                                                    <i className="fas fa-video" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab Single */}
                                <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                                    <div className="row align-center">
                                        <div className="col-lg-12">
                                            <div className="feature-three-thumb">
                                                <Image src={dashboard9} alt="Image Not Found" />
                                                <Image src={dashboard10} alt="Image Not Found" />
                                                <div className="icon">
                                                    <i className="fas fa-share-square" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab Single */}
                                <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="nav-id-3">
                                    <div className="row align-center">
                                        <div className="col-lg-12">
                                            <div className="feature-three-thumb">
                                                <Image src={dashboard11} alt="Image Not Found" />
                                                <Image src={dashboard12} alt="Image Not Found" />
                                                <div className="icon">
                                                    <i className="fas fa-hands" />
                                                </div>
                                            </div>
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

export default FeatureV3;