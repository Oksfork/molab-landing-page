import Image from "next/image";
import Animate from "../animation/Animate";
import dashboard6 from "@/assets/img/dashboard/6.png"
import team9 from "@/assets/img/team/9.jpg"
import team10 from "@/assets/img/team/10.jpg"
import team11 from "@/assets/img/team/11.jpg"
import teamV5 from "@/assets/img/team/v5.jpg"
import Link from "next/link";

const SoftwareInfoV1 = () => {
    return (
        <>
            <div className="soft-info-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/23.png)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5 soft-info-style-one">
                            <div className="soft-info-list">
                                <h3>Unlock a superior customer experience </h3>
                                <p>
                                    Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                </p>
                            </div>
                            <div className="soft-info-list mt-30">
                                <h3>Advanced Control and Privacy</h3>
                                <ul>
                                    <li>
                                        Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
                                    </li>
                                    <li>
                                        Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="soft-info-thumb">
                                <Animate className="animate__animated animate__fadeInUp">
                                    <Image src={dashboard6} alt="Dashboard" />
                                </Animate>

                                <Animate className="animate__animated animate__fadeInRight" delay="500ms">
                                    <div className="go-premium">
                                        <span>Go Unlimited</span>
                                        <h5>Unlock all features to improve your performance</h5>
                                        <ul className="user-lists">
                                            <li><Image src={team9} alt="Image Not Found" /></li>
                                            <li><Image src={team10} alt="Image Not Found" /></li>
                                            <li><Image src={team11} alt="Image Not Found" /></li>
                                            <li><Image src={teamV5} alt="Image Not Found" /></li>
                                            <li><i className="fas fa-plus" /></li>
                                        </ul>
                                        <p>(200k Active user)</p>
                                        <Link className="btn circle mt-25 btn-sm btn-theme secondary animation" href="/pricing">Premium Plan</Link>
                                    </div>
                                </Animate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SoftwareInfoV1;