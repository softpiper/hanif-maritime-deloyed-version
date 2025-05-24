import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function OfficialPartnersList() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const partners = [
    "P&I CLUB: WEST OF ENGLAND",
    "BANKER: EMIRATES NBD BANK PJSC",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/30 backdrop-blur-sm"
    >
      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
        Official Partners
      </h3>

      <div className="grid gap-4">
        {partners.map((partner, index) => (
          <Partner
            key={index}
            title={partner}
            delay={index * 0.1}
            inView={inView}
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
}: {
  title: string;
  delay: number;
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors"
    >
      <div className="rounded-full bg-blue-500/20 p-2 flex items-center justify-center">
        <CheckIcon />
      </div>
      <p className="text-slate-100 font-medium">{title}</p>
    </motion.div>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="text-blue-400"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
      />
    </svg>
  );
};
