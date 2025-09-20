import AppV1 from "@/components/app/AppV1";
import BannerV3 from "@/components/banner/BannerV3";
import BlogV1 from "@/components/blog/BlogV1";
import FaqV2 from "@/components/faq/FaqV2";
import FeatureV3 from "@/components/features/FeatureV3";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV3 from "@/components/header/HeaderV3";
import ServicesV2 from "@/components/services/ServicesV2";
import TeamV1 from "@/components/team/TeamV1";
import TestimonialV2 from "@/components/testimonials/TestimonialV2";
import ToolsV1 from "@/components/tools/ToolsV1";

export const metadata = {
    title: "Anaton - Home 3"
};

const Home3 = () => {
    return (
        <>
            <HeaderV3 sectionClass="dark" />
            <BannerV3 hasBg={true} />
            <ToolsV1 />
            <FeatureV3 sectionClass="bg-dark" />
            <ServicesV2 />
            <TeamV1 sectionClass="bg-gray" />
            <FaqV2 sectionClass="faq-style-two-area default-padding" faqThumb="40.png" />
            <AppV1 />
            <TestimonialV2 />
            <BlogV1 />
            <FooterV1 />
        </>
    );
};

export default Home3;