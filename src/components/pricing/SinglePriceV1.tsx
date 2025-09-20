import Link from "next/link";

interface DataType {
    id?: number;
    title?: string;
    description?: string;
    planType?: string;
    planPrice?: number | string;
    planCurrency?: string;
    btnClass?: string;
    features: string[];
    freePlan?: boolean;
}

const SinglePriceV1 = ({ price }: { price: DataType }) => {
    const { title, description, planType, planPrice, planCurrency, btnClass, features, freePlan } = price;

    return (

        <div className="item">
            <div className="pricing-header">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="pricing-content">
                <div className="price">
                    {freePlan ? <h2><strong>{planType}</strong></h2> : <h2><sup>{planCurrency}</sup>{planPrice} <sub>{planType}</sub></h2>}
                </div>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>
                            <i className="fas fa-check-circle" /> {feature}
                        </li>
                    ))}
                </ul>
                <Link className={`btn circle mt-25 btn-sm ${btnClass} effect`} href="/contact-us">
                    Purchase Plan
                </Link>
            </div>
        </div>
    );
};

export default SinglePriceV1;
