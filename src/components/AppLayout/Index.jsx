import React, { Children } from 'react'
import logo from './logo.jpg';
import { Link } from 'react-router-dom';
import './index.css'
import { IconSearch,IconTrolleyFilled, IconSchool,IconUsers,IconBrandWhatsapp,IconFileDescription, IconBrandFunimation,IconUserPlus, IconBellFilled, IconVocabulary, IconUserCircle, IconChartBarPopular, IconUserSquare, IconReceiptBitcoin, IconLockSquareRoundedFilled } from '@tabler/icons-react';

const AppLayout = ({ children }) => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="row">
                <div className="col-2 ">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link  " href="#"><img src={logo} alt="Icon" /></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard"><span className="p-3">
                                <IconChartBarPopular /></span>Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users"><span className="p-3">
                                <IconUserSquare /></span>Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  .hover" to="/blogs"> <span className="p-3">
                                <IconReceiptBitcoin /></span>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to="/sign-in"> <span className="p-3">
                                <IconLockSquareRoundedFilled /></span>Sign in
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to="/tablepage"> <span className="p-3">
                                <IconBrandFunimation /></span>Tables
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/course"> <span className="p-3">
                                <IconVocabulary /></span>Course
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle "
                                id="studentsDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span className="p-3"><IconSchool />
                                </span>Students
                            </Link>

                            <ul className="dropdown-menu" aria-labelledby="studentsDropdown">
                                <li><Link className="dropdown-item" to="/createstudents">
                                   <span className="p-1"><IconUserPlus /></span> Create Student</Link>
                                </li>
                                <li><Link className="dropdown-item" to="/listofstudents">
                                  <span className="p-1"><IconUsers /></span> List of Students</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to="/events"> <span className="p-3">
                                <IconBrandFunimation /></span>Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/events/:id"> <span className="p-3">
                                <IconBrandFunimation /></span>EditEvents
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to="/details"> <span className="p-3">
                                <IconFileDescription /></span>Details
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop"> <span className="p-3">
                                <IconTrolleyFilled /></span>shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chat"> <span className="p-3">
                                <IconBrandWhatsapp /></span>Chat
                            </Link>
                        </li>


                    </ul>
                </div>

                <div className="col-10 p-0 header ">
                    <div className='header d-flex justify-content-end align-items-center' >
                        <ul className="nav ">
                            <li className="nav-item">
                                <a className="nav-link " href="#"><IconSearch color='black' /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><IconBellFilled color='grey' /></a>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link " data-bs-toggle="dropdown"><IconUserCircle />
                                    <div className="btn-group">
                                        <ul className="dropdown-menu m-2">
                                            <li><a className="dropdown-item" href="#">xyz</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Home</a></li>
                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                            <li><a className="dropdown-item" href="#">Settings</a></li>

                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item text-danger d-flex align-items-center" >Logout</a></li>
                                        </ul>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className='content'>
                        {children}
                    </div>


                </div>

            </div>
        </div>

    )
}

export default AppLayout
