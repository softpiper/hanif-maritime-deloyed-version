import React from "react";
import Wrapper from "./components/layout/Wrapper";

const contact = () => {
  return (
    <Wrapper>
      <section
        className="bg-secondary"
        style={{
          backgroundColor: "rgba(15, 15, 15, 1)",
          backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
          backgroundSize: "20px 20px",
        }}
      >
        <div className="container">
          <div className="text-white text-center py-24">
            <h3 className="text-uppercase fw-bold lh-lg letter-spacing-lg">
              Contact Us
            </h3>
            <p className="font-monospace">
              We are here to assist you with any inquiries or support you may
              need. Reach out to us through the following contact details, and
              our team will be more than happy to help.Feel free to get in touch
              with us for any business inquiries, partnership opportunities, or
              customer support. We look forward to hearing from you!
            </p>
          </div>
        </div>
      </section>
      <section className="news-section py-60">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="text-underline fw-bold fs-2 mb-30 pb-20">
                Get in Touch
              </h1>
              <ul className="list-unstyled ps-0 d-grid gap-2">
                <li>
                  <i className="fa-solid fa-location-dot text-primary" />
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "black",
                      fontWeight: 600,
                    }}
                  >
                    Head Office:{" "}
                  </span>
                  <br />
                  <span style={{ marginLeft: "10px" }}>
                    House # 86,Level # 3 Road # 14, Block # B, Banani,
                    Dhaka-1213
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot text-primary" />
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "black",
                      fontWeight: 600,
                    }}
                  >
                    Corporate Office:{" "}
                  </span>
                  <br />
                  <span style={{ marginLeft: "10px" }}>
                    73/1, Hrishikesh Das road, Narinda, Dholaikhal, Dhaka-1100
                  </span>
                </li>

                <li>
                  <a
                    href="tel:880255033661"
                    className="text-decoration-none d-flex gap-2 text-white text-opacity-75"
                  >
                    <i className="fa-solid fa-phone text-primary" />
                    <span className="text-black">+880255033661</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:operation.hml@hanif-group.com"
                    className="text-decoration-none d-flex gap-2 text-black text-opacity-75"
                  >
                    <i className="fa-solid fa-envelope-open-text text-primary" />
                    <span>operation.hml@hanif-group.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:technical.hml@hanif-group.com"
                    className="text-decoration-none d-flex gap-2 text-black text-opacity-75"
                  >
                    {/* <i className="fa-solid fa-envelope-open-text text-primary" /> */}
                    <span>technical.hml@hanif-group.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:chartering.hml@hanif-group.com"
                    className="text-decoration-none d-flex gap-2 text-black text-opacity-75"
                  >
                    {/* <i className="fa-solid fa-envelope-open-text text-primary" /> */}
                    <span>chartering.hml@hanif-group.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <section className="news-section py-60">
                <div className="container">
                  <div className="mb-5">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link active"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          <span>Registered Office</span>
                        </button>

                        <button
                          className="nav-link"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          <span>Corporate Office</span>
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex={0}
                      >
                        <div>
                          <iframe
                            className="w-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645.5513484633101!2d90.36603434816318!3d23.7548708855554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfe7a8762d9b%3A0x575459e5dc5cb81d!2sbanani!5e0!3m2!1sen!2sbd!4v1724608130731!5m2!1sen!2sbd"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex={0}
                      >
                        <div>
                          <iframe
                            className="w-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.3152553771094!2d90.41779544652215!3d23.71011964834106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ac11781ed3%3A0xce5f90a9f0ea3bea!2sHanif%20Spinning%20Mills%20Limited!5e0!3m2!1sen!2sbd!4v1753003817806!5m2!1sen!2sbd"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default contact;
