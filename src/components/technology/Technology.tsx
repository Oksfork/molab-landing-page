import illustration11 from '@/assets/img/illustration/11.png';
import Image from 'next/image';
import TechnologyData from "@/assets/jsonData/technology/TechnologyData.json"
import SingleTechnology from './SingleTechnology';

const Technology = () => {
    return (
        <>
            <div className="technology-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="technology-items">

                                {TechnologyData.slice(0, 1).map(data =>
                                    <SingleTechnology data={data} key={data.id} />
                                )}

                                <div className="technology-thumb text-center">
                                    <Image src={illustration11} alt="Image not Found" />
                                </div>

                                {TechnologyData.slice(1, 2).map(data =>
                                    <SingleTechnology data={data} key={data.id} />
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Technology;