import ProcessV3Data from '@/assets/jsonData/process/ProcessV3Data.json';
import SingleProcessV3 from './SingleProcessV3';

const ProcessV3 = () => {
    return (
        <>
            <div className="process-style-three-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-heading">WORKING PROCESS</h5>
                                <h2 className="heading">How does this App Work?</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="app-process-items">
                                {ProcessV3Data.map(process =>
                                    <SingleProcessV3 process={process} key={process.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV3;