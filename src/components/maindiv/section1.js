function Section1(props) {
    return (
        <div>
            <div className="p-2 d-block d-lg-none">
                <button className="btn text-" id="brisidebtn">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
            </div>
            <div className="py-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-white">
                        <li className="breadcrumb-item"><a href={'k'}>{props.passda.termyear}</a></li>
                        <li className="breadcrumb-item"><a href={'k'}>{props.passda.stdclas}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{props.passda.stddcat}</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default Section1;