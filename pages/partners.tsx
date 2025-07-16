import React, { useEffect } from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import BunkerPartnersList from "./components/partners/bunkerPartnersList";
import CharteringPartnersList from "./components/partners/charteringPartnersList";
import OfficialPartnersList from "./components/partners/officialPartners";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <Wrapper>
      <section
        className="bg-secondary position-relative overflow-hidden"
        style={{
          backgroundColor: "#0a1128",
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)`,
          backgroundSize: "50px 50px",
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Decorative elements */}
        <div
          className="position-absolute"
          style={{
            width: "300px",
            height: "300px",
            background:
              "linear-gradient(45deg, rgba(0, 123, 255, 0.15), rgba(0, 183, 255, 0.05))",
            borderRadius: "50%",
            filter: "blur(80px)",
            top: "-100px",
            left: "-100px",
            zIndex: 0,
          }}
        ></div>

        <div
          className="position-absolute"
          style={{
            width: "250px",
            height: "250px",
            background:
              "linear-gradient(45deg, rgba(255, 123, 0, 0.1), rgba(255, 183, 0, 0.05))",
            borderRadius: "50%",
            filter: "blur(80px)",
            bottom: "-50px",
            right: "-50px",
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-white text-center py-5">
            <motion.h2
              className="display-4 fw-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="border-bottom border-primary pb-2">
                OUR PARTNERS
              </span>
            </motion.h2>
            <motion.p
              className="lead text-light-50 mx-auto"
              style={{ maxWidth: "700px" }}
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

      <section
        className="py-5"
        style={{
          background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
        }}
      >
        <div className="container py-4">
          <div className="col-lg-12">
            <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden">
              {/* <div className="card-header bg-primary bg-opacity-10 py-3">
                  <h4 className="mb-0 text-primary">Official Partners</h4>
                </div> */}
              <div className="card-body">
                <OfficialPartnersList />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden">
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
              <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
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
