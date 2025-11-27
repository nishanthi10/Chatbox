import React, { useState } from 'react';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';
import './index.css';
import {
  IconSearch, IconTrolleyFilled, IconSchool, IconUsers, IconBrandWhatsapp,
  IconFileDescription, IconBrandFunimation, IconUserPlus, IconBellFilled,
  IconVocabulary, IconUserCircle, IconChartBarPopular, IconUserSquare,
  IconReceiptBitcoin, IconLockSquareRoundedFilled, IconMenu2
} from '@tabler/icons-react';

const AppLayout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0">

       
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>

         
          <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
            <IconMenu2 size={24} />
          </div>

          <ul className="nav flex-column mt-3">

            {/* LOGO */}
            <li className="nav-item d-flex align-items-center justify-content-center mb-3">
              <img src={logo} size="100px" alt="Logo" className="sidebar-logo"/>
            </li>

            {/* MENU ITEMS */}
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <IconChartBarPopular />
                {isOpen && <span className="ms-2">Dashboard</span>}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/users">
                <IconUserSquare />
                {isOpen && <span className="ms-2">Users</span>}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                <IconReceiptBitcoin />
                {isOpen && <span className="ms-2">Blog</span>}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">
                <IconLockSquareRoundedFilled />
                {isOpen && <span className="ms-2">Sign In</span>}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/tablepage">
                <IconBrandFunimation />
                {isOpen && <span className="ms-2">Tables</span>}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/course">
                <IconVocabulary />
                {isOpen && <span className="ms-2">Course</span>}
              </Link>
            </li>

            {/* DROPDOWN */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <IconSchool />
                {isOpen && <span className="ms-2">Students</span>}
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/createstudents">
                    <IconUserPlus size={18}/> Create Student
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/listofstudents">
                    <IconUsers size={18}/> List Students
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/events">
                <IconBrandFunimation />
                {isOpen && <span className="ms-2">Events</span>}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/details">
                <IconFileDescription />
                {isOpen && <span className="ms-2">Details</span>}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                <IconTrolleyFilled />
                {isOpen && <span className="ms-2">Shop</span>}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/chat">
                <IconBrandWhatsapp />
                {isOpen && <span className="ms-2">Chat</span>}
              </Link>
            </li>

          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="col p-0">
          
          {/* HEADER */}
          <div className='header d-flex justify-content-end align-items-center'>
            <ul className="nav">

              <li className="nav-item">
                <a className="nav-link"><IconSearch color='black' /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><IconBellFilled color='grey' /></a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <IconUserCircle /> 
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item">Profile</a></li>
                  <li><a className="dropdown-item">Settings</a></li>
                  <li><hr/></li>
                  <li><a className="dropdown-item text-danger">Logout</a></li>
                </ul>
              </li>

            </ul>
          </div>

          {/* PAGE CONTENT */}
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
