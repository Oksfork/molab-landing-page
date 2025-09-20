import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PortfolioV1 from "@/components/portfolio/PortfolioV1";

export const metadata = {
    title: "Anaton - Project 2"
};

const Project2Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Recent Projects" breadCrumb="project-2" />
                <PortfolioV1 />
            </LayoutV1>
        </>
    );
};

export default Project2Page;