import React, { useEffect, useState } from 'react'
import "./newjob.scss"
import {Editor, EditorState} from 'draft-js'

function Newjob() {

  let [departments,setdepartments]=useState(["IT","HR"])
  let [addresses,setaddresses]=useState(["Pakistan","Saudia Arabia"])


  let [newdepartmentsoption,setnewdepartmentsoption]=useState(0)
  let [newaddressoption,setnewaddressoption]=useState(0)

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className='newjobbody' >

           <h5>Post new job</h5>

          <div className="newjobdetails">

            {/* Form 1st 3 inputs */}

            <div className="row mt-4 ">

              <div className="col-md-5">

        
                <label for="" class="form-label">Title</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                <small id="helpId" class="form-text text-muted">Maximum 50* charactors</small>

              </div>  
             

              <div className="col-md-2">


            
                <label for="" class="form-label">Type</label>
                 <select class="form-control" name="" id="jobtype">
                   <option>Full time</option>
                   <option>Part time</option>
                   <option>Contract Base</option>
                 </select>
              


              </div>

              <div className="col-md-2">
  
                <label for="" class="form-label">Status</label>
                 <select class="form-control" name="" id="jobtype">
                   <option>Active</option>
                   <option>Inactive</option>          
                 </select>
            
              </div>

                <div className="col-md-3">
  
                <label for="" class="form-label">Status</label>
                
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                       <label class="form-check-label" for="flexRadioDefault1">
                 On-site
                 </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                <label class="form-check-label" for="flexRadioDefault2">
                 Remote
                </label>
                </div>
  
            
              </div>


            </div>



              {/* Form 2nd 3 inputs */}




            <div className="row mt-4">
              

             <div className="col-md-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" onChange={()=>{ if(newdepartmentsoption==0){setnewdepartmentsoption(1)}else{ {setnewdepartmentsoption(0)} }  }}  id="newdepartmentcheck"/>
                <label class="form-check-label" for="">
                  New Department
                </label>
              </div>
              {( newdepartmentsoption==0)?
              <div className='mt-2'  >

                  <label for="" class="form-label">Department</label>
                  <select class="form-control" name="" id="departmentselect">
                   {departments.map((e) => <option> {e} </option>)}
                  </select>
            
              </div>
              :
              <div   className='mt-2' >
              
                <label for="" class="form-label d-block">New Department</label>
                <div class="input-group">
                <input type="text" class="form-control d-block" id='newdepartmentinput' placeholder="New Department" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary"  onClick={ ()=>{ if(document.getElementById("newdepartmentinput").value!="") { departments.push(document.getElementById("newdepartmentinput").value) ; setnewdepartmentsoption(0) ; document.getElementById("newdepartmentcheck").click() } else { alert("Please add new address") } }} type="button" id="button-addon2">Add</button>
                </div>
               
              </div>

            }
            </div>



              <div className="col-md-3">

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" onChange={()=>{ if(newaddressoption==0){setnewaddressoption(1)}else{ {setnewaddressoption(0)} }  }}  id="newaddresscheck"/>
                <label class="form-check-label" for="">
                  New Address
                </label>
              </div>
              {( newaddressoption==0)?
              <div className='mt-2'  >

                  <label for="" class="form-label">Address</label>
                  <select class="form-control" name="" id="addressselect">
                   {addresses.map((e) => <option> {e} </option>)}
                  </select>
            
              </div>
              :
              <div className='mt-2' >

                <label for="" class="form-label">New Address</label>
                <div class="input-group">
                <input type="text" class="form-control" placeholder="New Department" id='newaddressinput' aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" onClick={ ()=>{ if(document.getElementById("newaddressinput").value!="") { addresses.push(document.getElementById("newaddressinput").value) ; setnewaddressoption(0) ;document.getElementById("newaddresscheck").click() } else { alert("Please add new address") } }} type="button" id="button-addon2">Add</button>
                </div>
               
              </div>

            }

              </div>
              <div className="col-md-3">


              <div class="mb-3">
              <label for="jobimage" class="form-label">Attachment</label> <br />
              <label for="jobimage" class="form-label"  >PNG,JPEG,PDF files only</label> <br />
               <input class="form-control" type="file" id="jobimage"/>
              </div>

              </div>
            </div>
          </div>



          <div className="descriptionpart">
          
          <Editor editorState={editorState} onChange={setEditorState} />

          </div>

    </div>
  )
}

export default Newjob