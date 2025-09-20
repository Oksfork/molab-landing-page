import FactV2Data from '@/assets/jsonData/fact/FactV2Data.json';
import SingleFactV2 from './SingleFactV2';

const FactV2 = () => {
    return (
        <>
            <div className="fun-factor-area default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fun-fact-style-one-lists">
                                {FactV2Data.map(fact =>
                                    <SingleFactV2 fact={fact} key={fact.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactV2;