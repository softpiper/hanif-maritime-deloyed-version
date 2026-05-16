import Head from "next/head";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/ui/call-to-action";
import { Button } from "@/components/ui/button";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Hanif Maritime Limited</title>
      </Head>
      <section className="ds-section-dark ds-hero">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <div className="text-start">
                <h1 className="ds-hero-title text-white mb-3">
                  Hanif Maritime Limited
                </h1>
                <p className="ds-hero-subtitle" style={{ color: "#848E9C" }}>
                  HANIF MARITIME LIMITED (HML) was established on 07th September
                  2021 as a sister concern of HANIF GROUP, specializing in the
                  transportation of dry bulk cargoes with International business
                  standards.
                </p>
                <Link
                  href="https://drive.google.com/file/d/1EH9jsnxZBYm-rXIF8TGogLyCkY8cxq7F/view?usp=drive_link"
                  target="_blank"
                >
                  <Button className="mt-3">Download Company Profile</Button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="position-relative overflow-hidden"
                style={{ borderRadius: "24px", border: "1px solid #2B2F36" }}
              >
                <video autoPlay muted loop playsInline className="w-100 h-auto">
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/halal-invest-d8334.appspot.com/o/hanif-maritime-ltd%2Fvideo%2FAn8x47rADOg5UxQQtauBCgofvcCV4Ktrmb9BYytNkT1yaU_7KHRNcOPWwtXKmSRqL9pbMGz7O5Np7ImISSy5vG3l.mp4?alt=media&token=d3480d7c-06e3-46f8-9350-7ae88a72cf61"
                    type="video/mp4"
                  />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section ds-section ds-section-light">
        <div className="container">
          <div className="row gy-30">
            <div className="col-lg-12">
              <div className="ds-section-head">
                <p className="ds-section-kicker">Our Capabilities</p>
                <h3 className="ds-section-title">Services</h3>
              </div>
              <div className="row gy-5">
                {[
                  {
                    id: 1,
                    title: "TRANSPORTATION of DRYBULK COMMODITIES",
                    image: "/assets/images/ship/image_1.jpeg",
                  },
                  {
                    id: 2,
                    title: "FLEET MANAGEMENT",
                    image: "/assets/images/ship/image_2.jpeg",
                  },
                  {
                    id: 3,
                    title: "CHARTERING SERVICES",
                    image: "/assets/images/ship/image_4.jpeg",
                  },
                  {
                    id: 4,
                    title: "CONSULTING SERVICES",
                    image: "/assets/images/ship/image_5.jpeg",
                  },
                ].map((service) => (
                  <div className="col-lg-3" key={service.id}>
                    <Link href="/services" className="text-decoration-none">
                      <div className="card single-team-member h-100 ds-card">
                        <div className="team-member-photo">
                          <Image
                            width={300}
                            height={300}
                            src={service.image}
                            className="card-img-top"
                            alt="service image"
                          />
                          <div className="view-full-size text-decoration-none small text-uppercase lh-sm">
                            <span className="text-white">{`0${service.id}`}</span>
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title fs-4 fw-normal mb-20">
                            {service.title}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <CTA /> */}
      <MapSection />
    </Wrapper>
  );
}
