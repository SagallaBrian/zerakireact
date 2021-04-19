import { Component } from "react";

import Closebtn from './section1';
import Sectiontwo from './section2';
import Sectiothre from './section3';

class Rightdivclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stdimg: props.mydata.student_photo,
            stdnam: props.mydata.student_name,
            stdid: props.mydata.student_admission_number,
            stdform: props.mydata.class_name,

        }
    }



    render() {
        return (
            <div>
                {/* start of rightdiv  */}
                <div id="rightdiv">
                    <div id="innr">
                        <Closebtn />
                        <Sectiontwo  mydata={this.state} />
                        <Sectiothre />

                    </div>
                </div>


                {/* end of rightdiv */}
            </div>
        );
    }

}

export default Rightdivclass;
