import React from "react";
import Wrapper from "./components/layout/Wrapper";
import BunkerPartnersList from "./components/partners/bunkerPartnersList";
import CharteringPartnersList from "./components/partners/charteringPartnersList";
import OfficialPartnersList from "./components/partners/officialPartners";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <Wrapper>
      <section className="ds-section-dark position-relative overflow-hidden ds-hero">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-white text-center">
            <motion.h2
              className="ds-hero-title text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              OUR PARTNERS
            </motion.h2>
            <motion.p
              className="ds-hero-subtitle mx-auto"
              style={{ maxWidth: "700px", color: "#848E9C" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We collaborate with industry leaders to provide exceptional
              maritime services and solutions
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-5 ds-section-light">
        <div className="container py-4">
          <div className="col-lg-12">
            <div className="card border-0 h-100 overflow-hidden ds-card">
              {/* <div className="card-header bg-primary bg-opacity-10 py-3">
                  <h4 className="mb-0 text-primary">Official Partners</h4>
                </div> */}
              <div className="card-body">
                <OfficialPartnersList />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card border-0 h-100 overflow-hidden ds-card">
              {/* <div className="card-header bg-info bg-opacity-10 py-3">
                  <h4 className="mb-0 text-info">Bunker Partners</h4>
                </div> */}
              <div className="card-body">
                <BunkerPartnersList />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="card border-0 overflow-hidden ds-card">
                {/* <div className="card-header bg-success bg-opacity-10 py-3">
                  <h4 className="mb-0 text-success">Chartering Partners</h4>
                </div> */}
                <div className="card-body">
                  <CharteringPartnersList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Partners;
