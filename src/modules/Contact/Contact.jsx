import React,{useEffect,useState} from 'react'
import "../../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import "../../assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css"
import "../../assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/icons.min.css"
import "../../assets/css/app.min.css"
import axios from 'axios'


import Table from '../../Components/Table'



function Contact() {

  let options=[100,50,10]

  

  let [filteroption,setfilteroption]=useState("1")
  let [namematcheddata,setnamematcheddata]=useState([])

  let [tabledata,settabledata]=useState([])
  let [totalpagination,settotalpagination]=useState([])

  let [show,setshow]=useState(50)
  let [group,setgroup]=useState(1)

 
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


  return (
    <div>
      <Table columns={columns} data={ (filteroption=="1")?tabledata:namematcheddata} optionid={"selectshow"} options={options} totapaginations={totalpagination} namefilter={namefilter} onshowselect={showselect} onpaginationselect={showpagination} cellactions="true" />
    </div>
  )
}

export default Contact