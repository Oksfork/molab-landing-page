interface DataType {
    id?: number;
    icon?: string;
    title?: string;
    description?: string;
}

const SingleOverviewV1 = ({ overview }: { overview: DataType }) => {
    const { icon, title, description } = overview;

    return (
        <>
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{description}</p>
        </>
    );
};

export default SingleOverviewV1;
