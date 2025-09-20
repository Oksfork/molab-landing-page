import BannerV7 from '@/components/banner/BannerV7';
import BlogV1 from '@/components/blog/BlogV1';
import DarkClassV3 from '@/components/classes/DarkClassV3';
import FactV1 from '@/components/fact/FactV1';
import FeatureV4 from '@/components/features/FeatureV4';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV8 from '@/components/header/HeaderV8';
import SoftInfo from '@/components/info/SoftInfo';
import PriceV5 from '@/components/pricing/PriceV5';
import ProcessV3 from '@/components/process/ProcessV3';
import FreeTrial from '@/components/trial/FreeTrial';

export const metadata = {
    title: "Anaton - App Landing"
};

const AppLanding = () => {
    return (
        <>
            <HeaderV8 sectionClass='white' />
            <BannerV7 />
            <FactV1 />
            <FeatureV4 />
            <FreeTrial />
            <ProcessV3 />
            <SoftInfo />
            <PriceV5 />
            <BlogV1 />
            <FooterV1 logoColor='blue' />
            <DarkClassV3 />
        </>
    );
};

export default AppLanding;