function Section2(props) {

    return (
        <div className="p-3 ">
            <h4 className=" text-success">
                {props.passda.stdname}'s
                {props.passda.stdterm} -
                {props.passda.stddcat} Report
            </h4>
        </div>
    );

}

export default Section2;