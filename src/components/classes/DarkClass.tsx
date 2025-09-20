"use client"
import { useEffect } from 'react';

const DarkClass = () => {

    useEffect(() => {
        document.body.classList.add("text-light", "bg-fixed", "dark-layout");
        document.body.style.backgroundImage = "url('/assets/img/shape/banner-2.jpg')";

        return () => {
            document.body.classList.remove("text-light", "bg-fixed", "dark-layout");
            document.body.style.backgroundImage = "";
        };
    }, []);

    return (
        <>

        </>
    );
};

export default DarkClass;