import AboutV4 from '@/components/about/AboutV4';
import BannerCreative from '@/components/banner/BannerCreative';
import BlogV1 from '@/components/blog/BlogV1';
import DarkClassV2 from '@/components/classes/DarkClassV2';
import DarkClassV3 from '@/components/classes/DarkClassV3';
import FactV2 from '@/components/fact/FactV2';
import FaqV5 from '@/components/faq/FaqV5';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV6 from '@/components/header/HeaderV6';
import PortfolioV2 from '@/components/portfolio/PortfolioV2';
import ServicesV4 from '@/components/services/ServicesV4';
import TestimonialV3 from '@/components/testimonials/TestimonialV3';

export const metadata = {
    title: "Anaton - Creative Agency"
};

const CreativeAgency = () => {
    return (
        <>
            <HeaderV6 sectionClass='white' />
            <BannerCreative />
            <ServicesV4 />
            <AboutV4 />
            <PortfolioV2 />
            <TestimonialV3 sectionClass='text-light' />
            <FaqV5 />
            <FactV2 />
            <BlogV1 sectionClass='secondary text-light' />
            <FooterV1 logoColor='light' />
            <DarkClassV2 />
            <DarkClassV3 />
        </>
    );
};

export default CreativeAgency;