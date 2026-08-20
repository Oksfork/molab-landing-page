"use client"
import Link from 'next/link';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSidebarMenu from '@/hooks/useSidebarMenu';
// import useSubMenuToggle from '@/hooks/useSubMenuToggle';
import Image from 'next/image';
import molabLogo from "@/assets/img/logo/molab_app_logo.png"
import { useState } from "react";
import TrialModal from "../modals/TrialModal";

interface DataType {
    sectionClass?: string
}

const HeaderV10 = ({ sectionClass }: DataType) => {

    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const [trialOpen, setTrialOpen] = useState(false);
    // const toggleSubMenu = useSubMenuToggle();

    return (
        <>
            <header>
                <nav 
                    className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed  on menu-center no-full ${isMenuSticky ? "sticked" : "no-background"} ${sectionClass ? sectionClass : ""} ${isOpen ? "navbar-responsive" : ""}`}
                    aria-label="Header de Molab.app - Software de gestión para laboratorios dentales"
                >
                    <div className="container d-flex justify-content-between align-items-center">

                        {/* Navbar Header */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" href="/">
                                <Image src={molabLogo} className="logo" alt="Molab.app - Software de gestión para laboratorios dentales" />
                            </Link>
                        </div>

                        {/* Menu Area - Desktop */}
                        <div className="navbar-nav d-none d-lg-flex align-items-center">
                            <ul className="navbar-nav-list">
                                <li>
                                    <Link href="/" className="nav-link">Inicio</Link>
                                </li>
                                <li>
                                    <Link href="/blogs" className="nav-link">Tutoriales</Link>
                                </li>
                                <li>
                                    <Link href="/#faq" className="nav-link">¿Alguna duda?</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Header Right */}
                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button">
                                        <button
                                            type="button"
                                            aria-label="Solicitar prueba sin costo"
                                            className="btn btn-sm btn-cta"
                                            onClick={() => setTrialOpen(true)}
                                        >
                                            PRUEBA SIN COSTO
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu}></div>
                        </div>
                    </div>

                    {/* Mobile Sidebar Menu */}
                    <div className={`mobile-sidebar ${isOpen ? "opened" : ""}`}>
                        <div className="mobile-sidebar-header">
                            <Link className="mobile-sidebar-logo" href="/" onClick={closeMenu}>
                                <Image src={molabLogo} className="logo" alt="Molab.app" />
                            </Link>
                            <button 
                                type="button" 
                                className="mobile-sidebar-close" 
                                onClick={closeMenu}
                                aria-label="Cerrar menú"
                            >
                                <i className="fa fa-times" />
                            </button>
                        </div>
                        <nav className="mobile-sidebar-nav">
                            <ul className="mobile-sidebar-menu">
                                <li>
                                    <Link href="/" className="mobile-sidebar-link" onClick={closeMenu}>
                                        <i className="fas fa-home" /> Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blogs" className="mobile-sidebar-link" onClick={closeMenu}>
                                        <i className="fas fa-blog" /> Tutoriales
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#faq" className="mobile-sidebar-link" onClick={closeMenu}>
                                        <i className="fas fa-question-circle" /> ¿Alguna duda?
                                    </Link>
                                </li>
                                <li className="mobile-sidebar-button">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-cta"
                                        onClick={() => {
                                            closeMenu();
                                            setTrialOpen(true);
                                        }}
                                        aria-label="Solicitar prueba sin costo"
                                    >
                                        Prueba sin costo
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </header>
            <TrialModal open={trialOpen} onClose={() => setTrialOpen(false)} />
        </>
    );
};

export default HeaderV10;