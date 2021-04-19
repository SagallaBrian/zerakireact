function Section2(props) {
    return (
        <div>
            <div id="picdiv" className="container-fluid">
                <div className="row pt-3 pb-1">
                    <div className="col-4">
                        <img src={props.mydata.stdimg} alt="img" className="img-fluid rounded-circle"  />
                    </div>
                    <div className="col-8">
                        <h5 >{props.mydata.stdnam}</h5>
                        <h6 className="small">ID: {props.mydata.stdid}</h6>
                        <p className="small">Form: {props.mydata.stdform}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;