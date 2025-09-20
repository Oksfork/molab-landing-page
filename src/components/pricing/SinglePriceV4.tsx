"use client"
import { Link } from "react-scroll";

interface DataType {
    activeClass?: string;
    iconClass?: string;
    title?: string;
    features: string[];
    currency?: string;
    price?: number;
    buttontext?: string;
    buttonClass?: string;
}

const SinglePriceV4 = ({ price }: { price: DataType }) => {
    const { activeClass, iconClass, title, features, currency, price: amount, buttontext, buttonClass } = price;

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
            <Link className={`btn mt-25 btn-sm circle ${buttonClass}`} offset={-100} to="contact-us">{buttontext}</Link>
        </div>
    );
};

export default SinglePriceV4;
