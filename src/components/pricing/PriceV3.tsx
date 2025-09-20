import pricingShape from '@/assets/img/shape/pricing.png';
import Image from 'next/image';
import PriceV3Data from "@/assets/jsonData/price/PriceV3Data.json"
import SinglePriceV3 from './SinglePriceV3';

const PriceV3 = () => {
    return (
        <>
            <div className="pricing-style-three-area overflow-hidden default-padding bg-gray bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading secondary text-center">
                                <h4 className="sub-heading">Pricing</h4>
                                <h2 className="heading"> El mejor plan que se adapta a tus necesidades</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row extra-gutter justify-content-center">
                        <div className="pricing-shap">
                            <Image src={pricingShape} alt="Image Not Found" />
                        </div>
                        {PriceV3Data.map(plan =>
                            <div className="col-lg-4 col-md-6 mb-30" key={plan.id}>
                                <SinglePriceV3 plan={plan} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV3;