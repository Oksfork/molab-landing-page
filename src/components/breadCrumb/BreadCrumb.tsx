import Link from "next/link";

interface DataType {
    title?: string;
    breadCrumb?: string;
}

const BreadCrumb = ({ title, breadCrumb }: DataType) => {
    return (
        <>
            <div className="breadcrumb-area text-center bg-dark text-light" style={{ backgroundImage: "url(/assets/img/shape/42.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>{title ? title : "Error Page"}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li><Link href="/"><i className="fas fa-home"></i> Home</Link></li>
                                    <li className="active">{breadCrumb ? breadCrumb : "404"}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;