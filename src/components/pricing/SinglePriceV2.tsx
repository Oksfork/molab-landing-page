import Link from "next/link";

interface DataType {
    title?: string;
    description?: string;
    freePlan?: boolean;
    planType?: string;
    planPrice?: string | number;
    planCurrency?: string;
    btnClass?: string;
    features: string[];
}

const SinglePriceV2 = ({ price }: { price: DataType }) => {
    const { title, description, freePlan, planType, planPrice, planCurrency, btnClass, features } = price;

    return (
        <div className="item">
            <div className="pricing-header">
                <h4>{title}</h4>
                <div className="price">
                    {freePlan ? <h2><strong>{planType}</strong></h2> : <h2><sup>{planCurrency}</sup>{planPrice} <sub>{planType}</sub></h2>}
                </div>
            </div>
            <div className="pricing-content">
                <p>{description}</p>
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

export default SinglePriceV2;
