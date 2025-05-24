import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function CharteringPartnersList() {
  return (
    <CardSpotlight className="">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Our Chartering partner:
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          <Step title="OLDENDORFF GMBH & CO. KG, LUEBECK, GERMANY" />
          <Step title="TONGLI SHIPPING PTE. LTD." />
          <Step title="MULTIMAX SHIPPING PTE. LTD." />
          <Step title="LYNUX SHIPPING LIMITED" />
          <Step title="NORVIC SHIPPING ASIA PTE LTD" />
          <Step title="CRYSTAL SEA SHIPPING CO LTD" />
          <Step title="AGROCORP INTERNATIONAL PTE LTD SINGAPORE" />
          <Step title="SIGMA SHIPPING INTERNATIONAL S.A." />
          <Step title="OILMAR (DREAM SEA NAVIGATION" />
          <Step title="PROPEL SHIPPING PTE LTD" />
          <Step title="VIETSEA COMPANY PTE LTD" />
          <Step title="SILK ROAD SHIPPING & CHARTERING LTD" />
          <Step title="GUARDIAN BULK SHIPPING CO.,LTD." />
          <Step title="CAPITAL WORLD MARITIME LIMITED" />
          <Step title="CAMBRIAN BULK LIMITED" />
          <Step title="LOCH SHIPPING INTERMEDIARY FZE, U.A.E" />
          <Step title="ALLIANZ BULK CFR8 PTE. LTD." />
          <Step title="TEAM BULK CARRIERS PTE LTD , SINGAPORE" />
          <Step title="BAINBRIDGE NAVIGATION DMCC" />
          <Step title="M/S. JAHAZ SHIPPING LINES DMCC" />
          <Step title="BULK ASIA PTE LTD" />
          <Step title="WEALTH CREATION GENERAL TRADING LLC" />
          <Step title="EVER GLORY SHIP CHARTER LLC" />
        </ul>
      </div>
    </CardSpotlight>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-1 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
