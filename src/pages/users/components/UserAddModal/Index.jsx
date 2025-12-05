import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';

const UserAddModal = ({setData}) => {
  const { register, handleSubmit, formState:{errors}, reset}= useForm();

   const onSubmit = async (formData) => {
    try{
      const res = await axios.post("http://localhost:5000/users",{
        
        name: formData.name,
        company: formData.company,
        role: formData.role,
        verified:Number(formData.verified),
        status: Number(formData.status)
      });
      
    // Update UI after successful DB insert
    setData(prev => [...prev, { id: res.data.id, ...formData }]);

    reset();
  } catch (err) {
    console.log("Add user API error", err);
  }};

  return (
    <div>
      
      <div className="modal fade" id="Modal2" tabIndex="-1" aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input type="text" className="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                {...register('name',{required:"name is required"})} />
              
            </div>{errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Company</span>
                <input type="text" className="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                {...register('company',{required:"company is required"})} />
              
              </div>{errors.company &&<p style={{color:"red"}}>{errors.company.message}</p>}
              <div>
                <select className="form-select mb-3"  aria-label="Default select example"
                 {...register("role", { required: " select a role" })}>
                  <option value="">Role</option>
                  <option value="ui designer">ui deginer</option>
                  <option value="ux designer">ux designer</option>
                 
                </select>
                 {errors.role && <p style={{color:"red"}}>{errors.role.message}</p>}
                </div>
              <div>
                <select className="form-select mb-3"  aria-label="Default select example"
                 {...register("verified", { required: " select a verified status" })}>
                  <option value="">verified</option>
                  <option value="1">yes</option>
                  <option value="0">no</option>
                 
                </select>
                 {errors.verified && <p style={{color:"red"}}>{errors.verified.message}</p>}
                </div>
              <div>
                <select className="form-select"  aria-label="Default select example"
                 {...register("status", { required: " select a status" })}>
                  <option value="">status</option>
                  <option value="1">yes</option>
                  <option value="0">No</option>
                 
                </select>
                 {errors.status && <p style={{color:"red"}}>{errors.status.message}</p>}
                </div>
              <div className="mt-3 ">
                <button type="submit" className="btn btn-primary ">Submit</button>
                <button type="button" className="btn btn-outline-secondary mx-2" data-bs-dismiss="modal" >Close</button></div>
            </div>
 </form>
          </div>
        </div>
      </div>
    
  
    </div>
  )
}

export default UserAddModal
