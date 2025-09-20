import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import FaqV2 from "@/components/faq/FaqV2";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PriceV6 from "@/components/pricing/PriceV6";

export const metadata = {
    title: "Anaton - Pricing"
};

const PricingPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Pricing" breadCrumb="pricing" />
                <PriceV6 />
                <FaqV2 sectionClass="faq-style-two-area default-padding" faqThumb="40.png" />
            </LayoutV1>
        </>
    );
};

export default PricingPage;