import OverviewV1Data from "@/assets/jsonData/overview/OverviewV1Data.json"
import SingleOverviewV1 from "./SingleOverviewV1";

const OverviewV1 = () => {
    return (
        <>
            <div className="overview-area default-padding" style={{ backgroundImage: 'url(/assets/img/illustration/4.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2 className="heading">What amazing content will you <br /> create with AI?</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="service-overview-tab-items">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1 text-center">
                                <div className="nav nav-tabs service-overview-tab-navs" id="nav-tab" role="tablist">

                                    <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                        Content Writting
                                    </button>

                                    <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                        Problem solving
                                    </button>

                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-2">
                                <div className="tab-content service-overview-tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                                        <div className="row align-center">

                                            {OverviewV1Data.contentWriting.map(overview =>
                                                <div className="col-md-6 service-overview-single" key={overview.id}>
                                                    <SingleOverviewV1 overview={overview} />
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                                        <div className="row align-center">

                                            {OverviewV1Data.problemSolving.map(overview =>
                                                <div className="col-md-6 service-overview-single" key={overview.id}>
                                                    <SingleOverviewV1 overview={overview} />
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverviewV1;