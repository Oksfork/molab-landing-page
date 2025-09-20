import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import FaqV2 from '@/components/faq/FaqV2';
import FeatureV2 from '@/components/features/FeatureV2';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PriceV2 from '@/components/pricing/PriceV2';
import ProcessV1 from '@/components/process/ProcessV1';
import Registration from '@/components/registration/Registration';
import TestimonialV2 from '@/components/testimonials/TestimonialV2';

export const metadata = {
    title: "Anaton - Services 2"
};

const Service2Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Services" breadCrumb="services-2" />
                <ProcessV1 sectionClass='default-padding' />
                <FeatureV2 hasBg={true} />
                <Registration sectionClass='default-padding' />
                <TestimonialV2 />
                <PriceV2 />
                <FaqV2 sectionClass="faq-style-area default-padding-bottom" faqThumb="34.png" />
            </LayoutV1>
        </>
    );
};

export default Service2Page;