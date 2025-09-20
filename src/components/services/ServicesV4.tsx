import ServicesV4Data from '@/assets/jsonData/services/ServicesV4Data.json';
import SingleServicesV4 from './SingleServicesV4';

const ServicesV4 = () => {
    return (
        <>
            <div className="text-light default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-heading">Our Services</h5>
                                <h2 className="heading">All Professional We’re Offering  Best Solutions &amp; Services </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="services-style-three-grid">
                                {ServicesV4Data.map(service =>
                                    <SingleServicesV4 service={service} key={service.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV4;