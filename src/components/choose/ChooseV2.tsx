import Link from "next/link";
import Counter from "../counter/Counter";

const ChooseV2 = () => {
    return (
        <>
            <div className="choose-us-style-two-area default-padding overflow-hidden bg-gray">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="choose-us-fun-fact text-center" style={{ backgroundImage: 'url(/assets/img/shape/banner-3.webp)' }}>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><Counter end={276} /></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">Active user</span>
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
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="choose-us-style-two">
                                <h4 className="sub-heading theme">Artificial Technologies</h4>
                                <h2 className="heading">Get Benefits of using latest Artificial <strong>Intelligence</strong>.</h2>
                                <p>
                                    First, simply input your text into the platform. This can be any type of written content, such as blog posts, articles, or marketing copy. Create a spot-on match of the voice you like with Murf. Customize the voice by adjusting pitch, tone, speed.
                                </p>
                                <ul>
                                    <li>Emotions</li>
                                    <li>Speech-To-Speech </li>
                                    <li>Localize </li>
                                </ul>
                                <Link className="btn circle mt-35 btn-sm btn-border light secondary" href="/contact-us">Start for free</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseV2;