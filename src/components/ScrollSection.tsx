import { motion, type Variants } from "framer-motion";

const Section = ({ children }: { children: React.ReactNode }) => {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 }, // cascade by default
    },
  };

  const item: Variants = {
    hidden: (i: number) => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

      if (isMobile) {
        return { opacity: 0, y: 40 }; // fade up on mobile
      }
      return { opacity: 0, x: i % 2 === 0 ? -60 : 60 }; // slide left/right on desktop
    },
    show: (i: number) => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

      return {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: isMobile ? i * 0.15 : 0, // extra cascade on mobile
        },
      };
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
       className="bg-black/95 rounded-md" 
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div key={i} custom={i} variants={item}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div custom={0} variants={item}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Section;
