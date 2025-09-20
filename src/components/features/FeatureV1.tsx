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
        <>
            <div className={`bg-contain-right-bottom p-4 overflow-hidden ${sectionClass ? sectionClass : ""}`}
                style={{ backgroundImage: hasBg ? 'url(/assets/img/shape/12.png)' : "" }}>
                <div className="container">
                    <div className="relative">
                        <div className="row align-center">
                            <div className="col-lg-6">
                                <div className="feature-style-one-box">
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <div className="item-grid">
                                                {FeatureV1Data.slice(0, 2).map(feature =>
                                                    <SingleFeatureV1 feature={feature} key={feature.id} />
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-md-30 mt-xs-30">
                                            <div className="item-grid">
                                                {FeatureV1Data.slice(2, 3).map(feature =>
                                                    <SingleFeatureV1 feature={feature} key={feature.id} />
                                                )}
                                            </div>
                                            <div className="item-grid mt-2">
                                                {FeatureV1Data.slice(3, 4).map(feature =>
                                                    <SingleFeatureV1 feature={feature} key={feature.id} />
                                                )}
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="feature-shape">
                                        <Image src={shape11} alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="description-layout-one mt-md-50 mt-xs-30">
                                    <h4 className="sub-heading">Beneficios</h4>
                                    <h2 className="title">Pensados en la comodidad <br></br> de tu laboratorio</h2>
                                    {/* <p>
                                        Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously.
                                    </p> */}
                                    <ul className="list-check">
                                        <li>Accedé a la información de tu laboratorio desde cualquier lugar, sin instalaciones ni servidores propios</li>
                                        <li>Seguimiento completo de cada orden: recepción, estado, responsables y entrega final.</li>
                                        <li>Diseñada para técnicos y administradores, intuitiva y sin curva de aprendizaje.</li>
                                        <li>Llevamos tu información actual a Molab sin pérdida de datos ni complicaciones.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;