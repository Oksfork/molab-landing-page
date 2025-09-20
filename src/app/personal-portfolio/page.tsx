import AboutV3 from '@/components/about/AboutV3';
import BannerV5 from '@/components/banner/BannerV5';
import DarkClassV3 from '@/components/classes/DarkClassV3';
import ContactV1 from '@/components/contact/ContactV1';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV5 from '@/components/header/HeaderV5';
import PerformanceV1 from '@/components/performance/PerformanceV1';
import PortfolioV3 from '@/components/portfolio/PortfolioV3';
import PriceV4 from '@/components/pricing/PriceV4';
import ServicesV3 from '@/components/services/ServicesV3';
import TestimonialV2 from '@/components/testimonials/TestimonialV2';

export const metadata = {
    title: "Anaton - Personal Portfolio"
};


const PersonalPortfolio = () => {
    return (
        <>
            <HeaderV5 />
            <BannerV5 />
            <PerformanceV1 />
            <AboutV3 />
            <ServicesV3 />
            <PortfolioV3 />
            <PriceV4 sectionClass='bg-dark text-light' titleColor='text-light' />
            <TestimonialV2 />
            <ContactV1 sectionClass='secondary' shape="d2.png" />
            <FooterV1 sectionClass='secondary' logoColor="blue" />
            <DarkClassV3 />
        </>
    );
};

export default PersonalPortfolio;