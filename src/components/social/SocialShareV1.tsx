import Link from "next/link";

const SocialShareV1 = () => {
    return (
        <>
            <li><Link href="https://www.instagram.com/artecinventlab/" target="_blank"><i className="fab fa-instagram" /></Link></li>
            <li><Link href="https://www.facebook.com/Artecinvent" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
            <li><Link href="https://www.youtube.com/@rematedental" target="_blank"><i className="fab fa-youtube" /></Link></li>
        </>
    );
};

export default SocialShareV1;