import Image from "next/image";

interface DataType {
    id?: number;
    thumb?: string;
    title: string;
    description?: string;
    features: string[];
}

const SingleSoftwareDetails = ({ software }: { software: DataType }) => {
    const { thumb, title, description, features } = software;

    return (
        <div className="soft-details-item">
            <div className="thumb">
                <Image src={`/assets/img/dashboard/${thumb}`} alt={title} width={800} height={600} />
            </div>
            <div className="soft-details-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <ul className="list-circle">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SingleSoftwareDetails;