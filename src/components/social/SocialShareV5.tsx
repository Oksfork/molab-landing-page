import Link from "next/link";

const SocialShareV5 = () => {
    return (
        <>
            <li className="facebook"><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
            <li className="twitter"><Link href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter" /></Link></li>
            <li className="pinterest"><Link href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest" /></Link></li>
            <li className="youtube"><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-youtube" /></Link></li>
        </>
    );
};

export default SocialShareV5;