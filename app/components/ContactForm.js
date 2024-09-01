
const ContactForm = () => {
  return (
    <section className="contact_area section_gap">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="contact_info">
          <div className="info_item">
            <i className="lnr lnr-home" />
            <h6>Lahore, Pakistan</h6>
            <p>Model Town Link Road</p>
          </div>
          <div className="info_item">
            <i className="lnr lnr-phone-handset" />
            <h6>
              <a href="#">(+92)-316-0971327</a>
            </h6>
            <p>Mon to Fri 9am to 6 pm</p>
          </div>
          <div className="info_item">
            <i className="lnr lnr-envelope" />
            <h6>
              <a href="#">ahamxa92@gmail.com</a>
            </h6>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <form
          className="row contact_form"
          action="contact_process.php"
          method="post"
          id="contactForm"
          noValidate="novalidate"
        >
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Enter Subject"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows={1}
                placeholder="Enter Message"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-md-12 text-right">
            <button type="submit" value="submit" className="primary_btn">
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div id="mapBox"
     className="mapBox"
     data-lat="31.4702"
     data-lon="74.2990"
     data-zoom={13}
     data-info="Model Town, Lahore, Pakistan."
     data-mlat="31.4702"
     data-mlon="74.2990">
</div>

  </div>
</section>

  )
}

export default ContactForm
