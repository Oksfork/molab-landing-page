import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    thumbDark?: string;
    title: string;
    description?: string;
    features: string[];
}

const SingleFeatureV2Dark = ({ feature }: { feature: DataType }) => {
    const { id, thumbDark, title, description, features } = feature;

    return (
        <div className="feature-style-two">
            <div className="icon">
                <Image src={`/assets/img/icon/${thumbDark}`} alt={title} width={256} height={256} />
                <Link href={`/service-details/${id}`} className="btn-arrow">
                    <i className="fas fa-long-arrow-up" />
                </Link>
            </div>
            <div className="content">
                <h3><Link href={`/service-details/${id}`}>{title}</Link></h3>
                <p>{description}</p>
                <ul className="list-circle secondary mt-20">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SingleFeatureV2Dark;
