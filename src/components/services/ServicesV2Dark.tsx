import ServicesV2Data from '@/assets/jsonData/services/ServicesV2Data.json';
import SingleServicesV2Dark from './SingleServicesV2Dark';

const ServicesV2Dark = () => {
    return (
            <section className="services-style-two-area dark-mode">
                <div className="container default-padding bottom-less">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-8">
                            <div className="site-heading services-header-dark">
                                <h2 className="title">
                                    Descubrí las poderosas ventajas para 
                                    <span className="text-gradient">
                                        {' '}
                                    aumentar tu productividad
                                    </span>
                                </h2>
                                <span className="description">
                                    Una suite completa de herramientas diseñadas para optimizar la gestión de tu laboratorio con tecnología de vanguardia.
                                </span>
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