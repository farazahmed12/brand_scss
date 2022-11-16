import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact</h1>
        <form>
          <div>
            <label>Name</label>
            <input required placeholder="Your Name" type="text" />
          </div>
          <div>
            <label>Email</label>
            <input required placeholder="Your Email" type="email" />
          </div>
          <div>
            <label>Message</label>
            <input required placeholder="Your Message" type="text" />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
