import React, {useState, useEffect} from 'react'
import AppLayout from '../../components/AppLayout/Index'
import UserEditModal from '../users/components/UserEditModal/Index';
import UserAddModal from '../users/components/UserAddModal/Index';
import profile from './profile.jpg'
import axios from 'axios';


const Users = () => {

  const [UserData, setUserData] = useState(null);
  const [data, setData] = useState([]);
useEffect(() => {
  axios.get('http://localhost:5000/users')
    .then(res => {
       console.log("API Response:", res.data);
      setData(res.data);
    })
    .catch(err => {
      console.log("API Error:", err);

    });
}, []);  // VERY IMPORTANT

const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;

  try {
    await axios.delete(`http://localhost:5000/users/${id}`);
    setData((prev) => prev.filter((u) => u.id !== id));
  } catch (err) {
    console.log("Delete API Error:", err);
  }
};


  return (
    <div>
      <AppLayout >
        <div className="card container">
          <h3>Users</h3>
          <div className="d-flex justify-content-end mb-3 ">

            <button className="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#Modal2">ADD NEW</button>
          </div>

          <table className="table ">

            <thead >
              <tr className="table-secondary">
                <th scope="col ">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Company</th>
                <th scope="col">Role</th>
                <th scope="col">Verified</th>
                <th scope="col">status</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <th>{user.id}</th>
                  <td>
                    {user.name}
                  </td>
                  <td>{user.company}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.verified === 1 ? (<i className="bi bi-check-circle-fill text-success"></i>
                    ) : (<i className="bi bi-dash "></i>
                    )}
                  </td>
                  <td>
                    {user.status === 1 ? (<span className="badge bg-success">Active</span>) :
                      (<span className="badge bg-danger">Banned</span>)}
                  </td>
                  <td>
                    <div className="dropstart">
                      <i className="bi bi-three-dots-vertical " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      </i>
                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#Modal1" 
                        onClick={()=>setUserData(user)}> <i className="bi bi-pencil px-3"></i>Edit</button></li>
                        <li><button className="dropdown-item text-danger" onClick={()=> handleDelete(user.id)}> <i className="bi bi-trash3-fill px-3"></i>Delete</button></li>
                      </ul>
                    </div>
                  </td>
                </tr>))}
            </tbody>
          </table>

          

          <UserEditModal user={UserData} setData={setData} />
          <UserAddModal setData={setData}/>
        </div>
      </AppLayout>
    </div>
  )
}

export default Users