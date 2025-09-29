"use client"
import shape44 from "@/assets/img/shape/44.png"
import Image from "next/image"
import Link from "next/link"

const BannerV4 = () => {

    return (
        <>
            <div className="banner-style-four-area text-center text-light" style={{ backgroundImage: 'url(/assets/img/shape/42.png)' }}>
                <div className="banner-style-four-shape">
                    <Image src={shape44} alt="Image Not Found" />
                </div>

                <div className="banner-style-four">
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="">
                                    <h3 className="title">
                                        El futuro de tu laboratorio está en la nube.
                                    </h3>
                                    <p>
                                        Con Molab.app trabajás mejor, más rápido y con control total.
                                    </p>
                                    <Link className="btn mt-25 btn-md btn-theme secondary animation" href="/contact-us">Prueba sin costo</Link>
                                    {/* <div className="service-review">
                                        <div className="rating-provider">
                                            <Image src={team9} alt="Image Not Found" />
                                            <Image src={team10} alt="Image Not Found" />
                                            <Image src={team11} alt="Image Not Found" />
                                            <Image src={teamV5} alt="Image Not Found" />
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className="illustration">
                                    <Image src={illustration3} alt="Image Not Found" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV4;