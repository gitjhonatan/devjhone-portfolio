"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end development of web applications, from user interfaces to business logic, integrations and data management.",
  },
  {
    title: "API & Backend Development",
    description:
      "Development of robust APIs and backend systems focused on performance, security, scalability and maintainability.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Design and automation of reliable infrastructure with a focus on scalability, availability, deployment efficiency and monitoring.",
  },
  {
    title: "System Architecture",
    description:
      "Planning and design of scalable software architectures, from technical decisions and integrations to long-term maintainability.",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            const num = String(index + 1).padStart(2, "0");

            return (
              <Link
                key={num}
                href="/contact"
                className="min-h-[325px] md:min-h-[250px] flex flex-col justify-between gap-6 group"
                
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {num}
                  </div>

                  <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </div>
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                <p className="text-white/60">{service.description}</p>

                <div className="border-b border-white/20 w-full" />
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
