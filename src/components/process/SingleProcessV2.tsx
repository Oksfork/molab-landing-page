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
            <header>
                <h3>{id}. {title}</h3>
            </header>
            <p>{description}</p>
        </>
    );
};

export default SingleProcessV2;
