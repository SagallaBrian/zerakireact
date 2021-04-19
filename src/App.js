import './App.css';

import Rightdiv from './components/rightdiv/rightdiv';
import Maindiv from './components/maindiv/maindiv'
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalod: false,
            myschol: 'jkuat',
            statdata: []
        }
    }

    componentDidMount() {
        this.mytimer = setTimeout(() => {
            this.myfetch()
        }, 100)

    }


    myfetch() {
        fetch('https://www.project.komplab.com/zeraki/data/')
            .then((mydata) => {
                return mydata.json();
            })
            .then((mydata) => {
                this.setState({
                    statdata: mydata,
                    datalod: true
                }, () => {
                    console.log(this.state.datalod)
                })
            })
            .catch((error) => {
                console.log("error")
            })
    }
    componentWillUnmount() {
        clearTimeout(this.mytimer);
    }
    render() {
        let mypassdata = this.state.statdata;
        let mypashasdata = this.state.statdata.student_name;
        let rendanow
        if (mypashasdata) {

            const {student_photo, student_name, student_admission_number, class_name} = mypassdata ;
            const objrightv = {
                student_photo, student_name, student_admission_number, class_name
            }

            rendanow = <div>
                <Rightdiv mydata={objrightv} />
                <Maindiv mydata={mypassdata}  />
            </div>
        }
        else
        {
            rendanow = <div></div>
        }
        return (
            <div className="">
                {rendanow}
            </div>
        );
    }
}

export default App;
