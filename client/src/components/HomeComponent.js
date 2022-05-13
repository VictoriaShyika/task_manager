import React from "react";

const HomeComponent = ({children}) => {
  return (
    <section className="min-vh-100 bg-primary bg-opacity-25">
      {children}
    </section>
  );
};

export default HomeComponent;
