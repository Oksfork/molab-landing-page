import PerformanceV1Data from "@/assets/jsonData/performance/PerformanceV1Data.json"
import Link from "next/link";

const PerformanceV1 = () => {
    return (
        <>
            <div className="performance-area default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">Performance</h4>
                                <h2 className="heading">Check my performance</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="performance-items">
                                {PerformanceV1Data.map(data =>
                                    <div className="performance-item" key={data.id}>
                                        <Link href={data.link} target="_blank">
                                            <i className={data.icon} /> {data.name}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PerformanceV1;