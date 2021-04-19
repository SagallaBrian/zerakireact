function Section4(props) {
    function myfunction(params) {
        params.sort((a, b) => b["score"] - a["score"])

        let myprosdata = params.map((arrelem) =>
            <tr id="subjt" key={arrelem.rank + arrelem.deviation + arrelem.grade}>
                <th scope="col" className="font-weight-normal">{arrelem.subject_name}</th>
                <td>{arrelem.score}</td>
                <td>{arrelem.grade} </td>
                <td>{arrelem.rank} / {arrelem.rank_out_of}</td>
                <td>{arrelem.deviation}</td>
                <td>{arrelem.comment}</td>
            </tr>
        );

        return <tbody id="tablecont" >
            {myprosdata}
        </tbody>

    }
    /*
      <tr id="subjt">
            <th scope="col">${arrelem.subject_name}</th>
            <td>${arrelem.score}</td>
            <td>${arrelem.grade} </td>
            <td>${arrelem.rank} / ${arrelem.rank_out_of}</td>
            <td>${arrelem.deviation}</td>
            <td>${arrelem.comment}</td>
        </tr>
        `;  
    */
    return (

        <div>
            <div id="subperfo" className="pt-5">
                <div className="pt-3 pb-2 px-3 bg-light rounded-pill">
                    <h6 className="font-weight-normal text-primary">
                        Performance By Subject
                    </h6>
                </div>
                <div className="p-3">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr className=" text-white" id="tahhe">
                                    <th scope="col">Subject</th>
                                    <th scope="col">Score</th>
                                    <th scope="col">Grade</th>
                                    <th scope="col">Rank</th>
                                    <th scope="col">Deviation</th>
                                    <th scope="col">Comment</th>
                                </tr>
                            </thead>
                            {myfunction(props.passda)}

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Section4