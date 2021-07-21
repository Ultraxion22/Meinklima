import React from "react";

const Section = ({ children }) => {
  return (
    <section
      style={{
        margin: "20px 10% 20px 10%"
      }}
    >
      {children}
    </section>
  );
};

export default Section;
