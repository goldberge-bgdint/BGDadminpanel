import React, {useEffect,useState} from 'react'
import axios from 'axios'
import "./Contact.scss"

//Components
import Table from '../../Components/Table'
import Modal from '../../Components/Modal/Modal'

import "../../assets/libs/sweetalert2/sweetalert2.min.css"

//icons
import deleteiconstatic from "../../images/gifs/deleteiconflat.png"



function Contact() {

  // states and table Data
  let options=[100,50,10]

  //Table states  

  let [filteroption,setfilteroption]=useState("1")
  let [namematcheddata,setnamematcheddata]=useState([])

  let [tabledata,settabledata]=useState([])
  let [totalpagination,settotalpagination]=useState([])

  let [show,setshow]=useState(10)
  let [group,setgroup]=useState(1)


  //Modal States

  let [title,settitle]=useState("")

  let [modalcontent,setmodalcontent]=useState()
  let [buttonoption,setbuttonoption]=useState("")

  let [closebuttontext,setclosebuttontext]=useState("")
  let [closebuttontaction,setclosebuttontaction]=useState()

  let [savebuttontext,setsavebuttontext]=useState("")

  let [selectedid,setselectedid]=useState(0)

  
 
  useEffect(()=>{


    axios.get('http://localhost:4000/contact/pagination', { params: { 
    show: show,
    group: group } })
    .then(res=>{
      let tota=[...Array(res.data[0].totalgroups).keys()]
      settotalpagination(totalpagination=tota)
     delete res.data[0]
     settabledata(tabledata=res.data)
    });


  })




  let columns=["ID","Email","Name","Message","Status","Contact At","Modified Date","Actions"]

 
// FIlters and paginations

let showselect=()=>{
 
  setshow(document.getElementById("selectshow").value)
  setgroup(1)
  setfilteroption("1")

}

let showpagination=(e)=>{

  setshow(document.getElementById("selectshow").value)
  setgroup(e)
  setfilteroption("1")
}


let namefilter=()=>{


if(document.getElementById("searchfilter").value!="")
{
  axios.get('http://localhost:4000/contact/namesearch', { params: { 
       name:document.getElementById("searchfilter").value
   } })
    .then(res=>{
      delete res.data[0]
      setfilteroption("2")
      setnamematcheddata(namematcheddata=res.data)
    });
}
else
{
  setfilteroption("1")
}
}


//Button actions

//----Deleting

let deletercontactlead=(e)=>{

  settitle("Delete Contact Leadas")
  setbuttonoption("1")
  setclosebuttontext("Cancel")
  setsavebuttontext("Delete")

  setselectedid(selectedid=e)
  setmodalcontent(setdeletecontent)
  document.getElementById("showmodalbutton").click()

}

//Delete modal content

let setdeletecontent =()=>{
  
  return(<div className='text-center' >
    <img className='mx-auto' src={deleteiconstatic} alt="" />
    <h5 className='' > Are you sure to Delete ? </h5>
    <p>this task will not undo</p>
  </div>)
}

//Dekeleting
let deletecontact=()=>{  

  document.getElementById("showmodalbutton").click()
  axios.delete(`http://localhost:4000/contact/${selectedid}`)
  .then(res => console.log(res.data));

}


//---------Edit Contact lead

let editcontactlead=()=>{

}



  return (
    <div>


      <div className='contacttable' >
      <Table columns={columns} data={ (filteroption=="1")?tabledata:namematcheddata} optionid={"selectshow"} options={options} totapaginations={totalpagination} deleteaction={deletercontactlead}  editaction={editcontactlead} namefilter={namefilter} onshowselect={showselect} onpaginationselect={showpagination} cellactions="true" />
      </div>
   
      <Modal
     
    title={title}
    modalcontent={modalcontent}
    buttonoption={buttonoption} 

    closebuttontext={closebuttontext}
    closebuttontaction={closebuttontaction}

    savebuttontext={savebuttontext}
    savebuttontaction={deletecontact}

      />

    </div>
  )
}

export default Contact