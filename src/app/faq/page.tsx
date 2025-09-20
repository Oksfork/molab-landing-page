import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import FaqPageContent from '@/components/faq/FaqPageContent';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Anaton - Faq"
};

const FaqPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Questions & Asked" breadCrumb="faq" />
                <FaqPageContent />
            </LayoutV1>
        </>
    );
};

export default FaqPage;