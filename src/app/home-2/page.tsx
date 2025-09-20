import BannerV2 from "@/components/banner/BannerV2";
import BlogV1 from "@/components/blog/BlogV1";
import DarkClassV3 from "@/components/classes/DarkClassV3";
import FaqV2 from "@/components/faq/FaqV2";
import FeatureV2 from "@/components/features/FeatureV2";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV2 from "@/components/header/HeaderV2";
import PriceV2 from "@/components/pricing/PriceV2";
import ProcessV1 from "@/components/process/ProcessV1";
import Registration from "@/components/registration/Registration";
import SoftwareInfoV1 from "@/components/software/SoftwareInfoV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "Anaton - Home 2"
};

const Home2 = () => {
    return (
        <>
            <HeaderV2 sectionClass="white" />
            <BannerV2 />
            <ProcessV1 sectionClass="default-padding-bottom" hasTitle={true} />
            <FeatureV2 hasBg={true} />
            <WhyChooseV1 />
            <Registration sectionClass="default-padding-bottom" />
            <PriceV2 />
            <FaqV2 sectionClass="faq-style-area default-padding-bottom" faqThumb="34.png" />
            <SoftwareInfoV1 />
            <BlogV1 />
            <FooterV1 logoColor="blue" />
            <DarkClassV3 />
        </>
    );
};

export default Home2;