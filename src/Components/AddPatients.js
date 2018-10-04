import React  from 'react';
import '../CSS/AddPatient.css';

//This Component is Responsible for entering the details of the new Patient
export const AddPatient=(props)=>{
    return(
        <div className='container'>
        <h3><strong className='blue'>{props.formName}</strong></h3>
        <div className='col-md-12'>
        <form>
            <div className="form-group">
            <label >Name</label>
            <input type="text"   className="form-control " defaultValue={props.pObject? props.pObject.PatientName : ""} name='PatientName' onChange={props.handlerInput} placeholder="Name of the Patient"/>
            </div>
            <div className="form-group">
                <label >Age</label>
                <input type="number" className="form-control" defaultValue={props.pObject? props.pObject.PatientAge : ""} name='PatientAge' onChange={props.handlerInput} placeholder="Age of the Patient"/>
            </div>
            <div className="form-group">
                <label >Problem</label> 
                <input type="text" className="form-control" defaultValue={props.pObject? props.pObject.PatientProblem : ""} name='PatientProblem' onChange={props.handlerInput} placeholder="State the Problem"/>
            </div>
            <div className="form-group">
                <label >Prescription</label>
                <textarea type="text" className="form-control" defaultValue={props.pObject? props.pObject.PatientPrescription : ""} name='PatientPrescription' onChange={props.handlerInput} placeholder="Prescription of the Doctor"/>
            </div>
            <button type='button'  className="btn btn-primary" onClick={props.addDetails}>Submit</button>
        </form>
        </div>
        </div>
        
    )
}