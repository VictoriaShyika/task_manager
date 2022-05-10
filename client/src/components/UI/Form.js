import React from "react";

const Form = ({ children }) => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body px-5 py-5 text-center">
                <div className="mb-md-2 mt-md-2">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
