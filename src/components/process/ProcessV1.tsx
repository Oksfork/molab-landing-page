import ProcessV1Data from "@/assets/jsonData/process/ProcessV1Data.json"
import SingleProcessV1 from "./SingleProcessV1";
import ProcessFactData from "@/assets/jsonData/process/ProcessFactData.json"
import ProcessFact from "./ProcessFact";
import Image from "next/image";
import shape24 from "@/assets/img/shape/24.png";

interface DataType {
    sectionClass?: string
    hasTitle?: boolean
}

const ProcessV1 = ({ sectionClass, hasTitle }: DataType) => {
    return (
        <>
            <div className={`process-style-onea-rea pt-md-120 pt-xs-50 ${sectionClass ? sectionClass : ""}`}
                style={{ backgroundImage: 'url(/assets/img/shape/25.png)' }}>

                {/* Section Title */}
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h5 className="sub-heading">Working Process</h5>
                                    <h2 className="heading">The only app you will need</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="process-style-one-box text-center">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="row">

                                    {ProcessV1Data.slice(0, 2).map(process =>
                                        <div className="col-lg-6 col-md-6" key={process.id}>
                                            <SingleProcessV1 process={process} />
                                        </div>
                                    )}

                                    <div className="shape-center">
                                        <Image src={shape24} alt="Shape" />
                                    </div>

                                    {ProcessV1Data.slice(2, 3).map(process =>
                                        <div className="col-lg-6 offset-lg-3" key={process.id}>
                                            <SingleProcessV1 process={process} />
                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="process-fun-fact">
                                    {ProcessFactData.map(fact =>
                                        <ProcessFact fact={fact} key={fact.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV1;