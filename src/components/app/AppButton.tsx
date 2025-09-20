import Link from "next/link";

interface DataType {
    id?: number;
    icon?: string;
    title?: string;
    platform?: string;
    siteLink: string;
}

const AppButton = ({ app }: { app: DataType }) => {
    const { icon, title, platform, siteLink } = app;

    return (
        <li>
            <Link href={siteLink} target="_blank" rel="noopener noreferrer">
                <div className="icon">
                    <i className={icon} />
                </div>
                <div className="info">
                    <h5>{title}</h5>
                    <h4>{platform}</h4>
                </div>
            </Link>
        </li>
    );
};

export default AppButton;
