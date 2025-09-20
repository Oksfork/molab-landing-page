import Counter from "../counter/Counter";

interface DataType {
    value: number;
    operator?: string;
    icon?: string;
    label?: string;
}

const SingleFactV1 = ({ fact }: { fact: DataType }) => {
    const { value, operator, icon, label } = fact;

    return (
        <div className="fun-fact">
            <div className="counter">
                <div className="timer"><Counter end={value} /></div>
                <div className="operator">{operator}</div>
            </div>
            <span className="medium">
                <i className={icon} /> {label}
            </span>
        </div>
    );
};

export default SingleFactV1;
