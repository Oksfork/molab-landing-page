import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import ProjectV1Data from '@/assets/jsonData/project/ProjectV1Data.json'
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Anaton - Project Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = ProjectV1Data.find(project => project.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Project Details" breadCrumb="project-details" />
                {data && <ProjectDetailsContent projectInfo={data} totalProject={ProjectV1Data.length} />}
            </LayoutV1>
        </>
    );
};

export default ProjectDetailsPage;