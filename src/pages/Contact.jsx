import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" contactGrid ">
      <div className="contactGrid-contact glass-content">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out for collaboration or just to say hello! Email
          me at
          <a href="mailto:chrisbwatkins@gmail.com">chrisbwatkins@gmail.com</a>
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/christopher-benjamin-watkins/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Tevvels/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="contactGrid-form glass-content">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
