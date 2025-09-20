import Image from 'next/image'

interface DataType {
    id?: number;
    testimonial?: string;
    name: string;
    position?: string;
    thumb?: string;
}

const SingleTestimonialV1 = ({ testimonial }: { testimonial: DataType }) => {
    const { name, position, thumb, testimonial: text } = testimonial;

    return (
        <div className="testimonial-style-one">
            <p>{text}</p>
            <div className="privider">
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt={name} width={60} height={60} />
                </div>
                <div className="info">
                    <h4>{name}</h4>
                    <span>{position}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonialV1;
