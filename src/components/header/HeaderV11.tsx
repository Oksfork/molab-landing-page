"use client"
import Link from 'next/link';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import Image from 'next/image';
import logoLight from "@/assets/img/logo-light.png"

interface DataType {
    sectionClass?: string
}

const HeaderV11 = ({ sectionClass }: DataType) => {

    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu } = useSidebarMenu();

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

                        {/* Header Right */}
                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button border-btn secondary">
                                        <Link href="/contact-us">Get in touch</Link>
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

export default HeaderV11;