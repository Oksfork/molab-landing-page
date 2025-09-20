import Link from "next/link";

interface DataType {
    id?: number;
    icon?: string;
    category?: string;
    title?: string;
}

const SingleSoftwareV1 = ({ data }: { data: DataType }) => {
    const { icon, category, id, title } = data

    return (
        <>
            <div className="icon">
                <i className={icon} />
            </div>
            <div className="info">
                <span>{category}</span>
                <h4>
                    <Link href={`/service-details/${id}`}>{title}</Link>
                </h4>
            </div>
            <Link href={`/service-details/${id}`} className="icon-btn">
                <i className="fas fa-arrow-right" />
            </Link>
        </>
    );
};

export default SingleSoftwareV1;