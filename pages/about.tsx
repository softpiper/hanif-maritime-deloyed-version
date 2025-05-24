import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
              HANIF MARITIME LIMITED
            </h3>
          </div>
        </div>
      </section>

      <section className="py-60">
        <div className="container">
          <div className="row gy-30">
            <div className="col-lg-6">
              <div className="">
                <div className="flex flex-row justify-between">
                  <h2 className="text-underline-sm pb-3 mb-3">
                    <span className="text-primary pe-2">About</span> the
                    Chairman
                  </h2>
                  <Link
                    href="https://drive.google.com/file/d/1EH9jsnxZBYm-rXIF8TGogLyCkY8cxq7F/view?usp=drive_link"
                    target="_blank"
                  >
                    <Button>Download Company Profile</Button>
                  </Link>
                </div>

                <p className="text-muted pb-3">
                  Mr. Mohammed Hanif is the Vice-Chairman of the Dhaka Bank PLC.
                  An experienced businessman, Mr. Mohammed Hanif is a renowned
                  industrialist in the country. He has made remarkable
                  contribution towards business and Banking in Bangladesh. The
                  industrialist has a business career that extends over as long
                  as 54 years. He is the Managing Director of Hanif Maritime
                  Ltd., Hanif Steels Ltd., Hanif Spinning Mills Ltd incorporated
                  with Marubeni Corporation since 2002, and National Foundry &
                  Engineering Works (Pvt.) Ltd. Mr. Hanif is a Sponsor Director
                  and one of the long serving Board Members of Dhaka Bank
                  Limited. He was elected the Vice Chairman of the Bank in the
                  134th Board Meeting held in April 2008. He was first appointed
                  a Director of the Board on April 6, 1995. He is also a Founder
                  Member of the Board of Trustees of Dhaka Bank Foundation and
                  an erstwhile member of Audit Committee of the Bank. He is
                  associated with different socio-cultural activities and has
                  travelled extensively all over the world for his businesses.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/assets/images/members/5.jpg"
                alt="service image"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="py-3">
            <p className="text-muted pb-3">
              Hanif Maritime Limited believes that by owning and commercially
              and technically managing its fleet the company can provide a
              superior service to its clients in offering innovative, creative,
              flexible and safe freight solutions. The commercial team delivers
              reliable and cost effective freight solutions to
              customers/partners while seeking to optimize revenue through the
              execution of a well-diversified and risk- adjusted hands on
              approach to chartering. Despite our relatively recent market
              entry, Hanif Maritime Limited is already involved in active fixing
              and continuously growing credibility among industry’s key players
              thanks to our team of professionals, all with strong shipping
              backgrounds, networks and experiences
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default index;
