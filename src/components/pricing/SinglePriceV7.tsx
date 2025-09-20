import Link from "next/link";

interface DataType {
    activeClass?: string;
    iconClass?: string;
    title?: string;
    features: string[];
    currency?: string;
    price?: number;
    buttontext?: string;
    buttonClass2?: string;
}

const SinglePriceV7 = ({ price }: { price: DataType }) => {
    const { activeClass, iconClass, title, features, currency, price: amount, buttontext, buttonClass2 } = price;

    return (
        <div className={`pricing-style-four ${activeClass}`}>
            <i className={iconClass} />
            <h4>{title}</h4>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <div className="price">
                <h2><sup>{currency}</sup>{amount}</h2>
            </div>
            <Link className={`btn mt-25 btn-sm circle ${buttonClass2}`} href="/contact-us">{buttontext}</Link>
        </div>
    );
};

export default SinglePriceV7;
