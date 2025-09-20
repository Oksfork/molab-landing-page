import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import NotFoundContent from "@/components/notFound/NotFoundContent";

export const metadata = {
    title: "Anaton - 404 Not Found"
};

const NotFoundPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Error Page" breadCrumb="404" />
                <NotFoundContent />
            </LayoutV1>
        </>
    );
};

export default NotFoundPage;