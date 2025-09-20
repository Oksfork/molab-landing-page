import AppV1 from "@/components/app/AppV1";
import BannerV1 from "@/components/banner/BannerV1";
import BannerV2 from "@/components/banner/BannerV2";
import BannerV2Feature from "@/components/banner/BannerV2Feature";
import BannerV3 from "@/components/banner/BannerV3";
import BannerV4 from "@/components/banner/BannerV4";
import BannerV5 from "@/components/banner/BannerV5";
import BannerV6 from "@/components/banner/BannerV6";
import BannerV7 from "@/components/banner/BannerV7";
import BlogV1 from "@/components/blog/BlogV1";
import DarkClass from "@/components/classes/DarkClass";
import FaqV2 from "@/components/faq/FaqV2";
import FeatureV1 from "@/components/features/FeatureV1";
import FeatureV2 from "@/components/features/FeatureV2";
import FeatureV3 from "@/components/features/FeatureV3";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV10 from "@/components/header/HeaderV10";
import PriceV1 from "@/components/pricing/PriceV1";
import PriceV2 from "@/components/pricing/PriceV2";
import PriceV3 from "@/components/pricing/PriceV3";
import ProcessV1 from "@/components/process/ProcessV1";
import ProcessV2 from "@/components/process/ProcessV2";
import ServicesV1 from "@/components/services/ServicesV1";
import ServicesV2Dark from "@/components/services/ServicesV2Dark";
import ServicesV3 from "@/components/services/ServicesV3";
import ServicesV4 from "@/components/services/ServicesV4";
import SoftwareV1 from "@/components/software/SoftwareV1";
import TeamV1 from "@/components/team/TeamV1";
import TestimonialV1 from "@/components/testimonials/TestimonialV1";
import ToolsV1 from "@/components/tools/ToolsV1";

export const metadata = {
    title: "Anaton - Home 3 Dark"
};

const Home3Dark = () => {
    return (
        <>
            <HeaderV10 sectionClass="dark"></HeaderV10>
            <BannerV3 hasBg={true}></BannerV3>
            {/* <ToolsV1 sectionClass="bg-gray" /> */}
            {/* <FeatureV2 /> */}
            <FeatureV1 />
            {/* <ServicesV3 /> */}
            <ProcessV2 />
            {/* <ServicesV4></ServicesV4> */}
            {/* <TeamV1 sectionClass="bg-gray" /> */}
            {/* <FaqV2 sectionClass="faq-style-two-area default-padding" faqThumb="40.png" /> */}
            <ServicesV2Dark></ServicesV2Dark>
            {/* <AppV1 /> */}
            <PriceV3 />
            
            {/* <TestimonialV2 sectionClass="primary-theme" /> */}
            <TestimonialV1></TestimonialV1>
            {/* <BlogV1 /> */}
            <BannerV4 />
            <FooterV1 logoColor="light" />
            <DarkClass />
        </>
    );
};

export default Home3Dark;