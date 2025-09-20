import shape27 from '@/assets/img/shape/27.png';
import Image from 'next/image';
import FeatureV2Data from "@/assets/jsonData/feature/FeatureV2Data.json"
import SingleFeatureV2 from './SingleFeatureV2';

interface DataType {
    hasBg?: boolean
}

const FeatureV2 = ({ hasBg }: DataType) => {
    return (
        <>
            <div className="feature-style-two-area shadow pt-120 pt-xs-50 pb-70 pb-md-90 pb-xs-20 bg-gray"
                style={{ backgroundImage: hasBg ? 'url(/assets/img/shape/26.png)' : "none" }}>
                <div className="shape-right-top">
                    <Image src={shape27} alt="Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="site-heading text-light text-center">
                                <h5 className="sub-heading">Beneficios</h5>
                                <h2 className="heading">Pensados en la comodidad de tu laboratorio</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {FeatureV2Data.map(feature =>
                            <div className="col-lg-6 col-md-6" key={feature.id}>
                                <SingleFeatureV2 feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV2;