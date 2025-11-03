import shape11 from "@/assets/img/shape/11.png";
import Image from "next/image";
import FeatureV1Data from "@/assets/jsonData/feature/FeatureV1Data.json"
import SingleFeatureV1 from "./SingleFeatureV1";

interface DataType {
    hasBg?: boolean;
    sectionClass?: string
}

const FeatureV1 = ({ hasBg, sectionClass }: DataType) => {
    return (
            <section 
                className={`bg-contain-right-bottom p-4 overflow-hidden ${sectionClass ? sectionClass : ""}`}
                style={{ backgroundImage: hasBg ? 'url(/assets/img/shape/12.png)' : "" }}
            >
                <div className="container">
                    <div className="relative">
                        <div className="row align-center">
                            <div className="col-lg-6 order-2 order-md-1">
                                <div className="feature-style-one-box">
                                    <div className="row align-center">
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <div className="item-grid">
                                                {FeatureV1Data.slice(0, 2).map((feature, index) =>
                                                    <SingleFeatureV1 
                                                        feature={feature} 
                                                        key={feature.id}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6 mt-md-30 mt-xs-30">
                                            <div className="item-grid">
                                                {FeatureV1Data.slice(2, 3).map((feature, index) =>
                                                    <SingleFeatureV1 
                                                        feature={feature} 
                                                        key={feature.id}
                                                    />
                                                )}
                                            </div>
                                            <div className="item-grid mt-2">
                                                {FeatureV1Data.slice(3, 4).map((feature, index) =>
                                                    <SingleFeatureV1 
                                                        feature={feature} 
                                                        key={feature.id}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 order-1 order-md-2">
                                <div className="description-layout-one mt-md-50 mt-xs-30">
                                    <h2 className="title mb-4">
                                        Pensado para que tu equipo 
                                        <span className="text-gradient"> trabaje mejor</span>
                                    </h2>
                                    
                                    <p className="description-text">
                                        Herramientas que se adaptan a tu forma de trabajar. 
                                        <strong> Sin complicaciones, sin pérdida de tiempo.</strong>
                                    </p>
                                    
                                    <ul className="list-check">
                                        <li>
                                            <strong>Acceso desde cualquier lugar</strong>
                                        </li>
                                        <li>
                                            <strong>Seguimiento completo</strong>
                                        </li>
                                        <li>
                                            <strong>Pensada para todos</strong>
                                        </li>
                                        <li>
                                            <strong>Migración incluida</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default FeatureV1;