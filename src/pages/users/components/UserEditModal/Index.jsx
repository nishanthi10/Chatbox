import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserEditModal = ({ user, setData }) => {

  const { register, handleSubmit, reset } = useForm();

  // Load selected user data into inputs when clicking Edit
  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        company: user.company,
        role: user.role,
        verified: user.verified,
        status: user.status
      });
    }
  }, [user, reset]);

  const onSubmit = async (formData) => {
    try {
      await axios.put(`http://localhost:5000/users/${user.id}`, {
        name: formData.name,
        company: formData.company,
        role: formData.role,
        verified: Number(formData.verified),
        status: Number(formData.status),
      });

      // Update UI instantly
      setData((prev) =>
        prev.map((u) =>
          u.id === user.id
            ? { ...u, ...formData, verified: Number(formData.verified), status: Number(formData.status) }
            : u
        )
      );

      // Close modal
      document.getElementById("close-edit-modal").click();

    } catch (err) {
      console.log("Edit API Error:", err);
    }
  };

  return (
    <div>
      <div className="modal fade" id="Modal1" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            {/* FORM MUST BE INSIDE modal-content */}
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button
                  id="close-edit-modal"
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal">
                </button>
              </div>

              <div className="modal-body">

                <div className="input-group mb-3">
                  <span className="input-group-text">Name</span>
                  <input type="text" className="form-control" {...register("name")} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Company</span>
                  <input type="text" className="form-control" {...register("company")} />
                </div>

                <select className="form-select mb-3" {...register("role")}>
                  <option value="ui designer">UI Designer</option>
                  <option value="ux designer">UX Designer</option>
                </select>

                <select className="form-select mb-3" {...register("verified")}>
                  <option value="1">Verified</option>
                  <option value="0">Not Verified</option>
                </select>

                <select className="form-select mb-3" {...register("status")}>
                  <option value="1">Active</option>
                  <option value="0">Banned</option>
                </select>

              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEditModal;
