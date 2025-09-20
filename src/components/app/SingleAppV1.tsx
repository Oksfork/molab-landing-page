import Image from 'next/image';
import Link from 'next/link';

interface PriceType {
    amount?: number;
    currency?: string;
    billingCycle?: string;
}

interface DataType {
    id?: number;
    title: string[];
    features: string[];
    btnText?: string;
    thumb?: string;
    price?: PriceType;
    activeClass?: string;
    btnColor?: string
}

const SingleAppV1 = ({ app }: { app: DataType }) => {
    const { activeClass, title, features, btnText, thumb, price, btnColor } = app;

    return (
        <div className={`app-type-style-one ${activeClass}`}>
            <div className="content">
                <h3>
                    {title[0]} <br /> {title[1]}
                </h3>
                <ul className="list-circle">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                {price && (
                    <h2 className="price mt-20">
                        <sup>{price.currency}</sup>{price.amount} <sub>/ {price.billingCycle}</sub>
                    </h2>
                )}

                <Link className={`btn btn-md mt-25 animation ${btnColor}`} href="/contact-us">
                    {btnText}
                </Link>
            </div>
            <Image src={`/assets/img/dashboard/${thumb}`} alt="Image Not Found" width={660} height={350} />
        </div>
    );
};

export default SingleAppV1;
