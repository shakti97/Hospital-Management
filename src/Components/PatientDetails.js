import React,{Component}  from 'react';
import '../CSS/PatientDetails.css';
import Modal from 'react-modal';
import { AddPatient } from './AddPatients';
// import {PageNumber} from './PageNumber.js';

export class PatientDetails extends Component{
    constructor(props){
        super(props);
        this.state={PatientData:[],CurrentPage:1,PatientPerPage:10,PageNumbers:[],IsModalOpen:false,patientSelected:{}};
        this.handlePage=this.handlePage.bind(this);
        this.openModal=this.openModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
        this.UpdatePatientDetails=this.UpdatePatientDetails.bind(this);
        this.patientDetailsUpdate={};
        this.handlePatient=this.handlePatient.bind(this);
    }
    openModal(event){
        console.log('this',this);
        var idUpdate=event.target.id;
        console.log('patientId',idUpdate);
        var pSelected;
        this.state.PatientData.forEach(patient=>{
            if(patient.id==idUpdate){
                pSelected=patient;
                return 0;
            }
        });
        console.log('patientSelected ',pSelected);
        this.patientDetailsUpdate=pSelected;
        console.log('patientDetailsUpdate',this.patientDetailsUpdate);
        this.setState({IsModalOpen:true,patientSelected:pSelected});
    }
    closeModal(){
        this.setState({IsModalOpen:false});
    }
    componentWillMount(){
        const RenderPageNumbers=[];
        fetch('http://localhost:3000/patients',{
            method : 'GET'
        }).then((response)=>{
                response.json().then(data=>this.setState({PatientData:data},()=>{console.log(this.state);
                    for(let i=1;i<=Math.ceil(this.state.PatientData.length/this.state.PatientPerPage);i++){
                        RenderPageNumbers.push(i);
                        console.log('RenderPageNumbers +1');
                    }
                    this.setState({PageNumbers:RenderPageNumbers},()=>{console.log('PageNumber ',this.state);});
                    }));
        });
    }
    handlePage(event){
        var page=event.target.id;
        this.setState({CurrentPage: page});
    }
    handlePatient(event){
        event.persist();
        const name=event.target.name;
        console.log('patientDetailsUpdate',this.patientDetailsUpdate);
        this.patientDetailsUpdate={...this.patientDetailsUpdate,    
            [name] : event.target.value
        }
        console.log('handlePatient ',this.patientDetailsUpdate);
        }
    UpdatePatientDetails(event){
        this.closeModal();
        console.log('this.patientDetailsUpdate ',this.patientDetailsUpdate);
        var id=this.patientDetailsUpdate.id;
        var object={"PatientName":this.patientDetailsUpdate.PatientName,"PatientAge":this.patientDetailsUpdate.PatientAge,"PatientProblem":this.patientDetailsUpdate.PatientProblem,"PatientPrescription":this.patientDetailsUpdate.PatientPrescription}
        console.log('object ',object);
        fetch('http://localhost:3000/patients/'+id,{
            method: 'PUT',
            headers :{
                'Content-Type': 'application/json' 
                },
            body : JSON.stringify(object)
        }).then((response)=>{
            console.log('response',response);
            this.componentWillMount();
            

        })
    }
    render(){
        const indexOfLastData=this.state.CurrentPage*this.state.PatientPerPage;
        const indexOfFirstData=indexOfLastData-this.state.PatientPerPage;
        const currentPagePatient=this.state.PatientData.slice(indexOfFirstData,indexOfLastData);
        
    return(
        <div>
            <table>
                <thead>
                <tr>
                <th>Sno</th>
                <th>PatientName</th>
                <th>PatientAge</th>
                <th>PatientProblem</th>
                <th>PatientPrescription</th>
                </tr>
                </thead>
                <tbody>
                {currentPagePatient.map((patient)=>{return (
                    <tr>
                        <td>{patient.id}</td>
                        <td>{patient.PatientName}</td>
                        <td>{patient.PatientAge}</td>
                        <td>{patient.PatientProblem}</td>
                        <td>{patient.PatientPrescription}</td>
                        <td><button id={patient.id} onClick={this.openModal}>Update Details</button></td>
                    </tr>
                    
                );})}
                <Modal isOpen={this.state.IsModalOpen} onRequestClose={this.closeModal}>
                <h2>Update Patient Details</h2>
                <button onClick={this.closeModal}>close</button>
                <AddPatient title='Update Details of Patients' pObject={this.state.patientSelected} handlerInput={this.handlePatient} addDetails={this.UpdatePatientDetails}  />
                </Modal>
                </tbody>
            </table>
            <ul className='PaginationList'>
                {this.state.PageNumbers.map(number=>{
                 return(
                    <li id={number} key={number} className="Pagination" onClick={this.handlePage}>{number}</li>
            )
            })}
            
            </ul>
        </div>
    )
    }
}