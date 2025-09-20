interface DataType {
    title?: string;
    description?: string;
}

const WhyChooseV1List = ({ list }: { list: DataType }) => {
    const { title, description } = list;

    return (
        <li>
            <div className="content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </li>
    );
};

export default WhyChooseV1List;