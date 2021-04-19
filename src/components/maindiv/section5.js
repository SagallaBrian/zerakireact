
function Section5(props) {
    let myarrda = props.passda

    let arrayofv = myarrda.map((arrelem) => {
        return arrelem.avg_score
    })
    console.log(arrayofv);
    let labels = [];
    let datavals = [];
    for (const arrelem of myarrda) {
        let examsname = arrelem.exam_name;
        let arrlsp = examsname.split("-");
        let mystrin = arrlsp[2].replace(/[^a-z0-9 ]/gi, "");
        let labss = mystrin + arrlsp[1]
        labss = labss.slice(5);
        labels.push(labss)
        datavals.push(arrelem.avg_score)
    }

    let minval = Math.min.apply(null, datavals);
    minval = Math.floor(minval / 5) * 5
    minval = minval - 10
    // console.log(labels);

    return (
        <div>

            <div id="statistical" className="pt-5 pb-3">
                <div className="pt-3 pb-2 px-3 bg-light rounded-pill">
                    <h6 className="font-weight-normal text-primary">
                        Statistical Analysis
                    </h6>
                </div>
                <div id="ms">
                    <div className="row">
                        <div className="col-xxl-6 pb-4" >
                            <canvas id="datgraph1" height="280px"></canvas>
                        </div>
                        <div className="col-xxl-6">
                            <canvas id="datgraph2" height="280px"></canvas>

                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );

}

export default Section5;