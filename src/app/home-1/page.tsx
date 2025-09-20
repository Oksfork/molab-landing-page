import BannerV1 from "@/components/banner/BannerV1";
import BlogV1 from "@/components/blog/BlogV1";
import BrandV1 from "@/components/brand/BrandV1";
import FaqV1 from "@/components/faq/FaqV1";
import FeatureV1 from "@/components/features/FeatureV1";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV1 from "@/components/header/HeaderV1";
import PriceV1 from "@/components/pricing/PriceV1";
import SoftwareDetails from "@/components/software/SoftwareDetails";
import SoftwareV1 from "@/components/software/SoftwareV1";
import TestimonialV1 from "@/components/testimonials/TestimonialV1";
import UserV1 from "@/components/user/UserV1";

export const metadata = {
    title: "Anaton - SaaS Landing Template"
};

const Home1 = () => {
    return (
        <>
            <HeaderV1 sectionClass="white" />
            <BannerV1 hasBg={true} />
            <FeatureV1 hasBg={true} sectionClass="default-padding mt-xs--50 mt-md--60" />
            <BrandV1 />
            <SoftwareDetails bgImage="15.png" shape="14.png" />
            <SoftwareV1 hasBg={true} />
            <UserV1 shape="globe.png" />
            <PriceV1 sectionClass="bg-gray" />
            <TestimonialV1 />
            <FaqV1 />
            <BlogV1 />
            <FooterV1 />
        </>
    );
};

export default Home1;