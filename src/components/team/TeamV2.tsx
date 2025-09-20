import TeamV1Data from '@/assets/jsonData/team/TeamV1Data.json';
import SingleTeamV1 from './SingleTeamV1';

const TeamV2 = () => {
    return (
        <>
            <div className="team-style-one-area default-padding bottom-less overflow-hidden">
                <div className="container">
                    <div className="row">
                        {TeamV1Data.map(team =>
                            <div className="team-style-one col-lg-4 col-md-6 mb-40" key={team.id}>
                                <SingleTeamV1 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV2;