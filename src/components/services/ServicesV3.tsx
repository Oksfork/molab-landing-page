import ServicesV3Data from "@/assets/jsonData/services/ServicesV3Data.json"
import SingleServicesV3 from "./SingleServicesV3";

const ServicesV3 = () => {
    return (
        <>
            <div id="services" className="services-style-three-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">¿Cómo Funciona?</h4>
                                <h2 className="heading">Sencillo y funcional en paso a paso</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ServicesV3Data.map(service =>
                            <div className="col-lg-3 col-md-3 mb-30" key={service.id}>
                                <SingleServicesV3 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV3;