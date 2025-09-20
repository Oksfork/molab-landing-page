import Image from 'next/image';
import Link from 'next/link';
import { PhotoView } from 'react-photo-view';

interface DataType {
    id?: number;
    title: string;
    category?: string;
    thumb?: string;
    icon?: string;
    categories: string[];
}

const SinglePortfolioV1 = ({ portfolio }: { portfolio: DataType }) => {
    const { title, thumb, categories, icon } = portfolio;

    return (
        <div className="portfolio-item">
            <div className="thumb">
                <Image src={`/assets/img/portfolio/${thumb}`} alt={title} width={600} height={600} />
                <PhotoView src={`/assets/img/portfolio/${thumb}`}>
                    <Link className="item popup-link" href="#" scroll={false}>
                        <i className={icon}></i>
                    </Link>
                </PhotoView>
            </div>
            <div className="info">
                <h4><Link href="#" scroll={false}>{title}</Link></h4>
                <div className="cat">
                    {categories.map((cat, index) => (
                        <span key={index}>{cat}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SinglePortfolioV1;
