import {
  Check,
  Anchor,
  Ship,
  Info,
  Ruler,
  Flag,
  Scale,
  Navigation,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

function Pricing() {
  const [activeTab, setActiveTab] = useState(0);

  type VesselDetailKey =
    | "IMO"
    | "EX_NAME"
    | "DWT"
    | "TYPE_OF_VESSEL"
    | "YEAR_OF_BUILD"
    | "FLAG"
    | "DIMENSIONS"
    | "GRT_NRT"
    | "TPC";

  type VesselDetails = Record<VesselDetailKey, string>;

  const vessels: {
    name: string;
    image: string;
    details: VesselDetails;
  }[] = [
    {
      name: "MV ZARAAR HANIF",
      image: "/assets/images/ship/image_41.jpg",
      details: {
        IMO: "9454187",
        EX_NAME: "NORD TRUST",
        DWT: "55,693 MT ON 12.573 M DRAFT",
        TYPE_OF_VESSEL: "SINGLE DECK GEARED BULK CARRIER",
        YEAR_OF_BUILD: "2009 / MITSUI TAMANO, JAPAN.",
        FLAG: "BANGLADESH/CHATTOGRAM/BV/S2BQ6",
        DIMENSIONS:
          "LOA / LBP: 189.990 / 182.0 M BEAM / DEPTH: 32.26 M / 17.90 M",
        GRT_NRT: "31,232 / 18,516",
        TPC: "55.8",
      },
    },
    {
      name: "MV RUBAIYAT HANIF",
      image: "/assets/images/ship/image_51.jpg",
      details: {
        IMO: "9403047",
        EX_NAME: "NEW VICTORY",
        DWT: "58,713 MT ON 12.828M SSW",
        TYPE_OF_VESSEL: "",
        YEAR_OF_BUILD: "SDBC / 2008",
        FLAG: "BANGLADESH/NA/BV/S2BZ8",
        DIMENSIONS: "LOA / BEAM / TPC: 189.99 M / 32.26M / 57.54 MT",
        GRT_NRT: "32,379/19,353",
        TPC: "57.54",
      },
    },
    {
      name: "MV GUL BANO",
      image: "/assets/images/ship/image_20.jpeg",
      details: {
        IMO: "9425899",
        EX_NAME: "ROYAL SAMURAI",
        DWT: "58,091 MT ON 12.826 M DRAFT",
        TYPE_OF_VESSEL: "SINGLE DECK GEARED BULK CARRIER",
        YEAR_OF_BUILD: "2010 / TSUNEISHI HEAVY INDUSTRIES, PHILIPPINES.",
        FLAG: "BANGLADESH/CHATTOGRAM/BV/S2CU5",
        DIMENSIONS:
          "LOA / LBP: 189.990 / 185.6 M BEAM / DEPTH: 32.26 M / 18.00 M",
        GRT_NRT: "32,351 / 19,458",
        TPC: "57.46",
      },
    },
  ];

  const specs = [
    { name: "IMO", icon: <Info className="w-5 h-5" /> },
    { name: "EX NAME", icon: <Ship className="w-5 h-5" /> },
    { name: "DWT", icon: <Scale className="w-5 h-5" /> },
    { name: "TYPE OF VESSEL", icon: <Ship className="w-5 h-5" /> },
    { name: "YEAR_OF_BUILD", icon: <Anchor className="w-5 h-5" /> },
    {
      name: "FLAG",
      icon: <Flag className="w-5 h-5" />,
    },
    { name: "DIMENSIONS", icon: <Ruler className="w-5 h-5" /> },
    { name: "GRT/NRT", icon: <Navigation className="w-5 h-5" /> },
    { name: "TPC", icon: <Scale className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full py-12 md:py-16 ds-section-light">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex text-center justify-center items-center gap-2 flex-col mb-6 md:mb-8">
          <Badge className="px-3 py-1 text-sm md:text-base">Our Fleet</Badge>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl"
            style={{ color: "#1E2026" }}
          >
            Explore Our Modern Vessel Fleet
          </h2>
          <p
            className="text-sm md:text-base max-w-2xl"
            style={{ color: "#848E9C" }}
          >
            Our fleet combines cutting-edge technology with superior
            craftsmanship for safe and efficient global transportation.
          </p>
        </div>

        {/* Vessel Selection Tabs - More compact and mobile-friendly */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
          {vessels.map((vessel, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-2 text-sm md:text-base rounded-md shadow-sm transition-all duration-300 flex items-center gap-1 border ${
                activeTab === index
                  ? "bg-[#F0B90B] text-[#1E2026] border-[#F0B90B]"
                  : "bg-white hover:bg-gray-100 text-[#32313A] border-[#E6E8EA]"
              }`}
            >
              <Ship
                className={`w-4 h-4 ${
                  activeTab === index ? "text-[#1E2026]" : "text-[#F0B90B]"
                }`}
              />
              <span className="font-medium">
                {vessel.name.replace("MV ", "")}
              </span>
            </button>
          ))}
        </div>

        {/* Main Content - More compact with smaller gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Vessel Image - Optimized for mobile */}
          <div
            className="lg:col-span-5 rounded-lg overflow-hidden shadow bg-white p-2 md:p-3"
            style={{ border: "1px solid #E6E8EA" }}
          >
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded overflow-hidden shadow-inner">
              <Image
                src={vessels[activeTab].image}
                alt={vessels[activeTab].name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                <h3 className="text-white text-lg md:text-xl font-bold">
                  {vessels[activeTab].name}
                </h3>
                {/* <p className="text-white/80 text-sm">Supramax Bulk Carrier</p> */}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3">
              <div
                className="p-2 md:p-3 rounded text-center"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <p
                  className="text-xs md:text-sm font-medium"
                  style={{ color: "#848E9C" }}
                >
                  DWT
                </p>
                <p
                  className="text-sm md:text-base font-bold"
                  style={{ color: "#1E2026" }}
                >
                  {vessels[activeTab].details.DWT.split(" ")[0]}
                </p>
              </div>
              <div
                className="p-2 md:p-3 rounded text-center"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <p
                  className="text-xs md:text-sm font-medium"
                  style={{ color: "#848E9C" }}
                >
                  Built
                </p>
                <p
                  className="text-sm md:text-base font-bold"
                  style={{ color: "#1E2026" }}
                >
                  {vessels[activeTab].details.YEAR_OF_BUILD.split(" ")[0]}
                </p>
              </div>
              <div
                className="p-2 md:p-3 rounded text-center"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <p
                  className="text-xs md:text-sm font-medium"
                  style={{ color: "#848E9C" }}
                >
                  IMO
                </p>
                <p
                  className="text-sm md:text-base font-bold"
                  style={{ color: "#1E2026" }}
                >
                  {vessels[activeTab].details.IMO}
                </p>
              </div>
            </div>
          </div>

          {/* Vessel Specifications - More compact for all screens */}
          <div className="lg:col-span-7">
            <div
              className="bg-white rounded-lg shadow overflow-hidden"
              style={{ border: "1px solid #E6E8EA" }}
            >
              <div
                className="p-3"
                style={{ backgroundColor: "#222126", color: "#FFFFFF" }}
              >
                <h3 className="text-base md:text-lg font-bold">
                  Vessel Specifications
                </h3>
                <p className="text-xs md:text-sm" style={{ color: "#848E9C" }}>
                  Detailed technical information
                </p>
              </div>

              <div className="divide-y divide-gray-100">
                {specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-2 md:p-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="p-1.5 rounded-full hidden sm:block"
                        style={{ backgroundColor: "#F5F5F5", color: "#F0B90B" }}
                      >
                        {spec.icon}
                      </div>
                      <div className="flex-1">
                        <h4
                          className="text-xs md:text-sm font-medium"
                          style={{ color: "#848E9C" }}
                        >
                          {spec.name}
                        </h4>
                        <p
                          className="text-sm md:text-base font-semibold break-words"
                          style={{ marginBottom: "0px" }}
                        >
                          {vessels[activeTab].details[
                            spec.name.replace(/\/| /g, "_") as VesselDetailKey
                          ] || "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
