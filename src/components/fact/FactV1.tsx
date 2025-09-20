import FactV1Data from '@/assets/jsonData/fact/FactV1Data.json';
import SingleFactV1 from './SingleFactV1';

const FactV1 = () => {
    return (
        <>
            <div className="fun-factor-area default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="fun-fact-style-two-lists">
                                {FactV1Data.map(fact =>
                                    <SingleFactV1 fact={fact} key={fact.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactV1;