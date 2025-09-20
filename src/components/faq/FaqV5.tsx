const FaqV5 = () => {
    return (
        <>
            <div className="faq-area bg-cover text-light pt-250 pt-xs-50 pt-md-120" style={{ backgroundImage: 'url(/assets/img/banner/5.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-5">
                            <div className="faq-style-one">
                                <div className="heading">
                                    <h2 className="title"> Want to ask <br /> something from us?</h2>
                                </div>
                                <div className="faq-style-one-content">
                                    <div className="tab-content faq-tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
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

                                        {/* Tab 2*/}
                                        <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                                            <div className="accordion" id="faqAccordionTwo">

                                                {/* Single Accordion */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                            What does the guarantee cover?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#faqAccordionTwo">
                                                        <div className="accordion-body">
                                                            <p>
                                                                Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Single Accordion */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFive">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            How might I get in touch with you?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordionTwo">
                                                        <div className="accordion-body">
                                                            <p>
                                                                Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Single Accordion */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingSix">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                            Where can I find you?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordionTwo">
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
                                    <div className="nav nav-tabs faq-tab-navs" id="nav-tab" role="tablist">

                                        {/* Accordion Button */}
                                        <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                            <i className="flaticon-portfolio" />
                                            Functional FAQ
                                        </button>

                                        {/* Accordion Button */}
                                        <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                            <i className="flaticon-megaphone" />
                                            Support FAQ
                                        </button>

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

export default FaqV5;