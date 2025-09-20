import ServicesV2Data from '@/assets/jsonData/services/ServicesV2Data.json';
import SingleServicesV2Dark from './SingleServicesV2Dark';

const ServicesV2Dark = () => {
    return (
        <>
            <div className="services-style-two-area dark-mode">
                <div className="container default-padding bottom-less">
                    {/* Header Section with Cards alongside */}
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <div className="site-heading services-header-dark">
                                <h5 className="sub-heading">Características principales</h5>
                                <h2 className="title">
                                    Descubre las poderosas ventajas para aumentar tu productividad
                                </h2>
                                <span className="description">
                                    Una suite completa de herramientas diseñadas para optimizar la gestión de tu laboratorio con tecnología de vanguardia.
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                {/* Primeras 2 cards al lado del texto */}
                                {ServicesV2Data.slice(0, 2).map((service, index) => (
                                    <div className="col-12 mb-3" key={service.id}>
                                        <SingleServicesV2Dark service={service} index={index} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Resto de las cards en grid */}
                    <div className="row justify-content-center">
                        {ServicesV2Data.slice(2, ServicesV2Data.length).map((service, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={service.id}>
                                <div className="services-grid-item">
                                    <SingleServicesV2Dark service={service} index={index + 2} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2Dark;