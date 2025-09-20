interface DataType {
    id?: number;
    icon?: string;
    title?: string;
}

const SingleQualification = ({ qualification }: { qualification: DataType }) => {
    const { icon, title } = qualification;

    return (
        <div className="qualification-item">
            <i className={icon} />
            <h4>{title}</h4>
        </div>
    );
};

export default SingleQualification;
