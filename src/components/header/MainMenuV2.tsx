import Link from "next/link";
import ScrollMenu from "./ScrollMenu";

interface DataType {
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenuV2 = ({ toggleSubMenu }: DataType) => {
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
                <ScrollMenu />
            </ul>
        </>
    );
};

export default MainMenuV2;