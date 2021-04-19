function Section3(props) {
    return (
        <div id="icons" className="container-fluid">
            <div className="p-2"></div>
            <a href={'k'}>
                <div className="row pt-4">
                    <div className="col-2">
                        <h5> <i className="fa fa-envelope-open" aria-hidden="true"></i></h5>
                    </div>
                    <div className="col-10">
                        <h6 className="font-weight-normal">Progress Report</h6>
                    </div>
                </div>
            </a>
            <a href={'k'}>
                <div className="row pt-4">
                    <div className="col-2">
                        <h5> <i className="fa fa-calendar" aria-hidden="true"></i> </h5>
                    </div>
                    <div className="col-10">
                        <h6 className="font-weight-normal">School Calender</h6>
                    </div>
                </div>
            </a>
            <a href={'k'}>
                <div className="row pt-4">
                    <div className="col-2">
                        <h5><i className="fa fa-line-chart" aria-hidden="true"></i> </h5>
                    </div>
                    <div className="col-10">
                        <h6 className="font-weight-normal">Statistics </h6>
                    </div>
                </div>
            </a>

        </div>
    );
}

export default Section3;