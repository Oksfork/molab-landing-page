import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import TeamV2 from '@/components/team/TeamV2';

export const metadata = {
    title: "Anaton - Team"
};

const TeamPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Team Members" breadCrumb="team" />
                <TeamV2 />
            </LayoutV1>
        </>
    );
};

export default TeamPage;