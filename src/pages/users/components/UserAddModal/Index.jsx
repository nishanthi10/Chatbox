import React from 'react'
import {useForm} from 'react-hook-form'

const UserAddModal = ({setData}) => {
  const { register, handleSubmit, formState:{errors}, reset}= useForm();

   const onSubmit = (formData) => {
    setData(prev => [...prev, {
      name: formData.name,
      company:formData.company,
      role:formData.role}]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="modal fade" id="Modal2" tabIndex="-1" aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
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
                <select className="form-select"  aria-label="Default select example"
                 {...register("role", { required: " select a role" })}>
                  <option value="">Role</option>
                  <option value="ui designer">ui deginer</option>
                  <option value="ux designer">ux designer</option>
                 
                </select>
                 {errors.role && <p style={{color:"red"}}>{errors.role.message}</p>}
                </div>
              <div className="mt-3 ">
                <button type="submit" className="btn btn-primary ">Submit</button>
                <button type="button" className="btn btn-outline-secondary mx-2" data-bs-dismiss="modal" >Close</button></div>
            </div>
 
          </div>
        </div>
      </div>
    </form>
  
    </div>
  )
}

export default UserAddModal
