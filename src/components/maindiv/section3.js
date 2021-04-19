function Section3(props) {
    return (
        <div>
            <div id="ovarllper">
                <div className="pt-3 pb-2 px-3 bg-light rounded-pill">
                    <h6 className="f text-primary">
                        Overall Performance
                    </h6>
                </div>
                <div className="p-3">
                    <div className="row">
                        <div className="col-md-5">
                            <p>Mean Grade: &nbsp;&nbsp; {props.passda.meangrade}</p>
                        </div>
                        <div className="col-md-7">
                            <p>Average Score: &nbsp;&nbsp; {props.passda.meanscore}
                                &nbsp;&nbsp;&nbsp;
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <p>
                                Stream Position: &nbsp;&nbsp; {props.passda.streamp.position} / 
                                {props.passda.streamp.position_out_of}
                                &nbsp;&nbsp;&nbsp;
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div className="col-md-7">

                            <p>
                                Overall Position: &nbsp;&nbsp; {props.passda.overalp.position}  / 
                                {props.passda.overalp.position_out_of}
                                &nbsp;&nbsp;&nbsp;
                                <i className="fa fa-arrow-down text-danger" aria-hidden="true"></i>
                            </p>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Section3;