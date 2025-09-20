import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import TeamDetailsContent from '@/components/team/TeamDetailsContent';
import TeamV1Data from "@/assets/jsonData/team/TeamV1Data.json"
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Anaton - Team Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const TeamDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = TeamV1Data.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Team Details" breadCrumb="team-details" />
                {data && <TeamDetailsContent teamInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default TeamDetailsPage;