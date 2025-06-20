"use client";
import Image from "next/image";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { HoverEffect } from "../components/ui/card-hover-effect";
import AboutBlock from "../components/custom/AboutBlock";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

export default function Home() {
  const rate = [
    {
      id: 1,
      title: "SerpienteDigital CTO",
      cnt: "“La capacidad de Teemo Tech para desarrollar aplicaciones es impresionante. Entienden a fondo las necesidades de nuestro negocio y las aplicaciones que desarrollaron no solo tienen un diseño atractivo, sino que también son muy fluidas en su funcionamiento y cumplen completamente con nuestras expectativas. Después del lanzamiento, los comentarios de los usuarios han sido muy positivos, y han contribuido significativamente a la expansión de nuestro negocio.”",
    },
    {
      id: 2,
      title: "NopalTech CMO",
      cnt: "“En términos de publicidad, Teemo Tech es un experto absoluto. Las estrategias publicitarias que desarrollaron son precisas y específicas, y los resultados en plataformas como Google y Meta han sido notables, generando una gran cantidad de clientes potenciales y pedidos. El retorno de inversión ha superado con creces nuestras expectativas.”",
    },
    {
      id: 3,
      title: "MayaSoft CEO",
      cnt: "“Los servicios de consultoría en gestión empresarial de Teemo Tech han revitalizado nuestra empresa. Su equipo de consultores es altamente experimentado y puede diagnosticar rápida y precisamente los problemas que enfrentamos, ofreciendo soluciones prácticas. Con su ayuda, nuestra gestión empresarial se ha vuelto más organizada y nuestras operaciones más eficientes.”",
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
  return (
    <div>
      <div className="flex justify-center items-start w-full mt-[80px] min-h-[672px] md:max-h-[672px]  bg-[url('/img/home.png')] bg-cover bg-center bg-no-repeat px-[40px]">
        <div className="w-full max-w-[1200px] pt-[130px] pb-[130px]">
          <div className="md:max-w-[684px] text-left text-[40px] md:text-[58px] text-[#222222] font-bold mb-[28px]">
            Servicios empresariales seguros y estables
          </div>
          <div className="text-[14px] text-[#333] max-w-[692px]">
            Nos dedicamos a ayudar a las startups y empresas en crecimiento a
            lograr la transformación digital. A través de tecnologías y
            estrategias sobresalientes, aumentamos la competitividad y el
            impacto en el mercado de su empresa. Proveemos soluciones de
            software innovadoras y servicios comerciales profesionales para que
            su empresa destaque en la era digital.
          </div>
          <a href="/About">
            <button className="mt-[112px]  bg-[#0077FF] relative  h-[48px] w-full max-w-[180px] rounded-full  font-medium text-white cursor-pointer">
              Saber Más
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-start px-[40px]">
        <div className="w-full max-w-[1200px] mt-[179px] mb-[87px]">
          <div className="lg:flex justify-center items-center mb-[100px]">
            <div className="lg:max-w-[548px] lg:max-h-[328px] lg:mr-[54px] mb-[20px]">
              <DirectionAwareHover imageUrl="/img/home-3.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>
            <div className="flex-1">
              <div className="text-[26px] text-[#222222] mb-[30px] font-bold">
                Desarrollo de Sitios Web y Aplicaciones
              </div>
              <div className="text-[14px] leading-[24px]">
                Creamos sitios web exclusivos para startups, combinando diseño
                creativo y tecnología avanzada para garantizar que su sitio web
                sea visualmente atractivo, funcional y fácil de gestionar.
                Nuestro equipo lo acompañará en todo el proceso, desde la
                planificación hasta el lanzamiento, proporcionando soluciones
                web personalizadas.
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center items-center   flex-row-reverse mb-[100px]">
            <div className="lg:max-w-[548px] lg:max-h-[328px] lg:ml-[54px] mb-[20px]">
              <DirectionAwareHover imageUrl="/img/home-4.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>
            <div className="flex-1">
              <div className="text-[26px] text-[#222222] mb-[30px] font-bold">
                Diseño de Sistemas SaaS
              </div>
              <div className="text-[14px] leading-[24px]">
                Diseñamos sistemas SaaS personalizados para satisfacer las
                necesidades específicas de su empresa, mejorar la eficiencia
                operativa, reducir costos y automatizar la gestión de procesos
                empresariales. Con amplia experiencia y tecnología profesional,
                creamos aplicaciones poderosas con excelente experiencia de
                usuario, ayudándole a expandir su ámbito de negocio y aumentar
                la satisfacción del cliente.
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center items-center mb-[100px]">
            <div className="lg:max-w-[548px] lg:max-h-[328px] lg:mr-[54px] mb-[20px]">
              <DirectionAwareHover imageUrl="/img/home-5.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>
            <div className="flex-1">
              <div className="text-[26px] text-[#222222] mb-[30px] font-bold">
                Servicios de Publicidad
              </div>
              <div className="text-[14px] leading-[24px]">
                Nuestro equipo de expertos en publicidad le ayudará a realizar
                campañas publicitarias precisas en plataformas principales como
                Google y Meta, desarrollar estrategias publicitarias efectivas,
                aumentar la visibilidad de su marca, y mejorar el tráfico y la
                tasa de conversión para alcanzar sus objetivos de marketing.
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center items-center   flex-row-reverse mb-[100px]">
            <div className="lg:max-w-[548px] lg:max-h-[328px] lg:ml-[54px] mb-[20px]">
              <DirectionAwareHover imageUrl="/img/home-6.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>
            <div className="flex-1">
              <div className="text-[26px] text-[#222222] mb-[30px] font-bold">
                Consultoría en Gestión Empresarial
              </div>
              <div className="text-[14px] leading-[24px]">
                Le ofrecemos servicios profesionales de consultoría en gestión
                empresarial, que incluyen planificación estratégica, gestión
                operativa, marketing, entre otros. Nuestro equipo de consultores
                cuenta con amplia experiencia en la industria y conocimientos
                especializados, capaces de proporcionar recomendaciones y
                soluciones prácticas para ayudarle a gestionar su empresa de
                manera más eficaz, ampliar su visión de mercado y lograr un
                desarrollo sostenible.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full min-h-[790px] lg:max-h-[790px]  bg-[url('/img/home-7.png')] bg-cover bg-center bg-no-repeat px-[40px] py-[40px]">
        <div className="w-full max-w-[1200px]">
          <div className="text-center text-[48px] leading-[58px] font-bold mb-[121px]">
            Opiniones de Nuestros Clientes
          </div>
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
