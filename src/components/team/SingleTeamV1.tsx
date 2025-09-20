import Image from "next/image";
import SocialShareV2 from "../social/SocialShareV2";
import Link from "next/link";

interface DataType {
    id?: number;
    name: string;
    role?: string;
    thumb?: string;
}

const SingleTeamV1 = ({ team }: { team: DataType }) => {
    const { id, name, role, thumb } = team;

    return (
        <div className="item">
            <div className="thumb">
                <Link href={`/team-details/${id}`}>
                    <Image src={`/assets/img/team/${thumb}`} alt={name} width={800} height={900} />
                </Link>
                <div className="team-social">
                    <Link href="#" scroll={false}><i className="fas fa-comments-alt" /></Link>
                    <div className="share-link">
                        <i className="fas fa-share-alt" />
                        <ul>
                            <SocialShareV2 />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="content">
                    <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                    <span>{role}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleTeamV1;
