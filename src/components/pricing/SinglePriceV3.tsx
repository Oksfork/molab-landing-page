"use client";

import Link from 'next/link';
import { useState } from 'react';

interface DataType {
    id?: number;
    name?: string;
    features: string[];
    price?: number;
    billing_cycle?: string;
    tag?: string;
    btnClass?: string;
}

const SinglePriceV3 = ({ plan }: { plan: DataType }) => {
    const { name, features, price, billing_cycle, tag, btnClass } = plan;
    const [isHovered, setIsHovered] = useState(false);
    const isPremium = name === 'Premium';

    return (
        <article 
            className={`glass-pricing-card ${isHovered ? 'is-hovered' : ''} ${isPremium ? 'premium-card' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={`Plan ${name}`}
        >
            <div className="glass-overlay" />
            <div className="top-accent" />
            
            {/* Glow effect solo para Premium */}
            {isPremium && <div className="glow-ring" />}
            
            {tag && (
                <div className="popular-badge">
                    {tag}
                </div>
            )}
           
            <div className={`pricing-header ${isPremium ? 'text-gradient' : ''} d-flex align-items-center gap-2`}>
                    {
                        isPremium && (
                                <i className="fas fa-star plan-name fs-20" />
                        )
                    }
                <h3 className="plan-name">
                    {name}
                </h3>
            </div>
            
            <div className="pricing-content">
                <ul className="features-list">
                    {features.map((feature, index) => (
                        <li key={index}>
                            <i className={`fas ${feature.includes("Unlimited Logins") ? "fa-times-circle" : "fa-check-circle"}`} />
                            {feature}
                        </li>
                    ))}
                </ul>
                
                <div className="price-section">
                    <h2 className="price-value">
                        <sup>$</sup>{price} <sub>/ {billing_cycle}</sub>
                    </h2>
                    <Link className={`btn mt-25 btn-sm effect ${btnClass}`} href="https://wa.me/5491136457906" target="_blank" aria-label="Solicitar prueba sin costo">
                        Purchase Plan
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default SinglePriceV3;