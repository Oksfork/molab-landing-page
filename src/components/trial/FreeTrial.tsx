import illustration9 from "@/assets/img/illustration/9.png"
import Image from "next/image";
import NewsLetterForm from "../form/NewsLetterForm";

const FreeTrial = () => {
    return (
        <>
            <div className="free-trial-area default-padding bg-cover bg-dark-secondary text-light" style={{ backgroundImage: 'url(/assets/img/shape/50.png)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="blur-bg-thumb">
                                <Image src={illustration9} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 free-trial-style-one">
                            <h2 className="title mb-25">Subscribe and get <br /> <strong>15 days</strong> free trial</h2>
                            <p>
                                Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                            </p>
                            <ul className="check-list mt-30">
                                <li>Ticketing system</li>
                                <li>Automated ticket distribution</li>
                                <li>Social media integration</li>
                            </ul>
                            <div className="subscribe-form">
                                <NewsLetterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FreeTrial;