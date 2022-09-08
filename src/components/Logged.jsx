import React from "react";
import { Link } from "react-router-dom";

const Logged = () => {
  return (
    <React.Fragment>
      <div className="container text-center">
        <br />
        <p className="h4 text-info my-5">
          welcome! you are logged successfully...{" "}
        </p>
        <Link to="/" className="btn btn-outline-info ">
          LOGIN PAGE
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Logged;
