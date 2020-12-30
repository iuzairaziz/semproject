import userService from "../services/UsersService";
import React from "react";
const SignUp = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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
              <label for="exampleInputEmail1">UserName</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
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
              class="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                userService
                  .register(name, email, password)
                  .then((res) => {
                    props.history.push("/login");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                // window.location.href = "/login";
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

export default SignUp;
