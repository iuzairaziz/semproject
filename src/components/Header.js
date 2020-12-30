import { withRouter } from "react-router";
import userService from "../services/UsersService";
const Header = (props) => {
  return (
    <header>
      <div className="conatiner-fluid">
        <div className="row topbar">
          <div className="col-4">
            <img
              src="data:image/jpeg;base64,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"
              alt="Logo"
              width="300"
              height="150"
            />
          </div>
          <div className="col-8">
            <div className="btn-grp">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  props.history.push("/Home");
                }}
              >
                Home
              </button>
              <button
                type="button"
                className="btn btn-danger"
                type="submit"
                onClick={() => {
                  props.history.push("/AboutUs");
                }}
              >
                About Us
              </button>
              <button
                type="button"
                className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                type="submit"
                onClick={() => {
                  props.history.push("/aboutus");
                }}
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  About Us
                </a>
                <a className="dropdown-item" href="#">
                  About the Mall
                </a>
              </div>
              <button
                type="button"
                className="btn btn-danger"
                type="submit"
                onClick={() => {
                  props.history.push("/AdForm");
                }}
              >
                Advertise
              </button>
              <button
                type="button"
                className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Activity Form
                </a>
                <a className="dropdown-item" href="#">
                  Signage Form
                </a>
              </div>
              <button type="button" className="btn btn-danger">
                Contact
              </button>
              <button
                type="button"
                className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Contact Us
                </a>
                <a className="dropdown-item" href="#">
                  Send Feedback
                </a>
              </div>
              {!userService.isLoggedIn() ? (
                <>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => {
                      props.history.push("/register");
                    }}
                  >
                    Sign Up
                  </button>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => {
                      props.history.push("/login");
                    }}
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => {
                    userService.logout();
                    window.location.reload();
                  }}
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
