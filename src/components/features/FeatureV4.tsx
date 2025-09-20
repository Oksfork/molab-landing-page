import FeatureV4Data from '@/assets/jsonData/feature/FeatureV4Data.json';
import SingleFeatureV4 from './SingleFeatureV4';
import shape49 from "@/assets/img/shape/49.png"
import Image from 'next/image';

const FeatureV4 = () => {
    return (
        <>
            <div className="feature-style-four-area default-padding bottom-less overflow-hidden">
                <div className="container">
                    <div className="site-heading text-center">
                        <div className="row">
                            <div className="col-xl-12">
                                <h4 className="bg-text" style={{ backgroundImage: 'url(/assets/img/shape/banner-7.jpg)' }}>Trending <br /> <b>App</b></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="feature-style-four-items">
                        <div className="shape-left-top">
                            <Image src={shape49} alt="Image not Found" />
                        </div>
                        <div className="row">
                            {FeatureV4Data.map(feature =>
                                <div className="col-lg-4 col-md-6 mb-30" key={feature.id}>
                                    <SingleFeatureV4 feature={feature} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV4;