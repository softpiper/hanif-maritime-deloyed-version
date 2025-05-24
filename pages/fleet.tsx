import Link from "next/link";
import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import PricingDemo from "./components/ShipsComparison";
import { motion } from "framer-motion";

const index = () => {
  return (
    <Wrapper>
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
          minHeight: "60vh",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/assets/images/ship/grid-pattern.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Floating ship silhouette */}
        <div className="absolute -bottom-10 right-0 w-1/3 opacity-10 hidden lg:block">
          <Image
            src="/assets/images/ship/ship-silhouette.png"
            alt="Ship silhouette"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-wide">
                OUR FLEET
              </h1>

              <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>

              <h3 className="text-blue-300 text-xl md:text-2xl mb-8 font-light">
                Modern Vessels for Global Shipping Solutions
              </h3>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <p className="text-gray-100 text-lg leading-relaxed mb-6">
                  Hanif Maritime Limited operates a modern and diverse fleet of
                  dry bulk carriers. Each ship is equipped with the latest
                  technology to ensure optimal performance, safety, and
                  environmental compliance. Our goal is to continue to grow our
                  fleet size over time to establish a world reputed shipping
                  company.
                </p>

                <div className="flex items-center justify-center gap-4 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-white text-lg">
                    Supramax vessels currently in operation
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <p className="text-white text-lg">
                    Additional vessels in the pipeline
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Link href="#fleet-details">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-all duration-300"
                  >
                    Explore Our Fleet
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="fleet-details">
        <PricingDemo />
      </div>
    </Wrapper>
  );
};

export default index;
