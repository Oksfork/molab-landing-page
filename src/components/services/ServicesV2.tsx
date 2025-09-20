import ServicesV2Data from '@/assets/jsonData/services/ServicesV2Data.json';
import SingleServicesV2 from './SingleServicesV2';

const ServicesV2 = () => {
    return (
        <>
            <div className="services-style-two-area bg-gray default-padding bottom-less">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-5">
                            <div className="site-heading">
                                <h5 className="sub-heading">Easy Handling</h5>
                                <h2 className="title">Discover powerful features to boost productivity</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1">
                            <div className="row">
                                {ServicesV2Data.slice(0, 2).map(service =>
                                    <div className="services-style-two col-lg-6 col-md-6 mb-30" key={service.id}>
                                        <SingleServicesV2 service={service} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="row">
                                {ServicesV2Data.slice(2, 5).map(service =>
                                    <div className="services-style-two col-xl-4 col-lg-6 col-md-6 mb-30" key={service.id}>
                                        <SingleServicesV2 service={service} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2;