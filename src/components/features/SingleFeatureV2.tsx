import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    thumb?: string;
    title: string;
    description?: string;
    features: string[];
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { id, thumb, title, description, features } = feature;

    return (
        <div className="feature-style-two min-h-50">
            <div className="icon">
                <Image src={`/assets/img/icon/${thumb}`} alt={title} width={256} height={256} />
                {/* <Link href={`/service-details/${id}`} className="btn-arrow">
                    <i className="fas fa-long-arrow-up" />
                </Link> */}
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

export default SingleFeatureV2;
