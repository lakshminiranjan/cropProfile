import React from "react";

function ContactSection({ contactInfo }) {
  // Check if contactInfo is undefined, if so, assign an empty array
  const info = contactInfo || [];

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Here</h2>
      {info.map(({ icon, text }) => (
        <div key={text} className="contact-item">
          <img src={icon} alt="" className="contact-icon" />
          <p className="contact-info">{text}</p>
        </div>
      ))}
    </section>
  );
}

export default ContactSection;
