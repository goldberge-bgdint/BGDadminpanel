import React from 'react'

function Modal(props) {

    // title
    //modalcontent
    // buttonoption  1|0

    //closebuttontext
    //closebuttontaction

    //savebuttontext
    //savebuttontaction

  return (
    <div>

<button  type="button" id='showmodalbutton' class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{props.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       {props.modalcontent}
      </div>
      <div class="modal-footer">
    {(props.buttonoption=="1")?
        <div>
        <button type="button" class="btn btn-secondary mx-4" onClick={props.closebuttontaction} data-bs-dismiss="modal">{props.closebuttontext}</button>
        <button type="button" class="btn btn-primary" onClick={props.savebuttontaction} > {props.savebuttontext} </button>
        </div>
        :
        <button type="button" class="btn btn-secondary" onClick={props.closebuttontaction} data-bs-dismiss="modal">{props.closebuttontext}</button>
    }
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal