import Image from "next/image";
import ContactInfo from "./ContactInfo";
import ContactFormV2 from "../form/ContactFormV2";

interface DataType {
    shape?: string;
    sectionClass?: string
}

const ContactV2 = ({ shape, sectionClass }: DataType) => {
    return (
        <>
            <div className={`contact-area overflow-hidden default-padding ${sectionClass ? sectionClass : ""}`}>
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
                                <ContactFormV2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV2;