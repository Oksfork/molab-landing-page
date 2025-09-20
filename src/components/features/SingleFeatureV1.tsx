"use client";

import { useState } from "react";

interface DataType {
    className?: string;
    iconClass?: string;
    title: string;
    text?: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { className, iconClass, title, text } = feature;
    const [active, setActive] = useState(false);

    return (
        <>
            <div className={`${className} ${active ? 'active' : ''}`}
                onMouseOver={() => setActive(true)}
                onMouseOut={() => setActive(false)}
            >
                <div className="bg" style={{ backgroundImage: 'url(/assets/img/shape/13.png)' }} />
                <div className="icon">
                    <i className={iconClass} />
                </div>
                <h4>{title}</h4>
                <p>{[text]}</p>
            </div>
        </>
    );
};

export default SingleFeatureV1;