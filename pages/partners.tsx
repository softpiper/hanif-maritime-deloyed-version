import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import BunkerPartnersList from "./components/bunkerPartnersList";
import CharteringPartnersList from "./components/charteringPartnersList";

const Partners = () => {
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
              OUR PARTNERS
            </h3>
            <div className="mt-4"></div>
            <p className="mb-2">
              <strong>P&I CLUB:</strong> West Of England
            </p>
            <p>
              <strong>Our Banker:</strong> Emirates NBD Bank PJSC
            </p>
          </div>
        </div>
      </section>

      <section className="casestudies-section py-60">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <BunkerPartnersList />
            </div>
            <div className="col-md-8">
              <CharteringPartnersList />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Partners;
