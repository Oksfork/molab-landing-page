import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ContactV2 from "@/components/contact/ContactV2";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Anaton - Contact Us"
};


const ContactUsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Get in touch with Us" breadCrumb="contact" />
                <ContactV2 shape="43.png" />
            </LayoutV1>
        </>
    );
};

export default ContactUsPage;