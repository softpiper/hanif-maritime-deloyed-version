import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer-section pt-5"
      style={{ backgroundColor: "#222126", color: "#848E9C" }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 col-12">
            <p
              style={{ color: "#FFFFFF", fontWeight: 500 }}
              className="text-lg"
            >
              HANIF MARITIME LIMITED (HML) was established on 07th September
              2021 as a sister concern of HANIF GROUP, specializing in the
              transportation of dry bulk cargoes with International business
              standards.
            </p>
          </div>
          <div className="col-lg-2 col-6">
            <div className="footer-links">
              <h6 className="mb-4 fw-semibold text-white">USEFUL LINKS</h6>
              <ul className="list-unstyled d-grid gap-1">
                {[
                  { href: "/company", label: "Company" },
                  { href: "/services", label: "Services" },
                  { href: "/partners", label: "Partners" },
                  { href: "/contact", label: "Contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-decoration-none d-flex gap-2"
                      style={{ color: "#848E9C" }}
                    >
                      <i
                        className="bi bi-arrow-right"
                        style={{ color: "#F0B90B" }}
                      />
                      <span className="text-lg">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <h6 className="mb-4 fw-semibold text-white">GET IN TOUCH</h6>
            <ul className="list-unstyled ps-0 d-grid gap-2">
              <li>
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "#F0B90B" }}
                />
                <span
                  style={{
                    marginLeft: "10px",
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  Head Office:{" "}
                </span>
                <br />
                <span style={{ marginLeft: "10px" }}>
                  House # 86,Level # 3 Road # 14, Block # B, Banani, Dhaka-1213
                </span>
              </li>
              <li>
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "#F0B90B" }}
                />
                <span
                  style={{
                    marginLeft: "10px",
                    color: "#FFFFFF",
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
                  className="text-decoration-none d-flex gap-2"
                  style={{ color: "#848E9C" }}
                >
                  <i
                    className="fa-solid fa-phone"
                    style={{ color: "#F0B90B" }}
                  />
                  <span>+880255033661</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:operation.hml@hanif-group.com"
                  className="text-decoration-none d-flex gap-2"
                  style={{ color: "#848E9C" }}
                >
                  <i
                    className="fa-solid fa-envelope-open-text"
                    style={{ color: "#F0B90B" }}
                  />
                  <span>operation.hml@hanif-group.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:technical.hml@hanif-group.com"
                  className="text-decoration-none d-flex gap-2"
                  style={{ color: "#848E9C" }}
                >
                  {/* <i className="fa-solid fa-envelope-open-text text-primary" /> */}
                  <span>technical.hml@hanif-group.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:chartering.hml@hanif-group.com"
                  className="text-decoration-none d-flex gap-2"
                  style={{ color: "#848E9C" }}
                >
                  {/* <i className="fa-solid fa-envelope-open-text text-primary" /> */}
                  <span>chartering.hml@hanif-group.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright" style={{ backgroundColor: "#1E2026" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap py-4">
            <p className="mb-lg-0">
              © {new Date().getFullYear()} Hanif Maritime Limited. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
