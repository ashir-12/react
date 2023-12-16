import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    dob:"",
    salary:"",
    address:"",
    designation:"",
    shopid:""
  });


  const { name, dob, salary, address, designation, shopid } = user;


  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/employees/update/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/employees/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                dob
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter dob"
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
              salary
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter salary"
                name="salary"
                value={salary}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
              designation
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter designation"
                name="designation"
                value={designation}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="shopid" className="form-label">
              shopid
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter shopid"
                name="shopid"
                value={shopid}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}