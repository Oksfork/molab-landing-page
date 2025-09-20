import ToolsV1Data from "@/assets/jsonData/tools/ToolsV1Data.json"
import Image from "next/image";

interface DataType {
    sectionClass?: string
}

const ToolsV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`tools-integrations-area default-padding text-center ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading">
                                <h2 className="title">Powerful alone. <br /> <strong>Unstoppable</strong> together.</h2>
                                <p>
                                    Get more from your tools with Integrations. With over 1000+ integrations available, unify <br /> data from all your tools in Cascade. No more scrambling between tools. No more context switching.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="tools-integrations mt--20 mb-30" style={{ backgroundImage: 'url(/assets/img/shape/map.svg)' }}>
                                <ul className="tools-list">
                                    {ToolsV1Data.map(data =>
                                        <li key={data.id}>
                                            <div className="icon">
                                                <Image src={`/assets/img/icon/${data.logo}`} alt="Icon" width={256} height={256} />
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToolsV1;