import TeamV1Data from "@/assets/jsonData/team/TeamV1Data.json"
import SingleTeamV1 from "./SingleTeamV1";

interface DataType {
    sectionClass?: string
}

const TeamV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`team-style-one-area overflow-hidden ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="team-box default-padding bottom-less pr-50 pr-md-0 pr-xs-0">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-light text-center">
                                    <h5 className="sub-heading">Team Members</h5>
                                    <h2 className="title">Meet our professional</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {TeamV1Data.slice(0, 3).map(team =>
                                <div className="team-style-one col-lg-4 col-md-6 mb-40" key={team.id}>
                                    <SingleTeamV1 team={team} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV1;