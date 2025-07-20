import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";

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
          <h2 className="text-blue font-bold">RUBAIYAT HANIF</h2>

          <div className="row">
            {[
              "image_41.jpg",
              "image_42.jpg",
              "image_43.jpg",
              "image_44.jpg",
              "image_45.jpg",
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

      <section className="casestudies-section py-60">
        <div className="container">
          <h2 className="text-blue font-bold">ZARAAR HANIF</h2>
          <div className="row">
            {[
              "image_51.jpg",
              "image_52.jpg",
              "image_53.jpg",
              "image_54.jpg",
              "image_55.jpg",
              "image_56.jpg",
              "image_57.jpg",
              "image_58.jpg",
              "image_59.jpg",
              "image_60.jpg",
              "image_61.jpg",
              "image_62.jpg",
              "image_63.jpg",
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

      <section className="casestudies-section py-60">
        <div className="container">
          <h2 className="text-blue font-bold">GUL BANO</h2>
          <div className="row">
            {[
              "image_14.jpeg",
              "image_17.jpeg",
              "image_21.jpeg",
              "image_18.jpeg",
              "image_19.jpeg",
              "image_20.jpeg",
              "image_15.jpeg",
              "image_22.jpeg",
              "image_16.jpeg",
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
