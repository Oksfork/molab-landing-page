import AboutV1 from "@/components/about/AboutV1";
import BrandV1 from "@/components/brand/BrandV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import FaqV2 from "@/components/faq/FaqV2";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV1 from "@/components/team/TeamV1";
import TestimonialV2 from "@/components/testimonials/TestimonialV2";
import ToolsV1 from "@/components/tools/ToolsV1";

export const metadata = {
    title: "Anaton - About Us"
};

const AboutUsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="About Us" breadCrumb="about-us" />
                <AboutV1 />
                <BrandV1 />
                <ToolsV1 />
                <TestimonialV2 />
                <FaqV2 sectionClass="default-padding faq-style-two-area" faqThumb="40.png" />
                <TeamV1 />
            </LayoutV1>
        </>
    );
};

export default AboutUsPage;