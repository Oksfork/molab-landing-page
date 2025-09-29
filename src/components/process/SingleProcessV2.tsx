interface DataType {
    id?: number;
    title?: string;
    description?: string;
    steps: string[];
}

const SingleProcessV2 = ({ process }: { process: DataType }) => {
    const { title, description, id } = process;

    return (
        <>
            <h4>{id}. {title}</h4>
            <p>{description}</p>
        </>
    );
};

export default SingleProcessV2;
