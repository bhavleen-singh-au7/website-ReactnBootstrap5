import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`
    My name is ${data.fullname}.
    My mobile number is ${data.phone}.
    My Email Address is ${data.email}.
    I want to say ${data.msg}.
    `);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container container-div mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="full_name">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="full_name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="ph_no">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ph_no"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your Phone Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
                <small
                  id="emailHelp"
                  className="form-text text-muted"
                >
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="msg">Message</label>
                <br />
                <textarea
                  id="msg"
                  name="msg"
                  style={{ height: "5%", width: "100%" }}
                  required
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="type your message here"
                  className="p-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
