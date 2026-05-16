/* eslint-disable */
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/company", label: "Company" },
  { path: "/fleet", label: "Fleet" },
  { path: "/services", label: "Services" },
  { path: "/partners", label: "Partners" },
  { path: "/gallery", label: "Gallery" },
  { path: "/other-business", label: "Other Business" },
  { path: "https://hanif-group.com:2096", label: "Webmail" },
  { path: "/contact", label: "Contact" },
];
const Header = () => {
  const router = useRouter();
  return (
    <header
      id="navbar_top"
      className="transparent-header position-fixed"
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <div className="container">
        <nav
          className="navbar navbar-expand-lg py-3 py-lg-0 border-bottom"
          style={{ borderColor: "#E6E8EA" }}
        >
          <Link className=" site-logo navbar-brand" href="/" rel="home">
            <Image
              className="logo-dark"
              src="/assets/images/logo.png"
              width={300}
              height={50}
              alt="Hanif Maritime Limited"
            />
            <Image
              className="logo-light"
              src="/assets/images/logo.png"
              width={300}
              height={50}
              alt="Hanif Maritime Limited"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#main_nav"
            aria-controls="main_nav"
            style={{ backgroundColor: "#1E2026" }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-lg offcanvas-end p-3 p-lg-0"
            style={{ backgroundColor: "#FFFFFF", width: "300px" }}
            id="main_nav"
            tabIndex={-1}
          >
            <div className="offcanvas-body align-items-center">
              <div className="offcanvas-header px-0 justify-content-end">
                <button
                  type="button"
                  className="btn-close btn-close-dark"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ backgroundColor: "#1E2026" }}
                />
              </div>

              <ul className="navbar-nav ms-lg-auto">
                {navItems.map((item) => (
                  <li key={item.path} className="nav-item dropdown">
                    <Link
                      className={
                        router.pathname === item.path
                          ? "nav-link ds-nav-link active"
                          : "nav-link ds-nav-link"
                      }
                      href={item.path}
                      style={
                        item.label === "Contact"
                          ? undefined
                          : { color: "#32313A" }
                      }
                    >
                      {item.label === "Contact" ? (
                        <span className="ds-nav-cta">Contact</span>
                      ) : (
                        item.label
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>{" "}
          {/* navbar-collapse.// */}
        </nav>
      </div>{" "}
      {/* container.// */}
    </header>
  );
};

export default Header;
