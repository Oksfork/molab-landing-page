import BannerV2 from "@/components/banner/BannerV2";
import BlogV1 from "@/components/blog/BlogV1";
import DarkClass from "@/components/classes/DarkClass";
import FaqV2 from "@/components/faq/FaqV2";
import FeatureV2Dark from "@/components/features/FeatureV2Dark";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV6 from "@/components/header/HeaderV6";
import PriceV2 from "@/components/pricing/PriceV2";
import ProcessV1 from "@/components/process/ProcessV1";
import Registration from "@/components/registration/Registration";
import SoftwareInfoV1 from "@/components/software/SoftwareInfoV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "Anaton - Home 2 Dark"
};

const Home2Dark = () => {
    return (
        <>
            <HeaderV6 />
            <BannerV2 />
            <ProcessV1 sectionClass="default-padding-bottom" hasTitle={true} />
            <FeatureV2Dark />
            <WhyChooseV1 />
            <Registration sectionClass="default-padding-bottom" />
            <PriceV2 />
            <FaqV2 sectionClass="faq-style-area" faqThumb="34.png" />
            <SoftwareInfoV1 />
            <BlogV1 />
            <FooterV1 logoColor="blue" />
            <DarkClass />
        </>
    );
};

export default Home2Dark;