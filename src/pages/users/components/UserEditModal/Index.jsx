import React from 'react'


const UserEditModal = ({ user }) => {
  return (
    <div>
      <form>
      <div className="modal fade" id="Modal1" tabIndex="-1" aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input type="text" className="form-control" defaultValue={user?.name} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Company</span>
                <input type="text" className="form-control" defaultValue={user?.company} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
              <div>
                <select className="form-select" defaultValue={user?.role} aria-label="Default select example">
                  
                  <option >ui deginer</option>
                  <option>ux designer</option>
                 
                </select>
                </div>
              <div className="mt-3 "><button type="button" className="btn btn-primary ">Update</button>
                <button type="button" className="btn btn-outline-secondary mx-2" data-bs-dismiss="modal" >Close</button></div>
            </div>

          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default UserEditModal
