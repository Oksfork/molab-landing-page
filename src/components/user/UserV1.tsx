import shape18 from "@/assets/img/shape/18.png"
import Image from "next/image";
import Counter from "../counter/Counter";
import teamV1 from "@/assets/img/team/v1.jpg"
import teamV2 from "@/assets/img/team/v2.jpg"
import teamV3 from "@/assets/img/team/v3.jpg"
import teamV4 from "@/assets/img/team/v4.jpg"
import teamV5 from "@/assets/img/team/v5.jpg"
import Animate from "../animation/Animate";

interface DataType {
    shape?: string
}

const UserV1 = ({ shape }: DataType) => {
    return (
        <>
            <div className="current-user-area default-padding">
                <div className="shape-left-bottom-extra">
                    <Image src={shape18} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="user-fun-fact">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><Counter end={276} /></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">Active user from the community</span>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><Counter end={90} /></div>
                                        <div className="operator">%</div>
                                    </div>
                                    <div className="user-ratings">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half" />
                                    </div>
                                    <span className="medium">(4,655) Positive Rating</span>
                                </div>
                                <ul className="list-circle mt-30">
                                    <li>Enjoy lifetime free updates.</li>
                                    <li>Cross browser and cross platform compatibility. </li>
                                    <li>Friendly and effective support team. </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="active-user-info">
                                <div className="shape-globe">
                                    <Animate className="animate__animated animate__fadeInUp">
                                        <Image src={`/assets/img/shape/${shape}`} alt="Image Not Found" width={780} height={750} />
                                    </Animate>
                                </div>
                                <div className="active-user-banner">
                                    <div className="item">
                                        <Animate className="animate__animated animate__fadeInUp">
                                            <Image src={teamV1} alt="Image Not Found" />
                                        </Animate>
                                    </div>
                                    <div className="item">
                                        <Animate className="animate__animated animate__fadeInUp" delay="200ms">
                                            <Image src={teamV2} alt="Image Not Found" />
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="600ms">
                                            <Image src={teamV3} alt="Image Not Found" />
                                        </Animate>
                                    </div>
                                    <div className="item">
                                        <Animate className="animate__animated animate__fadeInUp" delay="400ms">
                                            <Image src={teamV4} alt="Image Not Found" />
                                        </Animate>
                                        <Animate className="animate__animated animate__fadeInUp" delay="800ms">
                                            <Image src={teamV5} alt="Image Not Found" />
                                        </Animate>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserV1;