import AboutV3Data from "@/assets/jsonData/about/AboutV3Data.json"
import Image from "next/image";

const AboutV3 = () => {
    return (
        <>
            <div id="about" className="about-style-three-area">
                <div className="container">
                    <div className="about-style-three-items">
                        <div className="row align-center">
                            <div className="col-lg-5">
                                <div className="about-style-three text-light">
                                    <h2 className="heading">about me</h2>
                                    <p>
                                        I really love to create amazing product &amp; <br /> provide quality services.
                                    </p>
                                    <ul className="about-list">
                                        <li><strong>Residence:</strong> Australia</li>
                                        <li><strong>Address:</strong>  Dusting town, Austria</li>
                                        <li><strong>Email:</strong> validtheme@gmail.com</li>
                                        <li><strong>Work:</strong> Available now</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <ul className="work-now">
                                    {AboutV3Data.map(about =>
                                        <li key={about.id}>
                                            <div className="info">
                                                <h4>{about.title}</h4>
                                                <Image src={`/assets/img/icon/${about.company_logo}`} alt="Image Not Found" width={256} height={256} />
                                            </div>
                                            <div className="work-time">{about.work_time}</div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV3;