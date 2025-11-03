import pricingShape from '@/assets/img/shape/pricing.png';
import Image from 'next/image';
import PriceV3Data from "@/assets/jsonData/price/PriceV3Data.json"
import SinglePriceV3 from './SinglePriceV3';

const PriceV3 = () => {
    return (
            <section className="pricing-style-three-area overflow-hidden default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading secondary text-center">
                                <h2 className="heading"> El mejor plan que se adapta a 
                                    <span className="text-gradient">
                                        {' '}
                                        tus necesidades
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row extra-gutter justify-content-center">
                        {PriceV3Data.map(plan =>
                            <div className="col-lg-4 col-md-6 mb-30" key={plan.id}>
                                <SinglePriceV3 plan={plan} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
    );
};

export default PriceV3;