import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    title?: string;
    icon?: string;
    description?: string;
    buttonText?: string;
    counts?: string
    box_name?: string
}

const SingleServicesV3 = ({ service }: { service: DataType }) => {
    const { title, icon, description, counts, box_name } = service;

    return (
        <div className="service-style-three">
            <div className={`icon ${box_name}`}>
                <Image src={`/assets/img/icon/${icon}`} alt={`${title} icon`} width={256} height={256} />
            </div>
            <div className="info">
                <h4><Link href="#">{title}</Link></h4>
                <p>{description}</p>
                <span>{counts}</span>
            </div>
        </div>
    );
};

export default SingleServicesV3;
