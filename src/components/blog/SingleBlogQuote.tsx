"use client";

import Link from "next/link";
import { useState } from "react";

interface BlogQuoteType {
    id: number;
    slug: string;
    title: string;
    excerpt?: string;
    quote?: string;
    publishedAt: string;
    author: {
        name: string;
        avatar?: string;
    } | string;
    images?: {
        thumbnail: string;
    };
    thumb?: string; // Para compatibilidad con estructura antigua
    text?: string; // Para compatibilidad con estructura antigua
    date?: string; // Para compatibilidad con estructura antigua
}

const SingleBlogQuote = ({ blog, index }: { blog: BlogQuoteType, index?: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const animationDelay = (index || 0) * 0.1;
    
    // Manejar estructura nueva y antigua
    const authorName = typeof blog.author === 'string' ? blog.author : blog.author.name;
    const displayQuote = blog.quote || blog.excerpt || blog.text || '';
    const displayDate = blog.publishedAt 
        ? new Date(blog.publishedAt).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })
        : blog.date || '';

    return (
        <article 
            className={`blog-quote-card ${isHovered ? 'is-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationDelay: `${animationDelay}s` }}
            aria-label={`Blog: ${blog.title}`}
        >
            <div className="glass-layer" />
            <div className="top-glow" />
            
            <div className="content-wrapper">
                {/* {imageSrc && (
                    <Link href={`/blogs/${blog.slug}`} className="quote-thumb-link">
                        <div className="quote-thumb">
                            <Image 
                                src={imageSrc} 
                                alt={blog.title}
                                width={400} 
                                height={250}
                                className="blog-image"
                            />
                        </div>
                    </Link>
                )} */}
                
                <div className="quote-content">
                    {/* <div className="quote-icon">
                        <i className="fas fa-quote-left" />
                    </div>
                    
                    <blockquote className="quote-text">
                        {displayQuote}
                    </blockquote> */}
                    
                    <div className="quote-meta">
                        <Link href={`/blogs/${blog.slug}`}>
                            <h3 className="quote-title">
                                {blog.title}
                            </h3>
                        </Link>
                        <div className="quote-author-info">
                            <span className="quote-author">{authorName}</span>
                            <span className="quote-date">{displayDate}</span>
                        </div>
                    </div>
                    
                    <Link 
                        href={`/blogs/${blog.slug}`}
                        className="quote-read-more"
                        aria-label={`Leer más sobre: ${blog.title}`}
                    >
                        Leer más <i className="fas fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default SingleBlogQuote;

