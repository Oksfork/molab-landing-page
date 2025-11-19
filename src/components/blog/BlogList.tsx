import BlogV1Data from '@/assets/jsonData/blog/BlogV1Data.json';
import SingleBlogQuote from './SingleBlogQuote';

const BlogList = () => {
    return (
        <section 
            className="blog-list-area dark-mode" 
            aria-label="Blog de Molab.app - Artículos y recursos para laboratorios dentales">
            <div className="container default-padding">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-8">
                        <div className="site-heading services-header-dark">
                            <h2 className="title">
                                Recursos y artículos para 
                                <span className="text-gradient">
                                    {' '}mejorar tu gestión
                                </span>
                            </h2>
                            <span className="description">
                                Descubrí tips, guías y novedades sobre gestión de laboratorios dentales y tecnología.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        {BlogV1Data
                            .filter((blog: any) => !blog.status || blog.status === 'published')
                            .map((blog, index) => (
                                <div className="col-lg-4 col-md-6 col-12 mb-4" key={blog.id}>
                                    <SingleBlogQuote blog={blog} index={index} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogList;

