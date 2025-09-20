import ProjectInfoData from '@/assets/jsonData/project/ProjectInfoData.json';
import SingleProjectInfo from './SingleProjectInfo';
import Image from 'next/image';
import ProjectV1Data from '@/assets/jsonData/project/ProjectV1Data.json'
import Link from 'next/link';

interface DataType {
    id?: number
    thumb?: string;
    thumbFull?: string;
    title?: string;
}

interface ProjectSingleProps {
    projectInfo?: DataType
    totalProject?: number
}

const ProjectDetailsContent = ({ projectInfo, totalProject }: ProjectSingleProps) => {
    const { id, title, thumbFull } = projectInfo || {};

    // Project Navigation 
    const currentId = id ? parseInt(id.toString(), 10) : 1;

    // Calculate the previous and next IDs dynamically
    const previousId = currentId === 1 ? totalProject : currentId - 1;
    const nextId = currentId === totalProject ? 1 : currentId + 1;

    // Get the previous and next project titles
    const previousProject = ProjectV1Data.find((project) => project.id === previousId);
    const nextProject = ProjectV1Data.find((project) => project.id === nextId);

    return (
        <>
            <div className="project-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-thumb">
                                <Image src={`/assets/img/portfolio/${thumbFull}`} alt="Thumb" width={1600} height={900} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="project-details-items">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="top-info">
                                    <div className="row">
                                        <div className="col-lg-5 order-lg-last">
                                            <ul className="gallery-project-basic-info">
                                                {ProjectInfoData.map(info =>
                                                    <SingleProjectInfo info={info} key={info.id} />
                                                )}
                                            </ul>
                                        </div>
                                        <div className="col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                            <h2>{title}</h2>
                                            <p>
                                                Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoqu. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-details mt-40">
                                    <h3>The Challenge Of Project</h3>
                                    <p>
                                        Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque ante aenean elementum curae malesuada ullamcorper. vivamus nonummy nisl posuere rutrum
                                    </p>
                                    <ul className="check-list mt-40 mb-30">
                                        <li>
                                            <h3>Mobile Optimization</h3>
                                            <p>
                                                Tempor nonummy metus lobortis. Sociis velit etiam, Configurations dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum potenti nostra aenean lacinia varius.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>Marketing Automation</h3>
                                            <p>
                                                Jonery nonummy metus lobortis. Sociis velit etiam, Configurations dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum .
                                            </p>
                                        </li>
                                    </ul>
                                    <p>
                                        Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.  Facilisis inceptos nec, potenti nostra aenean lacinia varius semper ant nullam nulla primis placerat facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque ante aenean elementum curae malesuada ullamcorper.
                                    </p>
                                    <div className="row mt-50">
                                        <div className="col-lg-6 col-md-6">
                                            <Link href={`/project-details/${previousId}`}>
                                                <Image src={`/assets/img/portfolio/${previousProject?.thumb}`} alt="Thumb" width={800} height={600} />
                                            </Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <Link href={`/project-details/${nextId}`}>
                                                <Image src={`/assets/img/portfolio/${nextProject?.thumb}`} alt="Thumb" width={800} height={600} />
                                            </Link>
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

export default ProjectDetailsContent;