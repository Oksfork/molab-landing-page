import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json";
import SingleBlogV1 from "./SingleBlogV1";

interface DataType {
    sectionClass?: string
}

const BlogV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`blog-area home-blog default-padding bottom-less ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-heading">News & Events</h5>
                                <h2 className="title">Check out our blog posts </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {BlogV1Data.slice(0, 3).map(blog =>
                            <div className="col-lg-4 col-md-6 mb-30" key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;