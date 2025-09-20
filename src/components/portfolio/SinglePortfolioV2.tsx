import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    title: string;
    category?: string;
    thumb?: string;
}

const SinglePortfolioV2 = ({ portfolio }: { portfolio: DataType }) => {
    const { id, title, category, thumb } = portfolio;

    return (
        <div className="portfolio-style-one">
            <div className="thumb">
                <Image
                    src={`/assets/img/portfolio/${thumb}`}
                    alt={title}
                    width={800}
                    height={800}
                />
            </div>
            <div className="info">
                <div className="left">
                    <div className="tags">
                        <Link href="#" scroll={false}>{category}</Link>
                    </div>
                    <h4><Link href={`/project-details/${id}`} scroll={false}>{title}</Link></h4>
                </div>
                <div className="right">
                    <Link href={`/project-details/${id}`} className="link"><i className="fas fa-arrow-right" /></Link>
                </div>
            </div>
        </div>
    );
};

export default SinglePortfolioV2;
