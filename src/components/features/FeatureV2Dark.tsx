import shape27 from '@/assets/img/shape/27.png';
import Image from 'next/image';
import FeatureV2Data from "@/assets/jsonData/feature/FeatureV2Data.json"
import SingleFeatureV2Dark from './SingleFeatureV2Dark';

interface DataType {
    hasBg?: boolean
}

const FeatureV2Dark = ({ hasBg }: DataType) => {
    return (
        <>
            <div className="feature-style-two-area shadow pt-120 pt-xs-50 pb-70 pb-md-90 pb-xs-20 bg-gray"
                style={{ backgroundImage: hasBg ? 'url(/assets/img/shape/26.png)' : "none" }}>
                <div className="shape-right-top">
                    <Image src={shape27} alt="Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-light text-center">
                                <h5 className="sub-heading">Included Capabilities</h5>
                                <h2 className="heading">Features designed for you</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {FeatureV2Data.map(feature =>
                            <div className="col-lg-6 col-md-6" key={feature.id}>
                                <SingleFeatureV2Dark feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV2Dark;