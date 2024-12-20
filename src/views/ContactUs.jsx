import './ContactUs.css';

export default function ContactUs() {
    return (
      <section className="contact-us">
        <h2 className="text-left">Contact Us</h2>
        <p className="text-left">
          We would love to hear from you! Whether you have questions, feedback, or inquiries, please reach out using the form below.
        </p>
        <form className="contact-form" style={{ maxWidth: '500px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" id="name" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input type="tel" id="phone" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea id="message" className="form-control" rows="4" required></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
  