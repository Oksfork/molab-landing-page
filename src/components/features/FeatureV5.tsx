import Image from 'next/image';
import webThumb from '@/assets/img/icon/web.png';
import conversation from '@/assets/img/icon/conversation.png';
import messenger2 from '@/assets/img/icon/messenger-2.png';
import Link from 'next/link';

const FeatureV5 = () => {
    return (
        <>
            <div className="feature-style-five-area default-padding overflow-hidden">
                <div className="container">
                    <div className="left-heading mb-60">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="sub-heading">AI Powered</h4>
                                <h2 className="title">Our powerfull chatbot solutions, Stay connected</h2>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <p>
                                    Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse.
                                </p>
                                <Link className="btn btn-md circle btn-dark animation mt-15" href="/contact-us">Get Started <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="feaute-style-five-items">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="nav nav-tabs bot-feature-tab-navs" id="nav-tabs" role="tablist">
                                    <button className="nav-link active" id="nav-id-5" data-bs-toggle="tab" data-bs-target="#tab5" type="button" role="tab" aria-controls="tab5" aria-selected="true">
                                        <strong>Website</strong>
                                        These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                    </button>
                                    <button className="nav-link" id="nav-id-6" data-bs-toggle="tab" data-bs-target="#tab6" type="button" role="tab" aria-controls="tab6" aria-selected="false">
                                        <strong>Live Chat</strong>
                                        These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                    </button>
                                    <button className="nav-link" id="nav-id-7" data-bs-toggle="tab" data-bs-target="#tab7" type="button" role="tab" aria-controls="tab7" aria-selected="false">
                                        <strong>Messenger</strong>
                                        These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-7 offset-lg-1">
                                <div className="tab-content bot-feature-tab-content" id="nav-tabContents">

                                    <div className="tab-pane fade show active" id="tab5" role="tabpanel" aria-labelledby="nav-id-5">
                                        <div className="top">
                                            <Image src={webThumb} alt="Image not Found" />
                                            <h4>Website Integration</h4>
                                        </div>
                                        <p>
                                            Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves. General few civilly amiable pleased account carried
                                        </p>
                                        <ul className="link-btn">
                                            <li>
                                                <Link href="#" scroll={false}>WooCommerce</Link>
                                            </li>
                                            <li>
                                                <Link href="#" scroll={false}>Business</Link>
                                            </li>
                                            <li>
                                                <Link href="#" scroll={false}>Landing</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-pane fade" id="tab6" role="tabpanel" aria-labelledby="nav-id-6">
                                        <div className="top">
                                            <Image src={conversation} alt="Image not Found" />
                                            <h4>B2B live chat</h4>
                                        </div>
                                        <p>
                                            Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves. General few civilly amiable pleased account carried
                                        </p>
                                        <ul className="link-btn">
                                            <li>
                                                <Link href="#" scroll={false}>Customer</Link>
                                            </li>
                                            <li>
                                                <Link href="#" scroll={false}>Support</Link>
                                            </li>
                                            <li>
                                                <Link href="#" scroll={false}>Phone Call</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-pane fade" id="tab7" role="tabpanel" aria-labelledby="nav-id-7">
                                        <div className="top">
                                            <Image src={messenger2} alt="Image not Found" />
                                            <h4>Facilities of Messenger</h4>
                                        </div>
                                        <p>
                                            Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves. General few civilly amiable pleased account carried
                                        </p>
                                        <ul className="link-btn">
                                            <li>
                                                <Link href="#" scroll={false}>Video Call</Link>
                                            </li>
                                            <li>
                                                <Link href="#" scroll={false}>Data Transfer</Link>
                                            </li>
                                            <li>
                                                <Link href="#" scroll={false}>Landing</Link>
                                            </li>
                                        </ul>
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

export default FeatureV5;