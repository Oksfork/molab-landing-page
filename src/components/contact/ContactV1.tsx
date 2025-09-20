import Image from "next/image";
import ContactForm from "../form/ContactForm";
import ContactInfo from "./ContactInfo";

interface DataType {
    shape?: string;
    sectionClass?: string
}

const ContactV1 = ({ shape, sectionClass }: DataType) => {
    return (
        <>
            <div id="contact-us" className={`contact-area overflow-hidden default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-tact-stye-one col-lg-5 pr-60 pr-md-15 pr-xs-15">
                            <ContactInfo />
                        </div>

                        <div className="col-tact-stye-one col-lg-7">
                            <div className="contact-form-style-one">
                                <div className="shape-right-bottom">
                                    <Image src={`/assets/img/shape/${shape}`} alt="Image not Found" width={270} height={375} />
                                </div>
                                <h4 className="sub-heading">Have Questions?</h4>
                                <h2 className="title">Send us a Massage</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;