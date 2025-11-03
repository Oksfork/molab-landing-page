"use client";

import Image from "next/image";
import { useState } from "react";

interface DataType {
    id?: number;
    iconDark?: string;
    title?: string;
    category?: string;
}

const SingleServicesV2Dark = ({ service, index }: { service: DataType, index?: number }) => {
    const { iconDark, title, category } = service;
    const [isHovered, setIsHovered] = useState(false);
    const animationDelay = (index || 0) * 0.1;

    return (
        <div 
            className={`glassmorphism-card ${isHovered ? 'is-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationDelay: `${animationDelay}s` }}
        >
            <div className="glass-layer" />
            <div className="top-glow" />
            
            <div className="content-wrapper">
                <div className="icon-wrapper glass-icon">
                    <Image 
                        src={`/assets/img/icon/${iconDark}`} 
                        alt={title || `Ícono ${index || 0}`}
                        width={40} 
                        height={40}
                    />
                </div>
                
                <div className="text-content">
                    {category && (
                        <span className="category glass-category">
                            {category}
                        </span>
                    )}
                    <p className="title-text">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleServicesV2Dark;