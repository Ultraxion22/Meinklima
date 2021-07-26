import React from "react";
import { Media } from "react-bootstrap";

const Section = ({ children }) => {
  return (
    <section
      style={{
        margin: "0px 10% 44px 10%"
      }}
    >
      {children}
    </section>
  );
};

export default Section;
