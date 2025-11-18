import React from 'react';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Check the console)');
    const formData = new FormData(e.target);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Fill out the form below to get in touch.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;