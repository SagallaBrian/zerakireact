import { Component } from "react";

import Closebtn from './section1';
import Heading from './section2';
import Overallper from './section3';
import Persubject from './section4';
import Charts from './section5';
import Tecome from './section6';

class MaindivClass extends Component {


    render() {

        let mynewdata = this.props.mydata;
        let stdname = mynewdata.student_name;
        let arrdata = mynewdata.exam_name.split(" - ");
        let stdclas = arrdata[0];
        let stddcat = arrdata[1]
        let myregs = /[^a-z0-9 ]/gi;
        let termyear = arrdata[2].replace(myregs, "");
        let stdyear = termyear.slice(0, 5);
        let stdterm = termyear.slice(5);
        let meangrade = mynewdata.mean_grade;
        let streamp = mynewdata.stream_position;
        let overalp = mynewdata.overall_position;
        let meanscore = mynewdata.mean_marks.avg_score;

        let clasteacher = mynewdata.class_teachers_remarks;
        let Principal = mynewdata.principals_remarks;

        let subjecperfom = mynewdata.subject_results;
        let pefomovertime = mynewdata.student_performance_over_time;

        let closebtndata = {
            stdclas,
            stddcat,
            termyear,
            stdyear
        }

        let headindata = {
            stdname,
            stdterm,
            stddcat
        }
        let ovlposdata = {
            streamp,
            overalp,
            meangrade,
            meanscore
        }

        let remaksdata = {
            clasteacher,
            Principal
        }


        return (
            <div id="leftdiv">
                <div className="container-fluid">

                    <Closebtn passda={closebtndata} />
                    <Heading passda={headindata} />
                    <Overallper passda={ovlposdata} />
                    <Persubject passda={subjecperfom} />
                    <Charts passda={pefomovertime} />
                    <Tecome passda={remaksdata} />

                </div>
            </div>
        );
    }

}

export default MaindivClass;
