import NotFoundContent from "@/components/notFound/NotFoundContent";
import PagePatternWrapper from "@/components/layout/PagePatternWrapper";
import HeaderV10 from "@/components/header/HeaderV10";
import FooterV1 from "@/components/footer/FooterV1";
import DarkClass from "@/components/classes/DarkClass";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - Página no encontrada | Molab.app",
    description: "La página que buscas no existe. Regresa al inicio de Molab.app, tu software de gestión para laboratorios dentales.",
    robots: {
        index: false,
        follow: false,
    },
};

const NotFoundPage = () => {
    return (
        <PagePatternWrapper>
            <HeaderV10 sectionClass="dark"></HeaderV10>
            <main>
                <NotFoundContent />
            </main>
            <FooterV1 logoColor="light" />
            <DarkClass />
        </PagePatternWrapper>
    );
};

export default NotFoundPage;