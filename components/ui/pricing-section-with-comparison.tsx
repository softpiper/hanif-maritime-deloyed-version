import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Our Fleets</Badge>
          {/* <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Managing a small business today is already tough.
            </p>
          </div> */}
          <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x pt-20">
            <div className="col-span-3 lg:col-span-1"></div>
            <div className="px-3 py-1 md:px-6 md:py-4  gap-2 flex flex-col">
              <p className="text-2xl">MV ZARAAR HANIF</p>
              {/* <Image
                width={300}
                height={300}
                src="/assets/images/ship/image_23.jpeg"
                alt="image"
                className="background-item w-100"
              /> */}
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl">MV RUBAIYAT HANIF</p>
              {/* <Image
                width={300}
                height={300}
                src="/assets/images/ship/image_33.jpeg"
                alt="image"
                className="background-item w-100"
              /> */}
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl">MV GUL BANO</p>
              {/* <Image
                width={300}
                height={300}
                src="/assets/images/ship/image_20.jpeg"
                alt="image"
                className="background-item w-100"
              /> */}
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1  py-4">
              {/* <b>Features</b> */}
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              IMO
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              9454187
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              9403047
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              9425899
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              EX NAME
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              NORD TRUST
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              NEW VICTORY
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              ROYAL SAMURAI
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              DWT
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              55,693 MT ON 12.573 M DRAFT
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              58,713 MT ON 12.828M SSW
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              58,091 MT ON 12.826 M DRAFT
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              TYPE OF VESSEL
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              SINGLE DECK GEARED BULK CARRIER
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              {/* <p className="text-muted-foreground text-sm">25 members</p> */}
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              SINGLE DECK GEARED BULK CARRIER
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              YEAR OF BUILD/SHIPYARD
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              2009 / MITSUI TAMANO, JAPAN.
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              SDBC / 2008
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              2010 / TSUNEISHI HEAVY INDUSTRIES, PHILIPPINES.
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              FLAG/REGISTRY/CLASS/CALLSIGN
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              BANGLADESH/CHATTOGRAM/BV/S2BQ6
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              BANGLADESH/NA/BV/S2BZ8
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              BANGLADESH/CHATTOGRAM/BV/S2CU5
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              LOA/LBP/ BEAM/DEPTH
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              LOA / LBP: 189.990 / 182.0 M BEAM / DEPTH: 32.26 M / 17.90 M
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              LOA / BEAM / TPC: 189.99 M / 32.26M / 57.54 MT
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              LOA / LBP: 189.990 / 185.6 M BEAM / DEPTH: 32.26 M / 18.00 M
            </div>
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              GRT/NRT
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              31,232 / 18,516
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              32,379/19,353
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              32,351 / 19,458
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              TPC
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              55.8
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              57.54
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center text-sm font-semibold">
              57.46
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
