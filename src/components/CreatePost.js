import React from "react"
import Modal from 'react-bootstrap/Modal'

const CreatePost = (props) => {
    
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create an Job Posting
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e)=>props.submitAPost(e)}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="Company">Company</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Company" value={props.formState.company} name="company" onChange={(e)=>props.updatePostFormState(e)} required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="Position">Position</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Position" value={props.formState.position} name= "position" onChange={(e)=>props.updatePostFormState(e)} required/>  
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="Zipcode">Zipcode</label>
                        <input type="integer" className="form-control" id="validationDefault01" placeholder="Zipcode" value={props.formState.zipcode} name="zipCode" onChange={(e)=>props.updatePostFormState(e)} required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8 mb-3">
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control" onChange={(e)=>props.updatePostFormState(e)} id="exampleFormControlTextarea1" rows="3" name="description" value={props.formState.description}></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12 mb-3">
                        <label htmlFor="Link">Link</label>
                        <input type="url" className="form-control" id="exampleInputUrl" aria-describedby="urlHelp" name="link" value={props.formState.link} onChange={(e)=>props.updatePostFormState(e)} placeholder="Link"/>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>
          </Modal.Body>
        </Modal>
    )
}

export default CreatePost