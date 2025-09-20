import Counter from "../counter/Counter";

interface DataType {
    id?: number;
    value: number;
    operator?: string;
    description?: string;
}

const ProcessFact = ({ fact }: { fact: DataType }) => {
    const { value, operator, description } = fact;

    return (
        <div className="fun-fact">
            <div className="counter">
                <div className="timer">
                    <Counter end={value} />
                </div>
                <div className="operator">{operator}</div>
            </div>
            <span className="medium">{description}</span>
        </div>
    );
};

export default ProcessFact;
