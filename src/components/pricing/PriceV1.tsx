"use client"
import PriceV1Data from "@/assets/jsonData/price/PriceV1Data.json"
import { useState } from "react";
import SinglePriceV1 from "./SinglePriceV1";

interface DataType {
    sectionClass?: string
}

const PriceV1 = ({ sectionClass }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(PriceV1Data[2]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`pricing-area default-padding bg-gray bg-cover ${sectionClass ? sectionClass : ""}`}
                style={{ backgroundImage: 'url(/assets/img/shape/19.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-heading">Best Pricing</h5>
                                <h2 className="title">No hidden charges! <br /> choose your plan.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="pricing-style-one-items">
                        <div className="row">
                            {PriceV1Data.map(price =>
                                <div
                                    className={`col-lg-3 col-md-6 pricing-style-one ${activeServiceId === price.id ? 'active' : ''}`}
                                    key={price.id}
                                    onMouseEnter={() => handleMouseEnter(price.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SinglePriceV1 price={price} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;