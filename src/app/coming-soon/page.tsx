import ComingSoonContent from "@/components/comingSoon/ComingSoonContent";
import HeaderV11 from "@/components/header/HeaderV11";

export const metadata = {
    title: "Anaton - Coming Soon"
};


const ComingSoonPage = () => {
    return (
        <>
            <HeaderV11 />
            <ComingSoonContent />
        </>
    );
};

export default ComingSoonPage;