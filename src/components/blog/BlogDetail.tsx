"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogDetailType {
    id: number;
    slug: string;
    title: string;
    excerpt?: string;
    quote?: string;
    content: string;
    readTime?: number;
    publishedAt: string;
    updatedAt?: string;
    category: {
        id: number;
        name: string;
        slug: string;
    };
    tags: Array<{
        id: number;
        name: string;
        slug: string;
    }>;
    author: {
        id: number;
        name: string;
        slug: string;
        avatar?: string;
        bio?: string;
        role?: string;
    };
    images: {
        thumbnail: string;
        featured: string;
        ogImage?: string;
    };
    relatedPosts?: number[];
}

interface BlogDetailProps {
    blog: BlogDetailType;
    relatedBlogs?: BlogDetailType[];
}

const BlogDetail = ({ blog, relatedBlogs = [] }: BlogDetailProps) => {
    const publishedDate = new Date(blog.publishedAt).toLocaleDateString('es-AR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });


    return (
        <article className="blog-detail-area dark-mode">
            <div className="container default-padding">
                {/* Breadcrumb */}
                <nav className="blog-breadcrumb mb-4" aria-label="Breadcrumb">
                    <Link href="/blogs" className="breadcrumb-link">
                        <i className="fas fa-arrow-left" /> Volver a blogs
                    </Link>
                </nav>

                {/* Header del blog */}
                <header className="blog-detail-header mb-5">
                    {blog.category && (
                        <Link 
                            href={`/blogs?category=${blog.category.slug}`}
                            className="blog-category-badge"
                        >
                            {blog.category.name}
                        </Link>
                    )}
                    
                    <h1 className="blog-detail-title">{blog.title}</h1>
                    
                    {blog.excerpt && (
                        <p className="blog-detail-excerpt">{blog.excerpt}</p>
                    )}

                    {/* Meta información */}
                    <div className="blog-detail-meta">
                        <div className="blog-author-info">
                            {blog.author.avatar && (
                                <Image
                                    src={blog.author.avatar}
                                    alt={blog.author.name}
                                    width={50}
                                    height={50}
                                    className="blog-author-avatar"
                                />
                            )}
                            <div className="blog-author-details">
                                <span className="blog-author-name">{blog.author.name}</span>
                                {blog.author.role && (
                                    <span className="blog-author-role">{blog.author.role}</span>
                                )}
                            </div>
                        </div>
                        
                        <div className="blog-meta-info">
                            <span className="blog-meta-item">
                                <i className="far fa-calendar" /> {publishedDate}
                            </span>
                            {blog.readTime && (
                                <span className="blog-meta-item">
                                    <i className="far fa-clock" /> {blog.readTime} min de lectura
                                </span>
                            )}
                        </div>
                    </div>
                </header>

                {/* Imagen destacada */}
                {/* {blog.images.featured && (
                    <div className="blog-featured-image mb-5">
                        <Image
                            src={blog.images.featured}
                            alt={blog.title}
                            width={1200}
                            height={600}
                            className="blog-featured-img"
                            priority
                        />
                    </div>
                )} */}

                {/* Quote destacada */}
                {/* {blog.quote && (
                    <div className="blog-quote-highlight mb-5">
                        <div className="quote-icon-large">
                            <i className="fas fa-quote-left" />
                        </div>
                        <blockquote className="blog-quote-text">
                            {blog.quote}
                        </blockquote>
                    </div>
                )} */}

                {/* Botón de descarga para MolabPrinter */}
                {blog.slug === 'como-instalar-termica' && (
                    <div className="blog-download-section mb-5">
                        <div className="blog-download-card">
                            <div className="blog-download-icon">
                                <i className="fas fa-download" />
                            </div>
                            <div className="blog-download-content">
                                <h3 className="blog-download-title">Descargar MolabPrinter</h3>
                                <p className="blog-download-description">
                                    Descargá el instalador de MolabPrinter para comenzar con la instalación.
                                </p>
                                <a 
                                    href="/resources/Molab_Printer_Setup_1.5.0.exe"
                                    download="Molab_Printer_Setup_1.5.0.exe"
                                    className="btn btn-theme blog-download-btn"
                                >
                                    <i className="fas fa-download" /> Descargar Instalador
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contenido del blog */}
                <div 
                    className="blog-detail-content"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="blog-tags mt-5">
                        <span className="blog-tags-label">Tags:</span>
                        <div className="blog-tags-list">
                            {blog.tags.map((tag) => (
                                <Link
                                    key={tag.id}
                                    href={`/blogs?tag=${tag.slug}`}
                                    className="blog-tag"
                                >
                                    {tag.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Posts relacionados */}
                {relatedBlogs && relatedBlogs.length > 0 && (
                    <section className="blog-related-posts mt-5">
                        <h2 className="blog-related-title">Artículos relacionados</h2>
                        <div className="row">
                            {relatedBlogs.map((relatedBlog) => (
                                <div key={relatedBlog.id} className="col-lg-4 col-md-6 mb-4">
                                    <Link 
                                        href={`/blogs/${relatedBlog.slug}`}
                                        className="blog-related-card"
                                    >
                                        {relatedBlog.images?.thumbnail && (
                                            <div className="blog-related-thumb">
                                                <Image
                                                    src={relatedBlog.images.thumbnail}
                                                    alt={relatedBlog.title}
                                                    width={400}
                                                    height={250}
                                                    className="blog-related-img"
                                                />
                                            </div>
                                        )}
                                        <div className="blog-related-content">
                                            <h3 className="blog-related-title-small">
                                                {relatedBlog.title}
                                            </h3>
                                            {relatedBlog.excerpt && (
                                                <p className="blog-related-excerpt">
                                                    {relatedBlog.excerpt.substring(0, 100)}...
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
};

export default BlogDetail;

