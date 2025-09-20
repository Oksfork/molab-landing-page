import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    author?: string;
    date?: string;
    title: string;
    thumb?: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, author, date, title, thumb } = blog;

    return (
        <div className="blog-style-one">
            <div className="thumb">
                <Link href={`/blog-single-with-sidebar/${id}`}>
                    <Image src={`/assets/img/blog/${thumb}`} alt={title} width={800} height={600} />
                </Link>
            </div>
            <div className="info">
                <div className="meta">
                    <ul>
                        <li>
                            <Link href="#" scroll={false}>{author}</Link>
                        </li>
                        <li>{date}</li>
                    </ul>
                </div>
                <h3>
                    <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                </h3>
                <Link href={`/blog-single-with-sidebar/${id}`} className="button-regular">
                    Continue Reading <i className="fas fa-arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default SingleBlogV1;
