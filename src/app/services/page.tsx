import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import FaqV1 from '@/components/faq/FaqV1';
import FeatureV1 from '@/components/features/FeatureV1';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PriceV1 from '@/components/pricing/PriceV1';
import ServicesV1 from '@/components/services/ServicesV1';
import WhyChooseV1 from '@/components/whyChoose/WhyChooseV1';

export const metadata = {
    title: "Anaton - Services"
};

const ServicePage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Services" breadCrumb="services" />
                <ServicesV1 />
                <WhyChooseV1 />
                <FeatureV1 sectionClass='bg-gray default-padding' />
                <FaqV1 />
                <PriceV1 />
            </LayoutV1>
        </>
    );
};

export default ServicePage;