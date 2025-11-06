import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div>
      
        <div className="card w-25 mx-auto mt-5">
          <div className="card-body d-flex flex-column align-items-center"> 
            <h5 className=''>Sign in </h5>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username </label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" onClick={() => navigate('/dashboard')} className="btn btn-primary">Submit</button>
              
            </form>
          </div>
        </div>
     
    </div>
  )
}

export default SignIn
