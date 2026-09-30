import { useTranslations } from "next-intl";
import CountuP from "react-countup";

const Stats = () => {
  const t = useTranslations("Stats");

  const stats = [
    {
      num: 7,
      text: t("yearsOfExperience"),
    },
    {
      num: 30,
      text: t("projectsDelivered"),
    },
    {
      num: 12,
      text: t("systemsArchitected"),
    },
    {
      num: 8,
      text: t("InfraestructureProjects"),
    },
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-8 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <div className="flex gap-2 font-extrabold">
                  <CountuP
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <p className="text-3xl self-center">+</p>
                </div>

                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-150px"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
