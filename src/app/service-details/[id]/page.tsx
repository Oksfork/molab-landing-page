import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import ServiceDetailsContent from '@/components/services/ServiceDetailsContent';
import SoftwareV1Data from "@/assets/jsonData/software/SoftwareV1Data.json"
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Anaton - Service Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServiceDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = SoftwareV1Data.find(soft => soft.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Service Details" breadCrumb="service-details" />
                {data && <ServiceDetailsContent serviceInfo={data} totalService={SoftwareV1Data.length} />}
            </LayoutV1>
        </>
    );
};

export default ServiceDetailsPage;