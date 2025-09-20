"use client"
import SoftwareV1Data from "@/assets/jsonData/software/SoftwareV1Data.json"
import { useState } from "react";
import SingleSoftwareV1 from "./SingleSoftwareV1";

interface DataType {
    serviceClass?: string
    hasBg?: boolean
}

const SoftwareV1 = ({ serviceClass, hasBg }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(SoftwareV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };


    return (
        <>
            <div className={`default-padding bottom-less text-center software-style-one-area ${serviceClass ? serviceClass : ""}`}
                style={{ backgroundImage: hasBg ? 'url(assets/img/shape/17.png)' : "none" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 mt-60 mt-xs-0">
                            <div className="site-heading text-center">
                                <h5 className="sub-heading">Included Capabilities</h5>
                                <h2 className="title">Features designed for you</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {SoftwareV1Data.slice(0, 3).map(data =>
                            <div
                                className="col-lg-4 col-md-6 mb-30" key={data.id}>
                                <div className={`services-style-one ${activeServiceId === data.id ? 'active' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(data.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SingleSoftwareV1 data={data} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SoftwareV1;