import Counter from "../counter/Counter";

interface DataType {
    sectionClass?: string
    faqThumb?: string
}

const FaqV2 = ({ sectionClass, faqThumb }: DataType) => {
    return (
        <>
            <div className={`${sectionClass ? sectionClass : ""}`}
                style={{ backgroundImage: `url(/assets/img/shape/${faqThumb})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 faq-style-two">
                            <h2 className="title">Frequently asked questions from our social community</h2>
                            <div className="user-fun-fact mt-35">
                                <div className="fun-fact secondary">
                                    <div className="content">
                                        <div className="counter">
                                            <div className="timer"><Counter end={276} /></div>
                                            <div className="operator">K</div>
                                        </div>
                                        <span className="medium">Active user from the community</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="faq-style-two mt--20">
                                <div className="accordion" id="faqAccordion">

                                    {/* Single Accordion */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Where can I get software help?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single Accordion */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How much does data software costs?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single Accordion */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What kind of data is needed for software?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                                                </p>
                                            </div>
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

export default FaqV2;