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
        <div 
            className={`${className} glass-card ${isHovered ? 'is-hovered' : ''}`}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="top-border" />
            
            <div className="content-row">
                <div className="icon-container">
                    <i className={iconClass} />
                </div>
                <h4 className="title-content">
                    {title}
                </h4>
            </div>
            
            {text && <p className="text-content">{text}</p>}
        </div>
    );
};

export default SingleFeatureV1;