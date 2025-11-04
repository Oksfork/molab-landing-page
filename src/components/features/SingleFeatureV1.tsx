"use client";

import { useState } from "react";

interface DataType {
    className?: string;
    iconClass?: string;
    title: string;
    text?: string;
}

const SingleFeatureV1 = ({ 
    feature, 
    delay = 0 
}: { 
    feature: DataType;
    delay?: number;
}) => {
    const { className, iconClass, title, text } = feature;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article 
            className={`${className} glass-card ${isHovered ? 'is-hovered' : ''}`}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{ animationDelay: `${delay}s` }}
            aria-label={title}
        >
            <div className="top-border" />
            
            <div className="content-row">
                <div className="icon-container">
                    <i className={iconClass} />
                </div>
                <h3 className="title-content">
                    {title}
                </h3>
            </div>
            
            {text && <p className="text-content">{text}</p>}
        </article>
    );
};

export default SingleFeatureV1;