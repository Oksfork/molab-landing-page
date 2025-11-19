import { notFound } from 'next/navigation';
import PagePatternWrapper from "@/components/layout/PagePatternWrapper";
import HeaderV10 from "@/components/header/HeaderV10";
import FooterV1 from "@/components/footer/FooterV1";
import DarkClass from "@/components/classes/DarkClass";
import JsonLd from "@/components/seo/JsonLd";
import BlogDetail from "@/components/blog/BlogDetail";
import BlogV1Data from '@/assets/jsonData/blog/BlogV1Data.json';
import { Metadata } from "next";

interface BlogPageProps {
    params: {
        slug: string;
    };
}

// Función para generar metadata dinámica
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
        
    const { slug } = await params;
    const blog = BlogV1Data.find((b) => b.slug === slug);

    if (!blog || blog.status !== 'published') {
        return {
            title: "Blog no encontrado | Molab.app",
            description: "El artículo que buscas no existe o no está disponible.",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    return {
        title: blog.seo?.metaTitle || `${blog.title} | Molab.app`,
        description: blog.seo?.metaDescription || blog.excerpt,
        keywords: blog.seo?.keywords || [],
        openGraph: {
            title: blog.seo?.metaTitle || blog.title,
            description: blog.seo?.metaDescription || blog.excerpt,
            url: blog.seo?.canonical || `https://molab.app/blogs/${blog.slug}`,
            siteName: "Molab.app",
            images: [
                {
                    url: blog.images?.ogImage || blog.images?.featured || blog.images?.thumbnail || "",
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            locale: "es_AR",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.excerpt,
            images: [blog.images?.ogImage || blog.images?.featured || ""],
        },
        alternates: {
            canonical: blog.seo?.canonical || `https://molab.app/blogs/${blog.slug}`,
        },
    };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {

    const { slug } = await params;
    const blog = BlogV1Data.find((b) => b.slug === slug);

    if (!blog || blog.status !== 'published') { 
        notFound();
    }

    const relatedBlogs = blog.relatedPosts
        ? BlogV1Data.filter((b) => 
            blog.relatedPosts?.includes(b.id) && 
            b.id !== blog.id && 
            b.status === 'published'
          )
        : [];

    // Schema.org para artículo
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt,
        "image": blog.images?.featured || blog.images?.thumbnail,
        "datePublished": blog.publishedAt,
        "dateModified": blog.updatedAt || blog.publishedAt,
        "author": {
            "@type": "Person",
            "name": typeof blog.author === 'object' ? blog.author.name : blog.author,
            "url": typeof blog.author === 'object' && blog.author.slug 
                ? `https://molab.app/authors/${blog.author.slug}` 
                : undefined
        },
        "publisher": {
            "@type": "Organization",
            "name": "Molab.app",
            "logo": {
                "@type": "ImageObject",
                "url": "https://molab.app/assets/img/logo/molab_app_logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://molab.app/blogs/${blog.slug}`
        },
        "articleSection": blog.category?.name,
        "keywords": blog.tags?.map(tag => tag.name).join(", ")
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://molab.app"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://molab.app/blogs"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": blog.title,
                "item": `https://molab.app/blogs/${blog.slug}`
            }
        ]
    };

    return (
        <PagePatternWrapper>
            <JsonLd data={articleSchema} />
            <JsonLd data={breadcrumbSchema} />
            <HeaderV10 sectionClass="dark"></HeaderV10>
            <main>
                <BlogDetail blog={blog as any} relatedBlogs={relatedBlogs as any} />
            </main>
            <FooterV1 logoColor="light" />
            <DarkClass />
        </PagePatternWrapper>
    );
}

