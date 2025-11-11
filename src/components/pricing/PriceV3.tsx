"use client";

interface FeatureSection {
  icon: string;
  iconClass: string;
  title: string;
  features: string[];
}

const PriceV3 = () => {
  const featureSections: FeatureSection[] = [
    {
      icon: "fas fa-clipboard-list",
      iconClass: "fa-clipboard-list",
      title: "Gestión de Órdenes de Trabajo",
      features: [
        "Controlá cada orden desde la recepción hasta la entrega",
        "Visualizá fechas y estados centralizados",
        "Imprimí tickets para trazabilidad"
      ]
    },
    {
      icon: "fas fa-users",
      iconClass: "fa-users",
      title: "Clientes, Profesionales y Pacientes",
      features: [
        "Gestioná información completa de clientes y profesionales",
        "Historial clínico vinculado a cada trabajo"
      ]
    },
    {
      icon: "fas fa-money-bill-wave",
      iconClass: "fa-money-bill-wave",
      title: "Pagos y Liquidaciones",
      features: [
        "Control de movimientos económicos",
        "Liquidaciones automáticas y exportación a PDF/Excel"
      ]
    },
    {
      icon: "fas fa-chart-bar",
      iconClass: "fa-chart-bar",
      title: "Reportes y Control",
      features: [
        "Métricas clave: órdenes, trabajos, pagos pendientes",
        "Exportá reportes para análisis o presentación"
      ]
    },
    {
      icon: "fas fa-shield-alt",
      iconClass: "fa-shield-alt",
      title: "Tecnología y Seguridad",
      features: [
        "Instancia aislada por laboratorio",
        "Acceso web desde cualquier dispositivo"
      ]
    },
    {
      icon: "fas fa-sync-alt",
      iconClass: "fa-sync-alt",
      title: "Automatización",
      features: [
        "Impresoras térmicas y lectores de código de barras",
        "Módulos personalizados según necesidades"
      ]
    }
  ];

  

  return (
    <section 
      className="pricing-style-three-area price-v3-section overflow-hidden" 
      aria-label="Características de Molab.app - Software de gestión para laboratorios dentales"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading secondary text-center mb-50">
              <h2 className="heading text-light">
                Todo lo que necesitás para{' '}
                <span className="text-gradient">
                  gestionar tu laboratorio
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {featureSections.map((section, index) => (
            <div 
              key={index} 
              className="col-lg-4 col-md-6"
            >
              <div className="price-v3-glass-card h-100">
                <div className="price-v3-top-glow" />

                <div className="price-v3-header-row">
                  <div className="price-v3-icon-container">
                    <i className={section.icon} />
                  </div>
                  <h3 className="price-v3-feature-title text-light">
                    {section.title}
                  </h3>
                </div>

                <ul className="price-v3-feature-list">
                  {section.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <div className="price-v3-check-box">
                        <i className="fas fa-check" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceV3;
