interface DataType {
    id?: number;
    title?: string;
    description?: string;
    steps: string[];
}

const SingleProcessV2 = ({ process }: { process: DataType }) => {
    const { title, description, steps } = process;

    return (
        <>
            <h4>{title}</h4>
            <p>{description}</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul >
        </>
    );
};

export default SingleProcessV2;
