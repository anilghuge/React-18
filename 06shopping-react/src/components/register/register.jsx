import React from "react";

export function Register() {
  return (
    <React.Fragment>
      <main className="d-flex justify-content-center mt-4">
        <form className="border border-2 border-dark rouned p-4">
          <h1 className="bi bi-person-fill">Register User</h1>
          <dl>
            <dt>User Name:</dt>
            <dd>
              <input type="text" name="" id="" className="form-control" />
            </dd>
            <dt>Password</dt>
            <dd>
              <input type="password" name="" id="" className="form-control" />
            </dd>
            <dt>Age:</dt>
            <dd>
              <input type="number" name="" id="" className="form-control" />
            </dd>
            <dt>Email:</dt>
            <dd>
              <input type="email" name="" id="" className="form-control" />
            </dd>
          </dl>
          <button className="btn btn-primary w-100">Register</button>
        </form>
      </main>
    </React.Fragment>
  );
}
