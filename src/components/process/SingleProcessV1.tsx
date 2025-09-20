import Image from "next/image";

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
}

const SingleProcessV1 = ({ process }: { process: DataType }) => {
    const { thumb, title } = process;

    return (
        <>
            <div className="process-style-one">
                <div className="inner-info">
                    <Image src={`/assets/img/icon/${thumb}`} alt="Icon" width={120} height={120} />
                    <h4>{title}</h4>
                </div>
            </div>
        </>
    );
};

export default SingleProcessV1;