"use client"
import ProcessV2Data from "@/assets/jsonData/process/ProcessV2Data.json"
import SingleProcessV2 from "./SingleProcessV2";
import { useState } from "react";

const ProcessV2 = () => {

    const [activeServiceId, setActiveServiceId] = useState(ProcessV2Data[2]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="process-style-two-area default-padding bg-gray bg-fixed overflow-hidden" style={{ backgroundImage: 'url(/assets/img/shape/banner-3.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-left">
                                <h5 className="sub-heading theme">¿Cómo Funciona?</h5>
                                <h2 className="heading">Te contamos paso a paso</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="process-style-two-items">
                        <div className="row">
                            {ProcessV2Data.map(process =>
                                <div className="col-lg-3" key={process.id}>
                                    <div
                                        className={`process-style-two ${activeServiceId === process.id ? 'active' : ''}`}
                                        onMouseEnter={() => handleMouseEnter(process.id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <SingleProcessV2 process={process} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV2;