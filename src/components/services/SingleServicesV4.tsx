import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    title: string;
    description: string;
    thumb: string;
}

const SingleServicesV4 = ({ service }: { service: DataType }) => {
    const { id, title, description, thumb } = service;

    return (
        <div className="services-style-three">
            <h4><Link href={`/service-details/${id}`}>{title}</Link></h4>
            <p>{description}</p>
            <Image src={`/assets/img/icon/${thumb}`} alt={title} width={275} height={315} />
        </div>
    );
};

export default SingleServicesV4;
