interface DataType {
    id?: number;
    icon?: string;
    label?: string;
    value?: string;
}

const SingleProjectInfo = ({ info }: { info: DataType }) => {
    const { icon, label, value } = info;

    return (
        <li>
            <div className="icon">
                <i className={icon} />
            </div>
            <div className="info">
                {label}: <span>{value}</span>
            </div>
        </li>
    );
};

export default SingleProjectInfo;
