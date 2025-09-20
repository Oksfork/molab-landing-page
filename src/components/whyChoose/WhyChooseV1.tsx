import WhyChooseV1ListData from "@/assets/jsonData/whyChoose/WhyChooseV1ListData.json";
import WhyChooseV1List from "./WhyChooseV1List";
import WhyChooseV1ThumbData from "@/assets/jsonData/whyChoose/WhyChooseV1ThumbData.json";
import Animate from "../animation/Animate";
import Image from "next/image";

const WhyChooseV1 = () => {
    return (
        <>
            <div className="choose-us-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 choose-us-style-one">
                            <div className="choose-us-thumb">
                                {WhyChooseV1ThumbData.map(thumb =>
                                    <Animate key={thumb.id} className={thumb.animation} delay={thumb.delay} >
                                        <Image src={`/assets/img/illustration/${thumb.thumb}`} alt="illustration" width={800} height={500} />
                                    </Animate>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 choose-us-style-one">
                            <h2 className="title">An editor designed <br /> for contracts. </h2>
                            <ul className="list-double mt-50 mt-xs-30 mt-md-30">
                                {WhyChooseV1ListData.map(list =>
                                    <WhyChooseV1List list={list} key={list.id} />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;