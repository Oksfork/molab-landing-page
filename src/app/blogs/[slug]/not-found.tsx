import NotFoundContent from "@/components/notFound/NotFoundContent";
import PagePatternWrapper from "@/components/layout/PagePatternWrapper";
import HeaderV10 from "@/components/header/HeaderV10";
import FooterV1 from "@/components/footer/FooterV1";
import DarkClass from "@/components/classes/DarkClass";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog no encontrado | Molab.app",
    description: "El artículo que buscas no existe o no está disponible. Regresa a la lista de blogs de Molab.app.",
    robots: {
        index: false,
        follow: false,
    },
};

const BlogNotFound = () => {
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

export default BlogNotFound;


