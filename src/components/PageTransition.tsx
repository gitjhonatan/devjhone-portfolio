'use client';

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

//@ts-ignore
const PageTransition = ({ children }) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" }
          }}
          className="h-screen w-screen fixed b-primary top-0 pointer-events-none"
        />

      </div>
      {children}
    </AnimatePresence>
  )
}

export default PageTransition;