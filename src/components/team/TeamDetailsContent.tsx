import QualificationData from "@/assets/jsonData/qualification/QualificationData.json"
import SkillProgressData from "@/assets/jsonData//progress/SkillProgressData.json"
import SingleQualification from '../qualification/SingleQualification';
import SkillProgress from '../progress/SkillProgress';
import SocialShareV2 from "../social/SocialShareV2";
import Link from "next/link";
import Image from "next/image";

interface DataType {
    name: string;
    role?: string;
    thumb?: string;
    memberInfo?: string;
    eMail?: string;
    contactNumber?: string;
}

const TeamDetailsContent = ({ teamInfo }: { teamInfo: DataType }) => {
    const { name, role, thumb, memberInfo, eMail, contactNumber } = teamInfo;

    return (
        <>
            <div className="team-single-area default-padding-top">
                <div className="container">
                    <div className="team-content-top">
                        <div className="row">
                            <div className="col-lg-6 left-info">
                                <div className="thumb">
                                    <Image src={`/assets/img/team/${thumb}`} alt={name} width={800} height={900} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team-right-info">
                                    <h2>{name}</h2>
                                    <span>{role}</span>
                                    <p>{memberInfo}</p>
                                    <ul>
                                        <li>
                                            <strong>Email:</strong>
                                            <a href={`mailto:${eMail}`}>{eMail}</a>
                                        </li>
                                        <li>
                                            <strong>Phone:</strong>
                                            <a href={`tel:${contactNumber}`}>{contactNumber}</a>
                                        </li>
                                    </ul>
                                    <div className="social">
                                        <Link className="btn circle btn-sm btn-gradient animation" href="/contact-us">Contact Me</Link>
                                        <div className="share-link">
                                            <i className="fas fa-share-alt" />
                                            <ul>
                                                <SocialShareV2 />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-info default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <h2>Qualifications</h2>
                                <div className="qualification-grid">
                                    {QualificationData.map(qualification =>
                                        <SingleQualification qualification={qualification} key={qualification.id} />
                                    )}
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="skill-items pl-50 pl-md-0 pl-xs-0 mt-md-50 mt-xs-30">
                                    <h2>Personal Skills</h2>
                                    {SkillProgressData.map(skill =>
                                        <SkillProgress skill={skill} key={skill.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetailsContent;