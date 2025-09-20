import AboutV5 from '@/components/about/AboutV5';
import BannerV6 from '@/components/banner/BannerV6';
import BlogV1 from '@/components/blog/BlogV1';
import FaqV4 from '@/components/faq/FaqV4';
import FeatureV5 from '@/components/features/FeatureV5';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV7 from '@/components/header/HeaderV7';
import PriceV7 from '@/components/pricing/PriceV7';
import Technology from '@/components/technology/Technology';
import TestimonialV2 from '@/components/testimonials/TestimonialV2';

export const metadata = {
    title: "Anaton - ChatBot"
};

const ChatBot = () => {
    return (
        <>
            <HeaderV7 />
            <BannerV6 />
            <FeatureV5 />
            <AboutV5 />
            <Technology />
            <FaqV4 />
            <PriceV7 sectionClass='bg-light' />
            <TestimonialV2 />
            <BlogV1 />
            <FooterV1 />
        </>
    );
};

export default ChatBot;