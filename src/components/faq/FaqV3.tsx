"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const FaqV3 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="faq-style-three-area bg-gray bg-cover default-padding" style={{ backgroundImage: 'url(/assets/img/shape/banner-5.jpg)' }}>
                <Link href="#" scroll={false} className="video-play-button-standard popup-youtube" onClick={() => setOpen(true)}>
                    <i className="fas fa-play" />
                    <div className="effect" />
                </Link>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="faq-style-three">
                                <div className="heading">
                                    <h2 className="title"> Want to ask <br /> something from us?</h2>
                                </div>
                                <div className="accordion mt--20" id="faqAccordionThree">

                                    {/* Single Accordion */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                What does the guarantee cover?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#faqAccordionThree">
                                            <div className="accordion-body">
                                                <p>
                                                    Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot.
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
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordionThree">
                                            <div className="accordion-body">
                                                <p>
                                                    Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot.
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
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordionThree">
                                            <div className="accordion-body">
                                                <p>
                                                    Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot.
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

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="nh1b6Lq5h20" onClose={() => setOpen(false)} />
        </>
    );
};

export default FaqV3;