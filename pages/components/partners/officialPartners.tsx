import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function OfficialPartnersList() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const partners = [
    {
      title: "P&I CLUB: WEST OF ENGLAND",
      logoUrl: "/assets/images/partners/westpandi2.png",
      siteUrl: "https://www.westpandi.com/",
    },
    {
      title: "BANKER: EMIRATES NBD BANK PJSC",
      logoUrl: "/assets/images/partners/emirates.png",
      siteUrl: "https://www.emiratesnbd.com/en",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className=" p-4 rounded-xl shadow-xl border border-slate-700/30 backdrop-blur-sm"
    >
      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
        Official Partners
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {partners.map((partner, index) => (
          <Partner
            key={index}
            title={partner.title}
            delay={index * 0.05}
            inView={inView}
            logoUrl={partner.logoUrl}
            siteUrl={partner.siteUrl}
          />
        ))}
      </div>
    </motion.div>
  );
}

const Partner = ({
  title,
  delay,
  inView,
  logoUrl,
  siteUrl,
}: {
  title: string;
  delay: number;
  inView: boolean;
  logoUrl?: string;
  siteUrl?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3 rounded-lg hover:bg-gray-200 transition-colors"
    >
      <Link
        href={siteUrl || "/partners"}
        className="flex items-center gap-3 p-4"
        target="_blank"
      >
        <Logo logoUrl={logoUrl} />
        <span className="text-lg font-semibold text-gray-800 no-underline">
          {title}
        </span>
      </Link>
    </motion.div>
  );
};

const Logo = ({ logoUrl }: { logoUrl?: string }) => {
  return (
    <div className="bg-gray-400 p-1">
      <Image
        src={logoUrl || "/default-logo.png"} // Fallback to a default logo if logoUrl is not provided
        alt="Company Logo"
        width={150}
        height={150}
        className="object-contain"
      />
    </div>
  );
};
