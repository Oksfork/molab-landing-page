import BannerV1 from '@/components/banner/BannerV1';
import BlogV1 from '@/components/blog/BlogV1';
import BrandV1 from '@/components/brand/BrandV1';
import DarkClass from '@/components/classes/DarkClass';
import FaqV1 from '@/components/faq/FaqV1';
import FeatureV1 from '@/components/features/FeatureV1';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV9 from '@/components/header/HeaderV9';
import PriceV1 from '@/components/pricing/PriceV1';
import SoftwareDetails from '@/components/software/SoftwareDetails';
import SoftwareV1 from '@/components/software/SoftwareV1';
import TestimonialV1 from '@/components/testimonials/TestimonialV1';
import UserV1 from '@/components/user/UserV1';

export const metadata = {
    title: "Anaton - Home 1 Dark"
};

const HomeDark = () => {
    return (
        <>
            <HeaderV9 />
            <BannerV1 />
            <FeatureV1 sectionClass='default-padding-bottom' />
            <BrandV1 />
            <SoftwareDetails bgImage="15-light.png" shape="14-light.png" />
            <SoftwareV1 serviceClass="bg-gray" />
            <UserV1 shape="globe-light.png" />
            <PriceV1 sectionClass="bg-gray" />
            <TestimonialV1 />
            <FaqV1 />
            <BlogV1 />
            <FooterV1 />
            <DarkClass />
        </>
    );
};

export default HomeDark;