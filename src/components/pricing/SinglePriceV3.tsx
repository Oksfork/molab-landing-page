import Link from 'next/link';

interface DataType {
    id?: number;
    name?: string;
    features: string[];
    price?: number;
    billing_cycle?: string;
    tag?: string;
    btnClass?: string;
}

const SinglePriceV3 = ({ plan }: { plan: DataType }) => {
    const { name, features, price, billing_cycle, tag, btnClass } = plan;

    return (
        <div className="pricing-style-threee active">
            <div className="pricing-header">
                <h4>
                    {name} {tag && <span>{tag}</span>}
                </h4>
            </div>
            <div className="pricing-content">
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>
                            <i className={`fas ${feature.includes("Unlimited Logins") ? "fa-times-circle" : "fa-check-circle"}`} />
                            {feature}
                        </li>
                    ))}
                </ul>
                <div className="price">
                    <h2>
                        <sup>$</sup>{price} <sub>/ {billing_cycle}</sub>
                    </h2>
                    <Link className={`btn mt-25 btn-sm effect ${btnClass}`} href="/contact-us">
                        Purchase Plan
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SinglePriceV3;
