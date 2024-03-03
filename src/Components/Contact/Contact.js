import React, { useState } from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Contact() {
  const [Name, setName] = useState("");
  const [EMail, setEMail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");

  const ContactData = (e) => {
    e.preventDefault();
    const Data = {
      Name: Name,
      EMail: EMail,
      Phone: Phone,
      Address: Address,
    };
    localStorage.setItem("formData", JSON.stringify(Data));

    setName("");
    setEMail("");
    setName("");
    setPhone("");
  };
  return (
    <>
      <h2 className="text-center">Contact us</h2>
      <div className="container">
        <Helmet>
          <title>Contact|fantasygyaan.com</title>
          <meta name="description" content="If you have any Query about anything contact us. we will solve your Query as soon as possible." />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        </Helmet>
        <div className="row g-2">
          <div className="col">
            <label htmlFor="input name" className="form-label my-1">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <label htmlFor="input name" className="form-label my-1">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label my-1">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={EMail}
              onChange={(e) => setEMail(e.target.value)}
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label my-1">
              Mobile no
            </label>
            <input
              type="phone no"
              className="form-control"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Issue
            </label>
            <input
              type="text"
              className="form-control w-100"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              id="inputAddress"
              placeholder="write about your issue"
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={ContactData}
            >
              Submit
            </button>
          </div>
        </form>
        <h6 className="my-3 container">
          If you have any issue DM on this account- click on the icon.-{" "}
          <Link to="https://www.instagram.com/fantasygyaan9/">
            {" "}
            <span>
              <BiLogoInstagram size={"2.5rem"} />
            </span>
          </Link>{" "}
        </h6>
      </div>
    </>
  );
}

export default Contact;
