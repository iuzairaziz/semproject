import React from "react";
import PostService from "../services/PostServices";
const AdForm = (props) => {
  const [nameOfOrganiztion, setNameOfOrganiztion] = React.useState();
  const [nameOfBrand, setNameOfBrand] = React.useState();
  const [name, setName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [title, setTitle] = React.useState();
  const [email, setEmail] = React.useState();
  const [mediumRequired, setMediumRequired] = React.useState();
  const [quantity, setQuantity] = React.useState();
  const [duration, setDuration] = React.useState();
  const [TotalPKR, setTotalPKR] = React.useState();
  return (
    <div class="containe-fluid">
      <div class="row mt-3">
        <div class="col-12">
          <h2>Advertisment Signage Booking Form</h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-10">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Name of Organiztion</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Name of Organiztion"
                value={nameOfOrganiztion}
                onChange={(e) => {
                  setNameOfOrganiztion(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Name of Brand</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Name of Brand"
                value={nameOfBrand}
                onChange={(e) => {
                  setNameOfBrand(e.target.value);
                }}
              />
            </div>
          </form>
          <h3>Authorized Representative Information</h3>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Name</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Phone</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div class="col-4">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Title</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Email</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <h3>Signage Specifications</h3>
        </div>
        <div class="col-4">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Medium Required</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Medium Required"
                value={mediumRequired}
                onChange={(e) => {
                  setMediumRequired(e.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label for="formGroupExampleInput2">Quantity</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div class="col-4">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput2">Duration</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Duration"
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div class="col-12">
          <h4>Standard Rack Rate of Site</h4>
        </div>
        <div class="col-10">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Total PKR</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Total PKR"
                value={TotalPKR}
                onChange={(e) => {
                  setTotalPKR(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        type="submit"
        onClick={() => {
          PostService.register({
            nameOfOrganiztion,
            nameOfBrand,
            name,
            phone,
            title,
            email,
            mediumRequired,
            duration,
            quantity,
            TotalPKR,
          });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AdForm;
