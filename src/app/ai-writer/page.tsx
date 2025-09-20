import BannerV4 from "@/components/banner/BannerV4";
import BlogV1 from "@/components/blog/BlogV1";
import ChooseV2 from "@/components/choose/ChooseV2";
import DarkClass from "@/components/classes/DarkClass";
import DarkClassV3 from "@/components/classes/DarkClassV3";
import FaqV3 from "@/components/faq/FaqV3";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV4 from "@/components/header/HeaderV4";
import OverviewV1 from "@/components/overview/OverviewV1";
import PriceV3 from "@/components/pricing/PriceV3";
import ProcessV2 from "@/components/process/ProcessV2";
import TestimonialV3 from "@/components/testimonials/TestimonialV3";

export const metadata = {
    title: "Anaton - Ai Writer"
};

const AiWriter = () => {
    return (
        <>
            <HeaderV4 />
            <BannerV4 />
            <ProcessV2 />
            <OverviewV1 />
            <ChooseV2 />
            <TestimonialV3 hasShape={true} />
            <PriceV3 />
            <FaqV3 />
            <BlogV1 />
            <FooterV1 logoColor="light" />
            <DarkClass />
            <DarkClassV3 />
        </>
    );
};

export default AiWriter;