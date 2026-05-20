import Link from "next/link";
import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";

const index = () => {
  return (
    <Wrapper>
      <section className="ds-section-dark ds-hero">
        <div className="container">
          <div className="text-white text-center">
            <h3 className="ds-hero-title text-white">Services</h3>
            <p
              className="ds-hero-subtitle"
              style={{ color: "var(--ds-slate)" }}
            >
              Hanif Maritime Ltd aims to expand its fleet with next-generation
              eco-friendly vessels and explore new markets to enhance our
              service offerings. We are committed to leveraging technological
              advancements to improve operational efficiency and environmental
              performance.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section ds-section ds-section-light">
        <div className="container">
          <div className="row gx-5 gy-30">
            <div className="col-lg-12">
              <div className="ds-section-head">
                <p className="ds-section-kicker">What We Do</p>
                <h2 className="ds-section-title">Service Lines</h2>
              </div>
              <div className="row gy-5">
                <div className="col-lg-3">
                  <div className="card single-team-member h-100 ds-card">
                    <div className="team-member-photo">
                      <Image
                        width={300}
                        height={300}
                        src={"/assets/images/ship/image_1.jpeg"}
                        className="card-img-top"
                        alt="service image"
                      />
                      <Link
                        href=""
                        className="view-full-size text-decoration-none small text-uppercase lh-sm"
                      >
                        <span className="text-white">01</span>
                      </Link>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fs-4 fw-normal mb-20">
                        TRANSPORTATION OF DRYBULK COMMODITIES
                      </h5>

                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">Iron Ore</p>
                      </div>
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">Grain</p>
                      </div>
                      {/* <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">Alumina</p>
                      </div> */}
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">Agreegates</p>
                      </div>
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">Cement</p>
                      </div>
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">Fertilizer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="card single-team-member h-100 ds-card">
                    <div className="team-member-photo">
                      <Image
                        width={300}
                        height={300}
                        src="/assets/images/ship/image_2.jpeg"
                        className="card-img-top"
                        alt="service image"
                      />
                      <Link
                        href=""
                        className="view-full-size text-decoration-none small text-uppercase lh-sm"
                      >
                        <span className="text-white">02</span>
                      </Link>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fs-4 fw-normal mb-20">
                        FLEET MANAGEMENT
                      </h5>

                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          Technical Management
                        </p>
                      </div>
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          Crew Management
                        </p>
                      </div>

                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          Safety and Compliance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="card single-team-member h-100 ds-card">
                    <div className="team-member-photo">
                      <Image
                        width={300}
                        height={300}
                        src="/assets/images/ship/image_4.jpeg"
                        className="card-img-top"
                        alt="service image"
                      />
                      <Link
                        href=""
                        className="view-full-size text-decoration-none small text-uppercase lh-sm"
                      >
                        <span className="text-white">03</span>
                      </Link>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fs-4 fw-normal mb-20">
                        CHARTERING SERVICES
                      </h5>

                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          Voyage Charter: Offering single voyage services
                          tailored to specific customer requirements
                        </p>
                      </div>
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          Time Charter:Providing vessels for extended periods,
                          allowing clients greater flexibility and control over
                          their shipping schedules.
                        </p>
                      </div>
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          Bareboat Charter: Proving vessel for time bad charter
                        </p>
                      </div>
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          COA (Contract of Affreightment): Long-term agreements
                          for regular transport of bulk cities, ensuring
                          reliable and predictable shipping solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="card single-team-member h-100 ds-card">
                    <div className="team-member-photo">
                      <Image
                        width={300}
                        height={300}
                        src="/assets/images/ship/image_5.jpeg"
                        className="card-img-top"
                        alt="service image"
                      />
                      <Link
                        href=""
                        className="view-full-size text-decoration-none small text-uppercase lh-sm"
                      >
                        <span className="text-white">04</span>
                      </Link>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fs-4 fw-normal mb-20">
                        CONSULTING SERVICES
                      </h5>

                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          Operational Efficiency
                        </p>
                      </div>
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          Market Analysis
                        </p>
                      </div>
                      <div className="ps-3 position-relative">
                        <span className="square-primary"></span>
                        <p className="heading-font fw-bold small">
                          Regulatory Compliance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default index;
