import Image from "next/image";
import React from "react";
import Wrapper from "./components/layout/Wrapper";

const OtherBusiness = () => {
  return (
    <Wrapper>
      <section className="ds-section-dark ds-hero">
        <div className="container">
          <div className="text-white text-center">
            <h3 className="ds-hero-title text-white">Our Business Units</h3>
            <p className="ds-hero-subtitle" style={{ color: "#848E9C" }}>
              At Hanif Group, we pride ourselves on our diverse range of
              business ventures, each driven by a commitment to excellence,
              innovation, and quality. Our portfolio spans various industries,
              showcasing our expertise and dedication to meeting the needs of
              our customers and partners. Explore our key business units:
            </p>
          </div>
        </div>
      </section>
      <section className="partner-section py-60 ds-section-light">
        <div className="container">
          <div className="row gx-5 gy-30">
            <div className="col-lg-12">
              <div className="row py-10">
                <div className="col-lg-3">
                  <h4 className="text-underline body-font fw-normal mb-3 pb-30">
                    Dhaka Bank
                  </h4>
                </div>
                <div className="col-lg-9">
                  <p>
                    A leading financial institution offering a wide range of
                    banking services, including corporate banking, personal
                    banking, loans, and digital banking solutions. We are
                    dedicated to empowering financial growth and delivering
                    exceptional customer service.
                  </p>
                </div>
              </div>

              <div className="row py-10">
                <div className="col-lg-3">
                  <h4 className="text-underline body-font fw-normal mb-3 pb-30">
                    Hanif Spinning Mills
                  </h4>
                </div>
                <div className="col-lg-9">
                  <p>
                    Specializing in the production of high-quality yarn, Hanif
                    Spinning Mills plays a crucial role in the textile industry,
                    providing reliable and sustainable products to meet the
                    demands of both local and international markets.
                  </p>
                </div>
              </div>

              <div className="row py-10">
                <div className="col-lg-3">
                  <h4 className="text-underline body-font fw-normal mb-3 pb-30">
                    Hanif Steel Mills Limited
                  </h4>
                </div>
                <div className="col-lg-9">
                  <p>
                    Our state-of-the-art steel mill produces a variety of steel
                    products, including rods, bars, and sheets, supporting
                    infrastructure development and contributing to the growth of
                    the construction sector.
                  </p>
                </div>
              </div>

              <div className="row py-10">
                <div className="col-lg-3">
                  <h4 className="text-underline body-font fw-normal mb-3 pb-30">
                    Hanif Composite Mills
                  </h4>
                </div>
                <div className="col-lg-9">
                  <p>
                    A leader in the production of composite textiles, Hanif
                    Composite Mills combines modern technology with skilled
                    craftsmanship to deliver premium fabrics used in apparel,
                    home textiles, and industrial applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default OtherBusiness;
