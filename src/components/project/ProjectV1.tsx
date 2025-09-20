import ProjectV1Data from '@/assets/jsonData/project/ProjectV1Data.json';
import SingleProjectV1 from './SingleProjectV1';

const ProjectV1 = () => {
    return (
        <>
            <div className="gallery-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 gallery-content">
                            <div className="magnific-mix-gallery masonary">
                                <div id="gallery-masonary" className="gallery-items colums-3">
                                    {ProjectV1Data.map(project =>
                                        <SingleProjectV1 project={project} key={project.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV1;