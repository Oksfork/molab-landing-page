import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    thumb?: string;
    title: string;
    categories: string[];
}

const SingleProjectV1 = ({ project }: { project: DataType }) => {
    const { id, thumb, title, categories } = project;

    return (
        <div className="gallery-item">
            <div className="gallery-style-one">
                <div className="thumb">
                    <Image src={`/assets/img/portfolio/${thumb}`} alt={title} width={800} height={600} />
                    <Link href={`/project-details/${id}`}>
                        <i className="fas fa-arrow-right" />
                    </Link>
                </div>
                <div className="content">
                    <h4>
                        <Link href={`/project-details/${id}`}>{title}</Link>
                    </h4>
                    <ul className="gallery-list">
                        {categories.map((category, index) => (
                            <li key={index}>{category}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectV1;
