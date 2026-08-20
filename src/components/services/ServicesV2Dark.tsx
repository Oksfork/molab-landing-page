import ServicesV2Data from '@/assets/jsonData/services/ServicesV2Data.json';
import SingleServicesV2Dark from './SingleServicesV2Dark';

const ServicesV2Dark = () => {
    return (
            <section 
                className="services-style-two-area dark-mode" 
                aria-label="Ventajas de Molab.app - Software de gestión para laboratorios dentales">
                <div className="container default-padding bottom-less">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-8">
                            <div className="site-heading services-header-dark">
                                <h2 className="title">
                                    Lo que el laboratorio necesita, en un{" "}
                                    <span className="text-gradient">solo sistema</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                {ServicesV2Data.map((service, index) => (
                                    <div className="col-lg-4 col-md-6 col-12 mb-3" key={service.id}>
                                        <SingleServicesV2Dark service={service} index={index} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default ServicesV2Dark;