import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectV1 from "@/components/project/ProjectV1";

export const metadata = {
    title: "Anaton - Project"
};

const ProjectPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Recent Projects" breadCrumb="project" />
                <ProjectV1 />
            </LayoutV1>
        </>
    );
};

export default ProjectPage;