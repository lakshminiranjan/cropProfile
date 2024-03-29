import React from "react";

function Section({ title, text, children }) {
  return (
    <section className="about-section">
      <h2 className="section-title">{title}</h2>
      {children}
      <p className="section-text">{text}</p>
    </section>
  );
}

export default Section;
