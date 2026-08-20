"use client";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import WhatsAppFloat from "./WhatsAppFloat";

const Dependency = () => {

    useEffect(() => {

        // Dynamically import Bootstrap JS to avoid SSR issues
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
            console.log('Project loaded successfully.');
        }).catch((err) => {
            console.error('Project loading ...:', err);
        });
    }, []);

    return (
        <>
            <WhatsAppFloat />
            <ToastContainer />
        </>
    );
};

export default Dependency;