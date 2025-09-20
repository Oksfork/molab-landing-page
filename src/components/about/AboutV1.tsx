import Image from 'next/image';
import thumb2 from '@/assets/img/thumb/2.jpg';
import Counter from '../counter/Counter';

const AboutV1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 about-style-one">
                            <div className="about-thumb">
                                <Image src={thumb2} alt="Image Not Found" />
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
                                        <span className="medium">(4,655) Positive Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 offset-lg-1 about-style-one mt-80 mt-md-50 mt-xs-30">
                            <h2 className="title mb-25">Creativity and quality is our destination</h2>
                            <p>
                                Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from.
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
        </>
    );
};

export default AboutV1;