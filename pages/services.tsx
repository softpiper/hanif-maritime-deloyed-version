import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import { motion } from "framer-motion";

const accent = "#1EAEDB";

const chipStyle = {
  border: "1px solid rgba(14, 165, 233, 0.18)",
  background: "rgba(14, 165, 233, 0.06)",
  color: "#243447",
  borderRadius: "999px",
  fontSize: "13px",
  padding: "0.65rem 0.9rem",
  lineHeight: 1.25,
};

const dotStyle = {
  width: "8px",
  height: "8px",
  borderRadius: "999px",
  background: accent,
  marginTop: "0.55rem",
  flexShrink: 0,
};

const sectionImageStyle = {
  position: "relative" as const,
  height: "220px",
  overflow: "hidden",
};

const imageBadgeStyle = {
  position: "absolute" as const,
  top: "16px",
  left: "16px",
  zIndex: 2,
  background: "rgba(15, 23, 42, 0.72)",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "999px",
  padding: "0.4rem 0.75rem",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.12em",
};

const commodities = [
  "Iron ore",
  "Fertilizers",
  "Grain",
  "Cement",
  "Salt",
  "Aggregate stone",
  "Clinker",
  "Coal",
  "Limestone",
  "Dolomite",
  "Slag",
  "Gypsum",
  "Steel cargo",
  "Chrome ore",
  "Alumina",
];

const fleetManagementPoints = [
  "Technical Management",
  "Crew Management",
  "Safety and Compliance",
];

const consultingPoints = [
  "Operational Efficiency",
  "Market Analysis",
  "Regulatory Compliance",
];

const index = () => {
  const charteringServices = [
    {
      title: "Voyage Charter",
      tagline: "Move Your Cargo with Confidence",
      summary:
        "Whether it's a single shipment or a spot cargo opportunity, we deliver reliable voyage solutions that balance cost, speed, and operational excellence.",
      gains: [
        "Fast freight quotations",
        "Competitive market pricing",
        "Reliable vessel nominations",
        "Efficient port operations",
        "Real-time voyage updates",
        "Dedicated commercial support from fixture to completion",
      ],
    },
    {
      title: "Time Charter",
      tagline: "Reliable Tonnage. Maximum Flexibility.",
      summary:
        "Secure dedicated vessel capacity without the burden of vessel ownership. Our time charter solutions allow you to focus on your trading while we ensure safe and efficient vessel management.",
      gains: [
        "Guaranteed vessel availability",
        "Flexible worldwide trading (within agreed limits)",
        "Expert technical management",
        "High fleet reliability",
        "Reduced operational risk",
        "Single point of contact throughout the charter period",
      ],
    },
    {
      title: "Bareboat Charter",
      tagline: "Expand Your Fleet Without Buying a Vessel",
      summary:
        "Our bareboat charter service offers long-term access to quality dry bulk vessels, enabling operators to grow their business with complete operational control.",
      gains: [
        "Long-term fleet solutions",
        "Commercial flexibility",
        "Well-maintained vessels",
        "Cost-effective alternative to ownership",
        "Trusted owner partnership",
        "Tailored charter structures",
      ],
    },
    {
      title: "Contract of Affreightment (COA)",
      tagline: "Long-Term Shipping Solutions for Your Supply Chain",
      summary:
        "We help cargo producers, traders, and industrial customers move large cargo volumes through customized transportation programs designed for reliability and efficiency.",
      gains: [
        "Assured transport capacity",
        "Predictable logistics costs",
        "Flexible vessel scheduling",
        "Reduced market exposure",
        "Dedicated account management",
        "Long-term strategic partnership",
      ],
    },
  ];

  const partnerPoints = [
    "Commercial flexibility",
    "Safe and compliant operations",
    "Transparent communication",
    "On-time performance",
    "Global market expertise",
    "Long-term partnerships built on trust",
  ];

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
              SERVICES
            </motion.h2>
            <motion.p
              className="ds-hero-subtitle mx-auto"
              style={{ maxWidth: "700px", color: "var(--ds-slate)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hanif Maritime Ltd aims to expand its fleet with next-generation
              eco-friendly vessels and explore new markets to enhance our
              service offerings. We are committed to leveraging technological
              advancements to improve operational efficiency and environmental
              performance.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="service-section ds-section ds-section-light">
        <div className="container">
          <div className="ds-section-head text-center">
            <p className="ds-section-kicker">What We Do</p>
            <h2 className="ds-section-title">Service Portfolio</h2>
            <p
              className="mx-auto mb-0"
              style={{ maxWidth: "760px", color: "var(--bs-secondary-color)" }}
            >
              We structure our services around the cargo, the vessel, and the
              commercial outcome. Each service line is designed to be flexible,
              dependable, and easy to manage.
            </p>
          </div>

          <div className="row g-4 mt-2 align-items-stretch">
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
                className="ds-card h-100 overflow-hidden"
              >
                <div style={sectionImageStyle}>
                  <Image
                    fill
                    src="/assets/images/ship/image_1.jpeg"
                    className="object-cover"
                    alt="Transportation of Dry Bulk Commodities"
                    sizes="(max-width: 991px) 100vw, 40vw"
                  />
                  <span style={imageBadgeStyle}>01</span>
                </div>
                <div className="p-4 p-xl-4">
                  <p className="ds-section-kicker mb-2">Core Cargo</p>
                  <h3 className="h4 mb-3">
                    Transportation of Dry Bulk Commodities
                  </h3>
                  <p className="mb-4 text-secondary" style={{ lineHeight: 1.7 }}>
                    We move essential raw materials with dependable schedules,
                    careful cargo handling, and a focus on predictable
                    execution.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {commodities.map((item) => (
                      <span key={item} style={chipStyle}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="ds-card h-100 overflow-hidden"
              >
                <div style={sectionImageStyle}>
                  <Image
                    fill
                    src="/assets/images/ship/image_4.jpeg"
                    className="object-cover"
                    alt="Chartering Services"
                    sizes="(max-width: 991px) 100vw, 55vw"
                  />
                  <span style={imageBadgeStyle}>02</span>
                </div>
                <div className="p-4 p-xl-4">
                  <p className="ds-section-kicker mb-2">Commercial Desk</p>
                  <h3 className="h4 mb-3">Chartering Services</h3>
                  <p className="mb-4 text-secondary" style={{ lineHeight: 1.7 }}>
                    Our chartering team structures flexible solutions for spot
                    cargoes, long-term capacity, and strategic shipping
                    programs.
                  </p>

                  <div className="row g-3">
                    {charteringServices.map((service) => (
                      <div className="col-xl-6" key={service.title}>
                        <div
                          className="h-100 rounded-4 p-4"
                          style={{
                            border: "1px solid rgba(15, 23, 42, 0.08)",
                            background:
                              "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(255,255,255,1) 100%)",
                          }}
                        >
                          <p
                            className="text-uppercase small fw-semibold mb-2"
                            style={{ color: accent, letterSpacing: "0.12em" }}
                          >
                            {service.title}
                          </p>
                          <h4 className="h6 fw-semibold mb-2">
                            {service.tagline}
                          </h4>
                          <p
                            className="small text-secondary mb-3"
                            style={{ lineHeight: 1.65 }}
                          >
                            {service.summary}
                          </p>
                          <p className="fw-semibold small mb-2">What you gain</p>
                          <div className="d-flex flex-wrap gap-2">
                            {service.gains.map((gain) => (
                              <span key={gain} style={chipStyle}>
                                {gain}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="ds-card h-100 overflow-hidden"
              >
                <div style={sectionImageStyle}>
                  <Image
                    fill
                    src="/assets/images/ship/image_2.jpeg"
                    className="object-cover"
                    alt="Fleet Management"
                    sizes="(max-width: 991px) 100vw, 45vw"
                  />
                  <span style={imageBadgeStyle}>03</span>
                </div>
                <div className="p-4">
                  <p className="ds-section-kicker mb-2">Vessel Oversight</p>
                  <h3 className="h4 mb-3">Fleet Management</h3>
                  <p className="mb-4 text-secondary" style={{ lineHeight: 1.7 }}>
                    Professional technical, crew, and safety management to keep
                    vessels operating reliably and in full compliance.
                  </p>
                  <div className="d-grid gap-3">
                    {fleetManagementPoints.map((point) => (
                      <div
                        key={point}
                        className="d-flex align-items-start gap-3"
                      >
                        <span style={dotStyle} />
                        <p className="mb-0 fw-semibold">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="ds-card h-100 overflow-hidden"
              >
                <div style={sectionImageStyle}>
                  <Image
                    fill
                    src="/assets/images/ship/image_5.jpeg"
                    className="object-cover"
                    alt="Consulting Services"
                    sizes="(max-width: 991px) 100vw, 45vw"
                  />
                  <span style={imageBadgeStyle}>04</span>
                </div>
                <div className="p-4">
                  <p className="ds-section-kicker mb-2">Advisory Support</p>
                  <h3 className="h4 mb-3">Consulting Services</h3>
                  <p className="mb-4 text-secondary" style={{ lineHeight: 1.7 }}>
                    Practical advice for commercial, operational, and
                    regulatory decisions across shipping and logistics.
                  </p>
                  <div className="d-grid gap-3">
                    {consultingPoints.map((point) => (
                      <div
                        key={point}
                        className="d-flex align-items-start gap-3"
                      >
                        <span style={dotStyle} />
                        <p className="mb-0 fw-semibold">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section ds-section pt-0">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="position-relative overflow-hidden rounded-5 p-4 p-lg-5 text-white"
            style={{
              background:
                "linear-gradient(135deg, #102131 0%, #1b3144 55%, #12202e 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div
              className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(30,174,219,0.45), transparent 55%)",
                pointerEvents: "none",
              }}
            />
            <div className="row g-4 align-items-center position-relative">
              <div className="col-lg-5">
                <p className="ds-section-kicker text-white mb-2">
                  Why Partner With Us?
                </p>
                <h2 className="ds-section-title text-white mb-3">
                  Dependable shipping solutions backed by experience
                </h2>
                <p
                  className="mb-0"
                  style={{
                    color: "rgba(234, 243, 249, 0.82)",
                    lineHeight: 1.8,
                  }}
                >
                  At Hanif Maritime Limited, we don&apos;t simply provide
                  vessels, we deliver dependable shipping solutions backed by
                  experience, operational excellence, and responsive customer
                  service.
                </p>
              </div>

              <div className="col-lg-7">
                <p className="fw-semibold mb-3 text-white">Our commitment includes:</p>
                <div className="row g-3">
                  {partnerPoints.map((point) => (
                    <div className="col-sm-6" key={point}>
                      <div
                        className="d-flex align-items-start gap-3 h-100 rounded-4 p-3"
                        style={{
                          background: "rgba(255, 255, 255, 0.06)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        <span
                          style={{
                            ...dotStyle,
                            marginTop: "0.45rem",
                            background: "#7dd3fc",
                          }}
                        />
                        <span style={{ lineHeight: 1.65, color: "#EAF3F9" }}>
                          {point}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
};

export default index;
