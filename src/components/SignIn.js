import userService from "../services/UsersService";

import React from "react";
const SignIn = (props) => {
  const [email, setEmail] = React.useState("admin@gmail.com");
  const [password, setPassword] = React.useState("1234");
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                userService
                  .login(email, password)
                  .then((data) => {
                    console.log(data);
                    window.location.href = "/";
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
