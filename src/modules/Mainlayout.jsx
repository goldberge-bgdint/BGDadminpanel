import React from 'react'
import bgdlogo from "../images/compnaylogo.png"

import "../assets/css/bootstrap.min.css"
import "../assets/css/app.min.css"
import "../assets/css/icons.min.css"

import "./mainlayout.scss"

import { Outlet, Link  } from "react-router-dom";

function Mainlayout() {
  return (
    <div>


{/* Begin page */}
<div id="layout-wrapper">
  <header id="page-topbar">
    <div className="navbar-header">
      <div className="d-flex">
        {/* LOGO */}
        <div className="navbar-brand-box">
          <Link to="/" >
          <a  className="logo logo-dark">
           <img src={bgdlogo} alt=""/>
          </a>
          </Link>
        </div>
        <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
          <i className="fa fa-fw fa-bars" />
        </button>
        {/* App Search*/}
        <form className="app-search d-none d-lg-block">
          <div className="position-relative">
            <input type="text" className="form-control" placeholder="Search..." />
            <span className="bx bx-search-alt" />
          </div>
        </form>
       
      </div>
      <div className="d-flex">
        <div className="dropdown d-inline-block d-lg-none ms-2">
          <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="mdi mdi-magnify" />
          </button>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
            <form className="p-3">
              <div className="form-group m-0">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
       
        
        <div className="dropdown d-none d-lg-inline-block ms-1">
          <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
            <i className="bx bx-fullscreen" />
          </button>
        </div>
        <div className="dropdown d-inline-block">
          <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="bx bx-bell bx-tada" />
            <span className="badge bg-danger rounded-pill">3</span>
          </button>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
            <div className="p-3">
              <div className="row align-items-center">
                <div className="col">
                  <h6 className="m-0" key="t-notifications"> Notifications </h6>
                </div>
                <div className="col-auto">
                  <a href="#!" className="small" key="t-view-all"> View All</a>
                </div>
              </div>
            </div>
            <div data-simplebar style={{maxHeight: 230}}>
              <a href="javascript: void(0);" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="avatar-xs me-3">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="bx bx-cart" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                      <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                    </div>
                  </div>
                </div>
              </a>
          
            </div>
           
          </div>
        </div>
        <div className="dropdown d-inline-block">
          <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
            <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
            <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
          </button>
          <div className="dropdown-menu dropdown-menu-end">
            {/* item*/}
            <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1" /> <span key="t-profile">Profile</span></a>
            <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1" /> <span key="t-settings">Settings</span></a>

            <div className="dropdown-divider" />
            <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span></a>
          </div>
        </div>
        <div className="dropdown d-inline-block">
          <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
            <i className="bx bx-cog bx-spin" />
          </button>
        </div>
      </div>
    </div>
  </header>
  {/* ========== Left Sidebar Start ========== */}
  <div className="vertical-menu">
    <div data-simplebar className="h-100">
      {/*- Sidemenu */}
      <div id="sidebar-menu">
        {/* Left Menu Start */}
        <ul className="metismenu list-unstyled" id="side-menu">
         
        <li className="menu-title" key="t-pages">Blog posts</li>
          <li>
          <Link to="/jobs"> 
            <a  className="waves-effect">
              <i className="bx bx-detail" />
              <span key="t-blog">Blog</span>
            </a>
          </Link>
            <ul className="sub-menu" aria-expanded="false">
            <Link to="/jobs"> 
              <li><a  key="t-blog-list"> <i class='bx bxl-blogger'></i>Blog posts</a></li>
            </Link>
            <Link to="/newjob"> 
              <li><a  key="t-blog-grid">  <i class='mdi mdi-book-edit' ></i> New Blog</a></li>
            </Link>
            </ul>
          </li>

          <li className="menu-title" key="t-pages">Career</li>
          <li>
          <Link to="/jobs"> 
            <a  className="waves-effect">
            <i class='bx bx-world' ></i>
              <span key="t-blog">Careers</span>
            </a>
          </Link>
            <ul className="sub-menu" aria-expanded="false">
            <Link to="/jobs"> 
              <li><a  key="t-blog-list"> <i class='bx bxs-edit-alt' ></i>Jobs posted</a></li>
            </Link>
            <Link to="/newjob"> 
              <li><a  key="t-blog-grid"> <i class='bx bx-plus-circle' ></i> New job</a></li>
            </Link>
            <Link to="/applicants"> 
              <li><a  key="t-blog-details"> <i class='bx bxs-file' ></i> Applicants</a></li>
            </Link>
            </ul>
          </li>
   
          <li className="menu-title" key="t-pages">leads</li>
         
          
          <li>
          <Link to="/contact"> 
            <a  className="waves-effect">
            <i class='bx bxs-message-rounded-dots'></i>
              <span key="t-blog">website leads</span>
            </a>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <Link to="/contact"> <li>  <a key="t-blog-list"> <i class='bx bxs-edit-alt' ></i>  Contact form </a></li> </Link>
          
            </ul>
          </li>
          
        </ul>
      </div>
      {/* Sidebar */}
    </div>
  </div>
  {/* Left Sidebar End */}
  {/* ============================================================== */}
  {/* Start right Content here */}
  {/* ============================================================== */}
  <div className="main-content">
    <div className="page-content">
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">


              {/* Routing Outlet */}
                        <Outlet/>
             
            </div>
          </div>
        </div>
        {/* end page title */}
      </div> {/* container-fluid */}
    </div>
    {/* End Page-content */}
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            © Business Go Digital.
          </div>
          <div className="col-sm-6">
            <div className="text-sm-end d-none d-sm-block">
              Design &amp; Develop by BGD
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  {/* end main content*/}
</div>
{/* END layout-wrapper */}


    </div>
  )
}

export default Mainlayout