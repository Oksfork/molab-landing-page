import Link from "next/link";

interface DataType {
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ toggleSubMenu }: DataType) => {
    return (
        <>
            <ul className="nav navbar-nav navbar-center">
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle active" data-toggle="dropdown" scroll={false} onClick={toggleSubMenu}>Home</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/creative-agency">Creative Agency <span className="badge">New</span></Link></li>
                        <li><Link href="/chatbot">Chatbot <span className="badge">New</span></Link></li>
                        <li><Link href="/app-landing">App Landing <span className="badge">New</span></Link></li>
                        <li><Link href="/">SaaS Landing</Link></li>
                        <li><Link href="/home-2">Software Landing</Link></li>
                        <li><Link href="/personal-portfolio">Personal Portfolio</Link></li>
                        <li><Link href="/home-3">SaaS Marketing</Link></li>
                        <li><Link href="/ai-writer">AI Writer</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" scroll={false} onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/team-details/1">Team Details</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                        <li><Link href="/not-found">Error Page</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" scroll={false} onClick={toggleSubMenu}>Projects</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/project">Project style one</Link></li>
                        <li><Link href="/project-2">Project style two</Link></li>
                        <li><Link href="/project-details/1">Project Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" scroll={false} onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">Services Version One</Link></li>
                        <li><Link href="/services-2">Services Version Two</Link></li>
                        <li><Link href="/service-details/1">Services Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" scroll={false} onClick={toggleSubMenu}>Blog</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two column</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three column</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;