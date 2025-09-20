import Image from 'next/image';

interface DataType {
    id?: number;
    text?: string;
    name: string;
    designation?: string;
    thumb?: string;
}

const SingleTestimonialV2 = ({ testimonial }: { testimonial: DataType }) => {
    const { text, name, designation, thumb } = testimonial;

    return (
        <div className="testimonial-style-two">
            <div className="item">
                <div className="content">
                    <p>“{text}”</p>
                </div>
                <div className="provider">
                    <div className="info">
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </div>
                    <div className="thumb">
                        <Image src={`/assets/img/team/${thumb}`} alt={name} width={80} height={80} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonialV2;
