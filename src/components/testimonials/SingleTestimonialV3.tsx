import Image from "next/image";
import quoteBig from "@/assets/img/shape/quote-big.png"

interface DataType {
    id?: number;
    text?: string;
    name?: string;
    designation?: string;
}

const SingleTestimonialV3 = ({ testimonial }: { testimonial: DataType }) => {
    const { text, name, designation } = testimonial;

    return (
        <div className="testimonial-style-three">
            <div className="item">
                <div className="icon">
                    <Image src={quoteBig} alt="Image Not Found" />
                </div>
                <div className="content">
                    <p>“{text}”</p>
                </div>
                <div className="provider">
                    <div className="info">
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonialV3;
