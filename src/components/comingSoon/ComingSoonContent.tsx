import NewsLetterFormV2 from "../form/NewsLetterFormV2";
import SocialShareV4 from "../social/SocialShareV4";
import TimerV1 from "../timer/TimerV1";

const ComingSoonContent = () => {

    const time = new Date("Dec 07 2025")

    return (
        <>
            <div className="comming-soon-area bg-cover text-center text-light"
                style={{ backgroundImage: 'url(/assets/img/shape/banner-7.jpg)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="content">
                                <h1>Coming Soon..</h1>
                                <p>
                                    {`Our website is under construction. We'll be here soon with our new awesome site. Subscribe to notified.`}
                                </p>
                                <div className="f-item newsletter secondary">
                                    <NewsLetterFormV2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-info">
                    <div className="left-info">
                        <h4>Launching In</h4>
                        <TimerV1 expiryTimestamp={time} />
                    </div>
                    <div className="right-info">
                        <h4>Follow us</h4>
                        <ul className="site-social">
                            <SocialShareV4 />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComingSoonContent;