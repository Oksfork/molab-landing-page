import Counter from '../counter/Counter';

interface DataType {
    id?: number;
    count: number;
    operator?: string;
    label?: string;
}

const SingleFactV2: React.FC<{ fact: DataType }> = ({ fact }) => {
    const { count, operator, label } = fact;

    return (
        <div className="fun-fact">
            <div className="counter">
                <div className="timer">
                    <Counter end={count} />
                </div>
                <div className="operator">{operator}</div>
            </div>
            <span className="medium">{label}</span>
        </div>
    );
};

export default SingleFactV2;
