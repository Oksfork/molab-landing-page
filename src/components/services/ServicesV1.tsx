"use client"
import SoftwareV1Data from "@/assets/jsonData/software/SoftwareV1Data.json"
import SingleSoftwareV1 from "../software/SingleSoftwareV1";
import { useState } from "react";

const ServicesV1 = () => {

    const [activeServiceId, setActiveServiceId] = useState(SoftwareV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="default-padding bottom-less text-center bg-gray software-style-one-area">
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

export default ServicesV1;