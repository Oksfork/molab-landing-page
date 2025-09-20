"use client"
import PriceV1Data from "@/assets/jsonData/price/PriceV1Data.json"
import SinglePriceV2 from "./SinglePriceV2";
import { useState } from "react";

const PriceV2 = () => {

    const [activeServiceId, setActiveServiceId] = useState(PriceV1Data[2]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="pricing-style-two-area shadow top-shape-gray default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-light text-center">
                                <h5 className="sub-heading">Best Pricing</h5>
                                <h2 className="heading">No hidden charges! <br /> choose your plan.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="pricing-style-two-items mt-25">
                        <div className="row">
                            {PriceV1Data.slice(0, 3).map(price =>
                                <div
                                    className={`col-lg-4 col-md-6 pricing-style-two ${activeServiceId === price.id ? 'active' : ''}`}
                                    key={price.id}
                                    onMouseEnter={() => handleMouseEnter(price.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SinglePriceV2 price={price} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV2;