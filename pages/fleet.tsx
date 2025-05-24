import Link from "next/link";
import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import PricingDemo from "./components/ShipsComparison";

const index = () => {
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
              OCEAN GOING VESSELS
            </h3>
            <p className="font-monospace">
              Hanif Maritime Limited operates a modern and diverse fleet of dry
              bulk carriers. Each ship is equipped with the latest technology to
              ensure optimal performance, safety, and environmental compliance.
              Our goal is to continue to grow our fleet size over time to
              establish a world reputed shipping company.
            </p>
            <p className="font-monospace">
              Currently, we are managing 3 Supramax vessel and another 2/3
              vessels are on the pipeline
            </p>
          </div>
        </div>
      </section>

      <PricingDemo />
    </Wrapper>
  );
};

export default index;
