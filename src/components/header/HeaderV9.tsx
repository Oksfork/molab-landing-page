"use client";
import Link from 'next/link';
import MainMenu from './MainMenu';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import useSubMenuToggle from '@/hooks/useSubMenuToggle';
import Image from 'next/image';
import logoLight from "@/assets/img/logo-light.png";
import logo from "@/assets/img/logo.png";

interface DataType {
    sectionClass?: string
}

const HeaderV9 = ({ sectionClass }: DataType) => {

    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const toggleSubMenu = useSubMenuToggle();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed  on menu-center no-full ${isMenuSticky ? "sticked" : "no-background"} ${sectionClass ? sectionClass : ""} ${isOpen ? "navbar-responsive" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">

                        {/* Navbar Header */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" href="/">
                                <Image src={logoLight} className="logo" alt="Logo" />
                            </Link>
                        </div>

                        {/* Menu Area */}
                        <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                            <Image src={logo} alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>
                            <MainMenu toggleSubMenu={toggleSubMenu} />
                        </div>

                        {/* Header Right */}
                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button border-btn">
                                        <Link href="/contact-us">Get consultant</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV9;