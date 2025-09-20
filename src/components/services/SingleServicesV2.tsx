import Image from "next/image";
import arrowIcon from "@/assets/img/shape/arrow.svg"
import Link from "next/link";

interface DataType {
    id?: number;
    icon?: string;
    title?: string;
    category?: string;
}

const SingleServicesV2 = ({ service }: { service: DataType }) => {
    const { id, icon, title, category } = service;

    return (
        <div className="item">
            <div className="icon">
                <Image src={`/assets/img/icon/${icon}`} alt="Icon" width={128} height={128} />
            </div>
            <h3><Link href={`/service-details/${id}`}>{title}</Link></h3>
            <div className="bottom">
                <span>{category}</span>
                <Link href={`/service-details/${id}`} className="angle-btn">
                    <Image src={arrowIcon} alt="Arrow Icon" />
                </Link>
            </div>
        </div>
    );
};

export default SingleServicesV2;
