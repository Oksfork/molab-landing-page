import Image from "next/image";
// import arrowIcon from "@/assets/img/shape/arrow.svg"
import Link from "next/link";

interface DataType {
    id?: number;
    iconDark?: string;
    title?: string;
    category?: string;
}

const SingleServicesV2Dark = ({ service, index }: { service: DataType, index?: number }) => {
    const { id, iconDark, title, category } = service;

    const getStaggeredClass = (index: number) => {
        return `staggered-${index % 7}`;
    };

    const staggeredClass = getStaggeredClass(index || 0);

    return (
        <div className={`item modern-service-card ${staggeredClass}`}>
            <div className="icon">
                <Image 
                    src={`/assets/img/icon/${iconDark}`} 
                    alt="Icon" 
                    width={40} 
                    height={40}
                />
            </div>
            
            <h3>
                <Link href={`/service-details/${id}`}>
                    {title}
                </Link>
            </h3>
            
            {category && (
                <span className="category">
                    {category}
                </span>
            )}
        </div>
    );
};

export default SingleServicesV2Dark;
