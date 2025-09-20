"use client";
import usePortfolioIsotope from '@/hooks/usePortfolioIsotope';
import PortfolioV1Data from '@/assets/jsonData/portfolio/PortfolioV1Data.json';
import SinglePortfolioV1 from './SinglePortfolioV1';
import { PhotoProvider } from 'react-photo-view';

interface DataType {
    sectionClass?: string
}

const PortfolioV1 = ({ sectionClass }: DataType) => {

    const { gridRef, activeFilter, handleFilter } = usePortfolioIsotope();

    return (
        <>
            <div id="portfolio" className={`portfolio-style-two-area default-padding ${sectionClass ? sectionClass : ""}`}>

                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-xl-12 text-center">
                                <div className="mix-item-menu">
                                    <button className={activeFilter == '*' ? 'active' : ''} onClick={() => handleFilter('*')}>All</button>
                                    <button className={activeFilter == '.development' ? 'active' : ''} onClick={() => handleFilter('.development')}>Development</button>
                                    <button className={activeFilter == '.design' ? 'active' : ''} onClick={() => handleFilter('.design')}>Design</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="portfolio-style-two-items">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="magnific-mix-gallery masonary">
                                    <div id="portfolio-grid" className="portfolio-items colums-2" ref={gridRef}>
                                        <PhotoProvider
                                            speed={() => 800}
                                            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                        >
                                            {PortfolioV1Data.map(portfolio =>
                                                <div className={`pf-item  grid-item ${portfolio.category}`} key={portfolio.id}>
                                                    <SinglePortfolioV1 portfolio={portfolio} />
                                                </div>
                                            )}
                                        </PhotoProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioV1;