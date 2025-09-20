interface DataType {
    id?: number;
    icon?: string;
    title?: string;
    description?: string;
}

const SingleProcessV3 = ({ process }: { process: DataType }) => {
    const { icon, title, description } = process;

    return (
        <div className="process-style-three">
            <i className={icon} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default SingleProcessV3;
