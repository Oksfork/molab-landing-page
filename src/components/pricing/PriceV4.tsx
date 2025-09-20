import PriceV4Data from '@/assets/jsonData/price/PriceV4Data.json';
import SinglePriceV4 from './SinglePriceV4';

interface DataType {
    sectionClass?: string,
    titleColor?: string
}

const PriceV4 = ({ sectionClass, titleColor }: DataType) => {
    return (
        <>
            <div id="pricing" className={`pricing-style-four-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className={`site-heading text-center ${titleColor ? titleColor : ""}`}>
                                <h5 className="sub-heading">Best Pricing</h5>
                                <h2 className="heading">There are no hidden costs <br /> choose your plan.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="pricing-style-four-items">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="nav nav-tabs pricing-tab-navs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                        <span>Monthly</span>
                                    </button>
                                    <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                        <span>Yearly</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                                <div className="tab-content pricing-tab-content" id="nav-tabContent">

                                    {/* Tab Single */}
                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                                        <div className="row">
                                            {PriceV4Data.monthlyPlan.map(price =>
                                                <div className="col-lg-6 col-md-6 mb-30" key={price.id}>
                                                    <SinglePriceV4 price={price} />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Tab Single  */}
                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                                        <div className="row">
                                            {PriceV4Data.yearlyPlan.map(price =>
                                                <div className="col-lg-6 col-md-6 mb-30" key={price.id}>
                                                    <SinglePriceV4 price={price} />
                                                </div>
                                            )}
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

export default PriceV4;