interface DataType {
    content: string[];
}

const SingleTechnology = ({ data }: { data: DataType }) => {
    const { content } = data;

    return (
        <div className="technology-content">
            <ul>
                {content.map((item, index) => (
                    <li key={index}>
                        <h4>{item}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SingleTechnology;
