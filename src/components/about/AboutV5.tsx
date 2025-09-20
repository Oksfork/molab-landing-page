import Image from 'next/image';
import about3 from "@/assets/img/about/3.jpg"
import chat from "@/assets/img/illustration/chat.png"
import illustration12 from "@/assets/img/illustration/12.png"

const AboutV5 = () => {
    return (
        <>
            <div className="about-style-five-area default-padding bg-gray">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="about-six-thumb">
                                <Image src={about3} alt="Image Not Found" />
                                <Image src={chat} alt="Image Not Found" />
                                <Image src={illustration12} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="about-style-sixe">
                                <h2 className="title mb-25">Discover Our AI Chatbot Assistant - RoboChat </h2>
                                <p>
                                    The charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish.
                                </p>
                                <ul className="list-circle mt-30">
                                    <li>Enjoy lifetime free updates.</li>
                                    <li>Cross browser and cross platform compatibility. </li>
                                    <li>Friendly and effective support team. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV5;