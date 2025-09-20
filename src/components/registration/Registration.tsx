import illustration2 from "@/assets/img/illustration/2.png"
import Image from "next/image";
import ContactForm from "../form/ContactForm";

interface DataType {
    sectionClass?: string
}

const Registration = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`free-trial-area overflow-hidden ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: 'url(/assets/img/shape/31.png)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 free-trial-style-one">
                            <h2 className="title mb-25">Sign up & get <br /> <strong>15 days</strong> free trial</h2>
                            <p>
                                Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                            </p>
                            <ul className="check-list mt-30">
                                <li>Ticketing system</li>
                                <li>Automated ticket distribution</li>
                                <li>Social media integration</li>
                                <li>Call and voice mail recordings</li>
                            </ul>
                            <div className="call mt-25">
                                <p>Give us a free cal</p>
                                <h4><a href="tel:+4733378901">+4733378901</a></h4>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="trial-form">
                                <h4>Request for demo</h4>
                                <ContactForm />
                                <div className="shape">
                                    <Image src={illustration2} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;