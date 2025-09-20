import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    author?: string;
    date?: string;
    title3: string;
    thumb?: string;
}

const SingleBlog3Column = ({ blog }: { blog: DataType }) => {
    const { id, author, date, title3, thumb } = blog;

    return (
        <div className="blog-style-one">
            <div className="thumb">
                <Link href={`/blog-single-with-sidebar/${id}`}>
                    <Image src={`/assets/img/blog/${thumb}`} alt={title3} width={800} height={600} />
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
                <h2>
                    <Link href={`/blog-single-with-sidebar/${id}`}>{title3}</Link>
                </h2>
                <Link href={`/blog-single-with-sidebar/${id}`} className="button-regular">
                    Continue Reading <i className="fas fa-arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default SingleBlog3Column;
