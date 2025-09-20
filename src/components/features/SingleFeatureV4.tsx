import Image from "next/image";

interface DataType {
    id?: number;
    thumb?: string;
    title: string;
    description?: string;
}

const SingleFeatureV4 = ({ feature }: { feature: DataType }) => {
    const { thumb, title, description } = feature;

    return (
        <div className="feature-style-four">
            <Image src={`/assets/img/icon/${thumb}`} alt={title} width={126} height={126} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default SingleFeatureV4;
