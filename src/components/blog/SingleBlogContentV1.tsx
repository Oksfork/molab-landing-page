import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    author?: string;
    date?: string;
    title: string;
    text?: string;
    thumb?: string;
    thumbFull?: string;
}

const SingleBlogContentV1 = ({ blog }: { blog: DataType }) => {
    const { id, author, date, title, text, thumbFull } = blog;

    return (
        <div className="blog-style-one item">
            <div className="thumb">
                <Link href={`/blog-single-with-sidebar/${id}`}>
                    <Image src={`/assets/img/blog/${thumbFull}`} alt={title} width={1500} height={750} />
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
                    <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                </h2>
                <p>
                    {text}
                </p>
                <Link href={`/blog-single-with-sidebar/${id}`} className="button-regular">
                    Continue Reading <i className="fas fa-arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default SingleBlogContentV1;