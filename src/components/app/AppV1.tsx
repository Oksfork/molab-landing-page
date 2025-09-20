import SingleAppV1 from './SingleAppV1';
import AppV1Data from "@/assets/jsonData/app/AppV1Data.json";

const AppV1 = () => {
    return (
        <>
            <div className="app-type-area bg-cover bg-dark default-padding bottom-less"
                style={{ backgroundImage: 'url(/assets/img/shape/39.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                {AppV1Data.map(app =>
                                    <div className="col-lg-6 col-md-6 mb-30" key={app.id}>
                                        <SingleAppV1 app={app} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppV1;