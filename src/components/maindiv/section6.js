function Section6(props) {

    return (
        <div>
            <div id="offremak" className="py-5">
                <div className="pt-3 pb-2 px-3 bg-light rounded-pill">
                    <h6 className="font-weight-normal text-primary">
                        Official Remarks
                    </h6>

                </div>
                <div className="p-3">
                    <p>
                        Class Teacher's Remarks: &nbsp;&nbsp;&nbsp;&nbsp;
                        <i><span className="text-success">{props.passda.clasteacher}</span></i>
                    </p>
                    <p>
                        Principal's Remarks: &nbsp;&nbsp;&nbsp;&nbsp;
                        <i><span  className="text-success">{props.passda.Principal}</span></i>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section6