"use client"
import { useEffect } from 'react';

const DarkClassV2 = () => {

    useEffect(() => {
        document.body.classList.add("bg-dark-optional", "dark-layout");

        return () => {
            document.body.classList.remove("bg-dark-optional", "dark-layout");
        };
    }, []);

    return (
        <>

        </>
    );
};

export default DarkClassV2;