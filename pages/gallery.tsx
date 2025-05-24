import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import Hero2 from "./components/hero2";

const Gallery = () => {
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
            {/* <Hero2 /> */}
            <h3 className="text-uppercase fw-bold lh-lg letter-spacing-lg">
              OCEAN GOING VESSELS
            </h3>
            <p className="font-monospace">
              Our gallery showcases the impressive range of vessels that form
              the backbone of our shipping operations. From bulk carriers to
              tankers, each ship is equipped with advanced technology and
              maintained to the highest standards of safety and efficiency.
              These vessels are the lifeblood of our business, ensuring timely
              and secure transport of goods across the world&apos;s oceans. Take
              a closer look at our fleet and see the powerful ships that help us
              connect markets and deliver excellence in maritime logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="casestudies-section py-60">
        <div className="container">
          <div className="row">
            {[
              // "image_1.jpeg",
              // "image_2.jpeg",
              // "image_3.jpeg",
              // "image_4.jpeg",
              // "image_5.jpeg",
              // "image_6.jpeg",
              // "image_7.jpeg",
              // "image_8.jpeg",
              // "image_10.jpeg",
              // "image_12.jpeg",
              // "image_11.jpeg",
              // "image_13.jpeg",
              "image_18.jpeg",
              "image_19.jpeg",
              "image_20.jpeg",
              "image_15.jpeg",
              "image_16.jpeg",
              "image_22.jpeg",
              "image_17.jpeg",
              "image_14.jpeg",
              "image_21.jpeg",

              "image_23.jpeg",
              "image_24.jpeg",
              "image_25.jpeg",
              "image_26.jpeg",
              "image_27.jpeg",
              "image_28.jpeg",
              "image_29.jpeg",
              "image_30.jpeg",
              "image_31.jpeg",
              "image_32.jpeg",
              "image_33.jpeg",
            ].map((image, index) => (
              <div className="col-lg-4 content-center" key={index}>
                <div className="item-inner position-relative overflow-hidden gap-2 mb-2">
                  <Image
                    src={`/assets/images/ship/${image}`}
                    alt={`ship ${index + 1}`}
                    className="background-item w-100 h-100"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Gallery;
