import React from 'react'
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Index';
import SignIn from './pages/SignIn';
import Blogs from './pages/Blogs/';
import { TablePage } from './pages/TablePage/Index';
import {Course} from './pages/Course/Index';
import { Routes, Route, } from 'react-router-dom';
import { CreateStudents } from '/src/pages/Students/CreateStudents/Index';
import {ListOfStudents} from '/src/pages/Students/ListOfStudents/Index';
import {Events} from '/src/pages/Events/Index';
import {EditEvents} from '/src/pages/Events/EditEvents/Index';
import {Details} from '/src/pages/Details/Index';
import {Shop} from '/src/pages/Shop/Index';
import {Chat} from '/src/pages/Chat/Index';





 



function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/tablepage' element={<TablePage />} />
          <Route path='/course' element={<Course />} />
          <Route path='/createstudents' element={<CreateStudents/>} />
          <Route path='/listofstudents' element={<ListOfStudents/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/events/:id' element={<EditEvents/>} />
          <Route path='/details' element={<Details />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/chat' element={<Chat />} />

       

        </Routes>
      </div>
    </>
  )
}
export default App
