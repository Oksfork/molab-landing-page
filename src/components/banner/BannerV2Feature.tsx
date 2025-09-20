interface DataType {
    id?: number;
    icon?: string;
    category?: string;
    title?: string;
}

const BannerV2Feature = ({ feature }: { feature: DataType }) => {
    const { icon, category, title } = feature;

    return (
        <>
            <li>
                <div className="icon">
                    <i className={icon} />
                </div>
                <div className="info">
                    <span>{category}</span>
                    <h4>{title}</h4>
                </div>
            </li>
        </>
    );
};

export default BannerV2Feature;