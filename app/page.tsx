"use client";
import Image from "next/image";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { HoverEffect } from "../components/ui/card-hover-effect";
import AboutBlock from "../components/custom/AboutBlock";
import { motion, Variants } from "motion/react";

export default function Home() {
  const rate = [
    {
      id: 1,
      title: "SerpienteDigital CTO",
      cnt: "“La capacidad de TALLINET para desarrollar aplicaciones es impresionante. Entienden a fondo las necesidades de nuestro negocio y las aplicaciones que desarrollaron no solo tienen un diseño atractivo, sino que también son muy fluidas en su funcionamiento y cumplen completamente con nuestras expectativas. Después del lanzamiento, los comentarios de los usuarios han sido muy positivos, y han contribuido significativamente a la expansión de nuestro negocio.”",
    },
    {
      id: 2,
      title: "NopalTech CMO",
      cnt: "“En términos de publicidad, TALLINET es un experto absoluto. Las estrategias publicitarias que desarrollaron son precisas y específicas, y los resultados en plataformas como Google y Meta han sido notables, generando una gran cantidad de clientes potenciales y pedidos. El retorno de inversión ha superado con creces nuestras expectativas.”",
    },
    {
      id: 3,
      title: "MayaSoft CEO",
      cnt: "“Los servicios de consultoría en gestión empresarial de TALLINET han revitalizado nuestra empresa. Su equipo de consultores es altamente experimentado y puede diagnosticar rápida y precisamente los problemas que enfrentamos, ofreciendo soluciones prácticas. Con su ayuda, nuestra gestión empresarial se ha vuelto más organizada y nuestras operaciones más eficientes.”",
    },
  ];
  const cards = [
    {
      id: 1,
      title: "Finanzas",
    },
    {
      id: 2,
      title: "Educación",
    },
    {
      id: 3,
      title: "Dispositivos Inteligentes",
    },
    {
      id: 4,
      title: "Publicidad",
    },
    {
      id: 5,
      title: "Retail",
    },
    {
      id: 6,
      title: "Big Data",
    },
    {
      id: 7,
      title: "AI",
    },
    {
      id: 8,
      title: "Salud",
    },
  ];

  const titleAnimate: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom,
      },
    }),
  };

  const leftAnimate: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: custom,
      },
    }),
  };
  const rightAnimate: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: custom,
      },
    }),
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="flex justify-center items-start w-full mt-[80px] min-h-[672px] md:max-h-[672px]  bg-[url('/img/home.png')] bg-cover bg-center bg-no-repeat px-[40px]"
      >
        <div className="w-full max-w-[1200px] pt-[130px] pb-[130px]">
          <motion.div
            variants={titleAnimate}
            custom={0.01}
            className="md:max-w-[684px] text-left text-[40px] md:text-[58px] text-[#222222] font-bold mb-[28px]"
          >
            Servicios empresariales seguros y estables
          </motion.div>
          <motion.div
            variants={titleAnimate}
            custom={0.2}
            className="text-[14px] text-[#333] max-w-[692px]"
          >
            TLALLINET TECHNOLOGY is a comprehensive technology firm that
            integrates cutting-edge development with strategic marketing
            solutions. We are dedicated to empowering businesses to excel in the
            digital economy through customized software, deep-system
            integration, and innovative digital marketing strategies. Our team
            of seasoned software engineers, IT architects, and marketing experts
            is committed to being your most trusted, long-term partner in
            shaping what's next.
          </motion.div>
          <motion.div variants={titleAnimate} custom={0.4}>
            <a href="/About">
              <button className="mt-[112px]  bg-[#2243FF] relative  h-[48px] w-full max-w-[180px] rounded-full  font-medium text-white cursor-pointer">
                Saber Más
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>
      <div className="flex justify-center items-start px-[40px]">
        <div className="w-full max-w-[1200px] mt-[179px] mb-[87px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="lg:flex justify-center items-center mb-[100px]"
          >
            <motion.div
              variants={leftAnimate}
              className="lg:max-w-[548px] lg:max-h-[328px] lg:mr-[54px] mb-[20px]"
            >
              <DirectionAwareHover imageUrl="/img/home-3.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </motion.div>
            <div className="flex-1">
              <motion.div
                variants={titleAnimate}
                className="text-[26px] text-[#222222] mb-[30px] font-bold"
              >
                Software Development & Customization
              </motion.div>
              <motion.div
                variants={titleAnimate}
                custom={0.2}
                className="text-[14px] leading-[24px]"
              >
                We specialize in building high-performance, scalable custom
                software and applications. From enterprise-level systems (ERP,
                CRM) and cross-platform mobile apps to cloud-native solutions,
                we employ agile methodologies to deliver solutions that meet
                both current and future challenges.
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="lg:flex justify-center items-center   flex-row-reverse mb-[100px]"
          >
            <motion.div
              variants={rightAnimate}
              className="lg:max-w-[548px] lg:max-h-[328px] lg:ml-[54px] mb-[20px]"
            >
              <DirectionAwareHover imageUrl="/img/home-4.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </motion.div>
            <div className="flex-1">
              <motion.div
                variants={titleAnimate}
                className="text-[26px] text-[#222222] mb-[30px] font-bold"
              >
                IT Consulting & System Integration
              </motion.div>
              <motion.div
                variants={titleAnimate}
                custom={0.2}
                className="text-[14px] leading-[24px]"
              >
                We provide professional IT strategy consulting and seamless
                system integration services. We help you assess your technology
                landscape, plan your digital transformation roadmap, and
                integrate disparate systems and platforms to eliminate data
                silos and create a cohesive, efficient technology ecosystem.
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="lg:flex justify-center items-center mb-[100px]"
          >
            <motion.div
              variants={leftAnimate}
              className="lg:max-w-[548px] lg:max-h-[328px] lg:mr-[54px] mb-[20px]"
            >
              <DirectionAwareHover imageUrl="/img/home-5.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </motion.div>
            <div className="flex-1">
              <motion.div
                variants={titleAnimate}
                className="text-[26px] text-[#222222] mb-[30px] font-bold"
              >
                Advertising & Media Placement
              </motion.div>
              <motion.div
                variants={titleAnimate}
                custom={0.2}
                className="text-[14px] leading-[24px]"
              >
                We represent leading domestic and international advertising
                resources, offering one-stop placement services from offline
                physical media (elevators, subways, airports) to online digital
                media (social feeds, video ads, splash pages). Our data-driven
                targeting ensures your brand message reaches the right audience
                effectively.
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="lg:flex justify-center items-center   flex-row-reverse mb-[100px]"
          >
            <motion.div
              variants={rightAnimate}
              className="lg:max-w-[548px] lg:max-h-[328px] lg:ml-[54px] mb-[20px]"
            >
              <DirectionAwareHover imageUrl="/img/home-6.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </motion.div>
            <div className="flex-1">
              <motion.div
                variants={titleAnimate}
                className="text-[26px] text-[#222222] mb-[30px] font-bold"
              >
                Digital Marketing & Social Media Management
              </motion.div>
              <motion.div
                variants={titleAnimate}
                custom={0.2}
                className="text-[14px] leading-[24px]"
              >
                We offer comprehensive online promotion and growth strategies.
                Our services include social media management and content
                creation (WeChat, Weibo, TikTok, LinkedIn), search engine
                optimization (SEO), paid advertising (SEM), content marketing,
                and KOL collaborations, all designed to boost your brand's
                online presence and customer acquisition.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full min-h-[790px] lg:max-h-[790px]  bg-[url('/img/home-7.png')] bg-cover bg-center bg-no-repeat px-[40px] py-[40px]">
        <div className="w-full max-w-[1200px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={titleAnimate}
            custom={0.2}
            className="text-center text-[48px] leading-[58px] font-bold mb-[121px]"
          >
            Opiniones de Nuestros Clientes
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 relative  gap-x-[22px] gap-y-[40px]">
            {rate.map((i, index) => {
              return (
                <div
                  className="rate relative text-center bg-[#fff]"
                  key={index}
                >
                  <Image
                    className="rate-top"
                    src={`/img/head-${i.id}.png`}
                    width={65}
                    height={65}
                    alt="rate"
                  />
                  <div className="text-[20px] font-bold mb-[10px] leading-[26px]">
                    {i.title}
                  </div>
                  <Image
                    className="m-auto"
                    src="/img/start.png"
                    width={93}
                    height={14}
                    alt="rate"
                  />
                  <div className="text-[14px] leading-[22px] text-left mt-[24px]">
                    {i.cnt}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start px-[40px] bg-[#F5F8FA]">
        <div className="w-full max-w-[1200px] pt-[120px]">
          <div className="text-[48px] leading-[58px] font-bold text-center mb-[81px]">
            Sectores Aplicables
          </div>
          <HoverEffect className="mb-[186px]" items={cards} />
          <div className="mb-[160px]">
            <AboutBlock
              type="2"
              title="Somos Su Socio Digital Integral"
              sub="Desde el desarrollo de sitios web y aplicaciones hasta estrategias publicitarias precisas y consultoría empresarial profesional, ayudamos a que su empresa prospere en la era digital."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
