import BannerV3 from "@/components/banner/BannerV3";
import BannerV4 from "@/components/banner/BannerV4";
import DarkClass from "@/components/classes/DarkClass";
import FeatureV1 from "@/components/features/FeatureV1";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV10 from "@/components/header/HeaderV10";
import PriceV3 from "@/components/pricing/PriceV3";
import ProcessV2 from "@/components/process/ProcessV2";
import ServicesV2Dark from "@/components/services/ServicesV2Dark";
import PagePatternWrapper from "@/components/layout/PagePatternWrapper";

export const metadata = {
    title: "Molab.app - Software de Gestión para Laboratorios Dentales",
    description: "Software en la nube para gestión integral de laboratorios dentales. Control de clientes, órdenes, pagos, liquidaciones y trazabilidad completa."
  };

const Home3Dark = () => {
    return (
        <PagePatternWrapper>
            <HeaderV10 sectionClass="dark"></HeaderV10>
            <BannerV3 hasBg={false}></BannerV3>
            <FeatureV1 />
            <ProcessV2 />
            <ServicesV2Dark></ServicesV2Dark>
            <PriceV3 />
            <BannerV4 />
            <FooterV1 logoColor="light" />
            <DarkClass />
        </PagePatternWrapper>
    );
};

export default Home3Dark;