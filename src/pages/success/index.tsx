import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

// Common transition properties for all animations
const commonTransition = {
  duration: 1,
  ease: "easeOut",
};

const SuccessPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-8">
      {/* Animated Icon Intro */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full max-w-md justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ ...commonTransition, delay: 0 }}
      >
        <FiCheckCircle className="text-green-500" size={150} />
      </motion.div>

      {/* Success Message */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="mt-8 text-center text-4xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ ...commonTransition, delay: 0 }}
      >
        Payment Successful!
      </motion.div>

      {/* Personalized Thank-You Message */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="mt-4 text-center text-lg text-green-300"
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ ...commonTransition, delay: 1 }}
      >
        Thank you for supporting TechStart UCalgary. Your transaction has been
        completed.
      </motion.div>

      {/* Return to Merch Button */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ ...commonTransition, delay: 1 }}
      >
        <Link href="/merch">
          <button className="rounded bg-green-600 px-6 py-3 font-bold text-black hover:bg-green-500">
            Return to Merch
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
