import { Link } from 'react-scroll';

const ScrollMenu = () => {
    return (
        <>
            <li>
                <Link className="smooth-menu" offset={-100} to="about">About</Link>
            </li>
            <li>
                <Link className="smooth-menu" offset={-100} to="services">services</Link>
            </li>
            <li>
                <Link className="smooth-menu" offset={-100} to="portfolio">portfolio</Link>
            </li>
            <li>
                <Link className="smooth-menu" offset={-100} to="pricing">pricing</Link>
            </li>
            <li>
                <Link className="smooth-menu" offset={-100} to="contact-us">contact</Link>
            </li>
        </>
    );
};

export default ScrollMenu;