"use client"
import ProcessV2Data from "@/assets/jsonData/process/ProcessV2Data.json"
import SingleProcessV2 from "./SingleProcessV2";
import { useState } from "react";

const ProcessV2 = () => {
    const [activeServiceId, setActiveServiceId] = useState(ProcessV2Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    return (
        <section className="process-style-two-area custom-process-area default-padding bg-fixed overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="heading-left text-center">
                            <h2 className="heading mb-3">
                                Te contamos paso a paso
                                <span className="text-gradient">
                                    {' '}cómo funciona
                                </span>
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: 'var(--bodydark)',
                                marginTop: '16px'
                            }}>
                                Desde el registro hasta la liquidación en solo 4 pasos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="process-style-two-items">
                    <div className="row">
                        {ProcessV2Data.map((process, index) =>
                            <div className="col-lg-3 col-12 mb-3" key={process.id}>
                                <div
                                    className={`process-style-two ${activeServiceId === process.id ? 'active' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(process.id)}
                                    style={{
                                        opacity: 0,
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`
                                    }}
                                >
                                    <SingleProcessV2 process={process} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default ProcessV2;