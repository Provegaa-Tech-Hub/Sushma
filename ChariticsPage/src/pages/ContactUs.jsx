function ContactUs() {
    return (

        <section >
            <div className="about-bg-img">
                <div className="about-container">
                    <h1>Contact Us</h1>
                </div>
            </div>

            <div className="contact-box">
                <div className="row">
                    <div className="col">
                        <div className="contact-info">
                            <div className="icon-call">
                               <i class="fa-solid fa-phone-volume call-icon"></i>
                            </div>
                            <div className="txt">
                                <span className="title">Phone number</span>
                                <span className="phone">+44 204 577 0077</span>

                            </div>

                        </div>

                    </div>
                    <div className="col">
                        <div className="contact-info">
                            <div className="icon-call">
                               <i class="fa-solid fa-comment-dots"></i>
                            </div>
                            <div className="txt">
                                <span className="title">Email address </span>
                                <span className="phone">fandi@gmail.com</span>

                            </div>

                        </div>

                    </div>
                    <div className="col">
                        <div className="contact-info">
                            <div className="icon-call">
                              <i class="fa-solid fa-location-dot location-icon"></i>
                            </div>
                            <div className="txt">
                                <span className="title">Office Address</span>
                                <span className="phone">Washington Ave, NY</span>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </section>

    );
}

export default ContactUs;