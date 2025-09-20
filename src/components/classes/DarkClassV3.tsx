"use client"
import { useEffect } from 'react';

const DarkClassV3 = () => {

    useEffect(() => {
        document.body.classList.add("theme-blue");

        return () => {
            document.body.classList.remove("theme-blue");
        };
    }, []);

    return (
        <>

        </>
    );
};

export default DarkClassV3;