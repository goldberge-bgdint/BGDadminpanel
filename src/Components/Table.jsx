import React,{useEffect} from 'react'
import Selectcomponent from "../Components/select/Selectcomponent.jsx"
import "./Table.scss"
import "../index.scss"
import { AiTwotoneDelete } from "@react-icons/all-files/ai/AiTwotoneDelete";


function Table(props) {


  return (
    <div>

<div className="row">
  <div className="col-12">
    <div className="card">
      <div className="card-body">
        <div className='tablefilets' >
            <div> Show: <Selectcomponent onshowselect={props.onshowselect} optionid={props.optionid}  options={props.options}/></div>
            <div> Search: <input onChange={props.namefilter} type="text" class="form-control" id="searchfilter" placeholder="name"/></div> 
       </div>
        <table id="datatable" className="table table-bordered dt-responsive  nowrap w-100">  
        <div className="tablefilters">  
        </div>
          <thead className='mytableheader' >
            <tr>
              {props.columns.map((e)=>
              <th>{e}</th>
              )}

            </tr>

          </thead>
          <tbody className='mytablebody' >
             {   props.data.map((item)=>
            <tr key={item.id}>
              {
              Object.values(item).map((index)=>
              <td>{index}</td>
              )}
              {(props.cellactions=="true")? <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" id='deletebutton' onClick={()=>props.deleteaction(item.ID)} class="btn btn-primary"> <AiTwotoneDelete/> </button>
  <button type="button" id='editbutton' onClick={()=>props.editaction(item.ID)} class="btn btn-primary">   <i class='bx bxs-edit-alt' ></i> </button>
</div> : "" }
            </tr>
           ) }
         
          </tbody>
         
        


        </table>
        <div className="tableendtooltip ">
              <nav aria-label="Page navigation example">
                 <ul class="pagination pagination-md">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                   
                 {props.totapaginations.map((e,key)=>
                    <li key={key} class="page-item"  onClick={()=>props.onpaginationselect(key+1)} ><a style={{cursor:"pointer"}} class="page-link">{e+1}</a></li>
                  )}  
              
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                    </ul>
                </nav>
          </div>
      </div>
    </div>
  </div> {/* end col */}
</div> {/* end row */}


    </div>
  )
}

export default Table