import Link from "next/link";

const SocialShareV3 = () => {
    return (
        <>
            <Link href="https://www.facebook.com/" target="_blank" className="share-icon facebook"><i className="fab fa-facebook-f" /></Link>
            <Link href="https://www.twitter.com/" target="_blank" className="share-icon twitter"><i className="fab fa-twitter" /></Link>
            <Link href="https://www.instagram.com/" target="_blank" className="share-icon instagram"><i className="fab fa-instagram" /></Link>
        </>
    );
};

export default SocialShareV3;