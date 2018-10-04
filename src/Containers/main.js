import React, {
    Component
} from 'react';
import {
    Header
} from '../Components/Header'
import {
    Content
} from '../Components/Content';
import {
    Footer
} from '../Components/Footer'

export class Main extends Component {
    constructor(props) {
        super(props);
        this.title = 'Hospital Management';
        this.patientObject = {PatientId:25};
    }
    loginAuth() {

    }
    handlerInput(event) {
        event.persist();
        const name = event.target.name;
        this.patientObject = { ...this.patientObject,
            [name]: event.target.value
        };
        console.log('patientObject ', this.patientObject);
    }

    getPatientDetails() {

    }
    newPatientDetails() {
        this.patientObject.PatientId+=1;
        console.log('new details added');
        fetch('http://localhost:3000/patients',{
             method:'POST',
             headers :{
                 'Content-Type': 'application/json' 
                 },
                   body : JSON.stringify(this.patientObject)
             }).then((response)=>{
                 alert('Patient Added Successfully');
                 })
        }
    updatePatientDetails() {

    }
    DeletePatientDetails() {

    }
    Component
    render() {
        return ( <div className = 'container ' >
            <Header title = {this.title} className = 'row' />
            <Content className = 'row' handlerInput = {this.handlerInput.bind(this)} addPatient = {this.newPatientDetails.bind(this)}/>
            <Footer className = 'row' />
            </div>
        )
    }
}

