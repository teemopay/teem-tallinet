"use client";
import AboutBlock from "../../components/custom/AboutBlock";
import { TabsVer } from "../../components/ui/tabs-ver";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import { motion } from "motion/react";

export default function Case() {
  const cond1 = [
    {
      title: "Análisis de mercado: ",
      cnt: "Comprender a fondo las tendencias de la industria y el panorama competitivo.",
    },
    {
      title: "Optimización de procesos empresariales: ",
      cnt: "Mejorar la eficiencia operativa y reducir costos.",
    },
    {
      title: "Estrategias de crecimiento: ",
      cnt: "Desarrollar planes de expansión empresarial sostenibles.",
    },
    {
      title: "Transformación digital: ",
      cnt: "Guiar a su empresa para mantener la competitividad en la era digital.",
    },
  ];
  const cond2 = [
    {
      title: "Evaluación de necesidades: ",
      cnt: "Realizamos una comunicación detallada para entender el estado actual de su empresa, problemas y objetivos, y llevar a cabo una evaluación exhaustiva de las necesidades de consultoría.",
    },
    {
      title: "Personalización de la solución:",
      cnt: " Basándonos en la evaluación de necesidades, formamos un equipo de consultoría profesional para investigar y analizar a fondo, y diseñar una solución de consultoría personalizada.",
    },
    {
      title: "Implementación del proyecto: ",
      cnt: "Colaboramos estrechamente con su equipo para llevar a cabo el proyecto de consultoría según el plan establecido, garantizando una ejecución efectiva de la solución.",
    },
    {
      title: "Evaluación de resultados: ",
      cnt: "Evaluamos y retroalimentamos regularmente los resultados de la implementación de la solución de consultoría, ajustando y optimizando según sea necesario para asegurar que se alcancen los objetivos previstos.",
    },
  ];
  const cond3 = [
    {
      title: "Equipo profesional: ",
      cnt: "Contamos con expertos en ciencia de datos, aprendizaje automático e inteligencia artificial.",
    },
    {
      title: "Soluciones personalizadas: ",
      cnt: "Diseñadas según las necesidades específicas de su negocio y características de la industria.",
    },
    {
      title: "Servicios de extremo a extremo: ",
      cnt: "Soporte completo desde la recolección de datos, limpieza y análisis hasta el despliegue y mantenimiento de modelos.",
    },
    {
      title: "Optimización continua: ",
      cnt: "Monitoreo y ajuste continuo del rendimiento de los modelos para asegurar un valor a largo plazo.",
    },
    {
      title: "Enfoque en privacidad y seguridad: ",
      cnt: "Cumplimos estrictamente con las regulaciones de protección de datos para garantizar la seguridad de su información.",
    },
  ];
  const cond4 = [
    {
      title: "Análisis de Big Data: ",
      cnt: "Extraer insights comerciales valiosos de grandes volúmenes de datos.",
    },
    {
      title: "Modelos de aprendizaje automático: ",
      cnt: "Desarrollar y desplegar soluciones personalizadas de machine learning.",
    },
    {
      title: "Análisis predictivo: ",
      cnt: "Utilizar datos históricos para predecir tendencias futuras y apoyar la toma de decisiones.",
    },
    {
      title: "Procesamiento de lenguaje natural: ",
      cnt: "Herramientas de análisis de texto y chatbots inteligentes.",
    },
    {
      title: "Visión por computadora: ",
      cnt: "Análisis de imágenes y videos para apoyar aplicaciones en diversos sectores.",
    },
    {
      title: "Automatización de procesos empresariales impulsada por IA: ",
      cnt: "Mejorar la eficiencia y reducir errores humanos.",
    },
  ];

  const cond5 = [
    {
      title: "Soporte multitenant: ",
      cnt: "Permite que múltiples inquilinos utilicen el sistema simultáneamente, con datos aislados para cada inquilino, garantizando la seguridad y privacidad de los datos.",
    },
    {
      title: "Personalización: ",
      cnt: "Configuración personalizada según las necesidades de los inquilinos, satisfaciendo las necesidades específicas de cada uno.",
    },
    {
      title: "Operaciones automatizadas: ",
      cnt: "El --sistema cuenta con funciones de operaciones automatizadas, monitorizando el estado del sistema, detectando y resolviendo problemas a tiempo, garantizando la estabilidad y fiabilidad del sistema.",
    },
    {
      title: "Análisis de datos:",
      cnt: " El sistema ofrece potentes funciones de análisis de datos, ayudando a los inquilinos a analizar profundamente los datos empresariales y apoyando la toma de decisiones.",
    },
  ];
  const cond6 = [
    {
      title: "Front-end: ",
      cnt: "HTML5, CSS3, JavaScript, React, Vue.js, etc.",
    },
    {
      title: "Back-end: ",
      cnt: "Python, Django, Flask, Node.js, Express, etc.",
    },
    {
      title: "Bases de datos: ",
      cnt: "MySQL, MongoDB, PostgreSQL, etc.",
    },
  ];
  const cond7 = [
    {
      title: "Google Ads: ",
      cnt: "Estrategias de marketing en motores de búsqueda (SEM) para aumentar su visibilidad en línea.",
    },
    {
      title: "Anuncios en Meta (Facebook e Instagram): ",
      cnt: "Aproveche el poder de las redes sociales para llegar a su audiencia objetivo.",
    },
    {
      title: "Diseño creativo de anuncios: ",
      cnt: "Diseños visuales atractivos y copys cautivadores.",
    },
    {
      title: "Análisis de resultados publicitarios: ",
      cnt: "Información impulsada por datos para optimizar continuamente su estrategia publicitaria.",
    },
  ];
  const cond8 = [
    {
      title: "Equipo profesional:",
      cnt: " Los miembros del equipo cuentan con amplia experiencia en la industria y conocimientos especializados para ofrecerle servicios profesionales y de alta calidad.",
    },
    {
      title: "Decisiones basadas en datos: ",
      cnt: "Utilizamos análisis de big data y estudios de mercado para desarrollar estrategias y planes de publicidad precisos.",
    },
    {
      title: "Servicios personalizados: ",
      cnt: "Entendemos que cada empresa tiene necesidades y objetivos únicos. Adaptamos nuestras soluciones publicitarias a las características, presupuesto y metas específicas de su negocio.",
    },
    {
      title: "Casos de éxito y experiencia: ",
      cnt: "Hemos proporcionado servicios publicitarios a numerosos clientes en diversas industrias, logrando resultados significativos. Al acumular y resumir experiencias, aplicamos modelos y estrategias exitosas a su proyecto, garantizando un sólido apoyo para sus campañas publicitarias.",
    },
  ];
  const tabs = [
    {
      id: 1,
      title: "Big Data y AI",
      value: "product",
      content: (
        <div className="w-full  relative">
          <div className="relative font-bold text-[#222222] text-[36px] mb-[19px] leading-[41px]">
            Big Data y AI
          </div>
          <div className="relative text-[#2243FF] text-[26px] mb-[61px]">
            Desbloquee el potencial de los datos y lidere la innovación
            inteligente
          </div>
          <div className="mb-[104px]">
            <div className="text-[#333333] xl:flex justify-start items-start mb-[40px]">
              <div className="max-w-full xl:max-w-[432px] xl:max-h-[238px] mb-[30px]">
                <DirectionAwareHover imageUrl="/img/servie-5.png">
                  <span className="font-normal text-sm"></span>
                </DirectionAwareHover>
              </div>
              <div className="flex-1 xl:ml-[26px] text-[18px] leading-[24px] font-bold">
                Nuestro equipo de científicos de datos y expertos en IA utiliza
                las tecnologías más avanzadas para transformar realmente su
                negocio. Ya sea que desee optimizar operaciones, mejorar la
                experiencia del cliente o desarrollar productos innovadores,
                podemos personalizar las soluciones de Big Data y IA más
                adecuadas para sus necesidades.
              </div>
            </div>
            <ul className="text-[18px] leading-[24px] text-[#333333] mb-[16px]  pl-[20px]">
              {cond3.map((i, index) => {
                return (
                  <li className="list-disc mb-[16px]" key={index}>
                    <span className="font-bold">{i.title}</span>
                    {i.cnt}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-[100px]">
            <div className="text-[#333333] xl:flex flex-row-reverse justify-start items-start mb-[40px]">
              <div className="max-w-full xl:max-w-[432px] xl:max-h-[238px] mb-[30px]">
                <DirectionAwareHover imageUrl="/img/service-6.png">
                  <span className="font-normal text-sm"></span>
                </DirectionAwareHover>
              </div>
              <div className="flex-1 xl:mr-[26px] text-[18px] leading-[24px] font-bold">
                Nuestro enfoque no solo se centra en proporcionar tecnología,
                sino en integrar la IA de manera fluida en sus procesos
                empresariales, asegurando que obtenga el máximo valor de estas
                tecnologías avanzadas.
              </div>
            </div>
            <ul className="text-[18px] leading-[24px] text-[#333333] mb-[16px] pl-[20px]">
              {cond4.map((i, index) => {
                return (
                  <li className="list-disc mb-[16px]" key={index}>
                    <span className="font-bold">{i.title}</span>
                    {i.cnt}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Desarrollo de Software",
      sub: "Recursos Empresariales (ERM)",
      value: "services",
      content: (
        <div className="w-full  relative">
          <div className="relative font-bold text-[#222222] text-[36px] mb-[19px] leading-[41px]">
            Desarrollo de Software
          </div>
          <div className="relative text-[#2243FF] text-[26px] mb-[61px]">
            Soluciones de software innovadoras que le permiten estar un paso
            adelante
          </div>
          <div className="mb-[104px]">
            <div className="text-[#333333] xl:flex justify-start items-start mb-[40px]">
              <div className="max-w-full xl:max-w-[432px] xl:max-h-[238px] mb-[30px]">
                <DirectionAwareHover imageUrl="/img/service-7.png">
                  <span className="font-normal text-sm"></span>
                </DirectionAwareHover>
              </div>
              <div className="flex-1 xl:ml-[26px] text-[18px] leading-[24px] font-bold">
                Nuestros servicios de diseño de sistemas SaaS incluyen análisis
                de requisitos, diseño de arquitectura del sistema, diseño de
                módulos funcionales, diseño de bases de datos, diseño de
                interfaces de usuario y diseño de seguridad. Según sus procesos
                y necesidades empresariales, crearemos un sistema SaaS potente,
                fácil de usar y altamente escalable.
              </div>
            </div>
            <ul className="text-[18px] leading-[24px] text-[#333333] mb-[16px]  pl-[20px]">
              {cond5.map((i, index) => {
                return (
                  <li className="list-disc mb-[16px]" key={index}>
                    <span className="font-bold">{i.title}</span>
                    {i.cnt}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-[100px]">
            <div className="text-[#333333] xl:flex flex-row-reverse justify-start items-start mb-[40px]">
              <div className="max-w-full xl:max-w-[432px] xl:max-h-[238px] mb-[30px]">
                <DirectionAwareHover imageUrl="/img/service-8.png">
                  <span className="font-normal text-sm"></span>
                </DirectionAwareHover>
              </div>
              <div className="flex-1 xl:mr-[26px] text-[18px] leading-[24px] font-bold">
                Podemos desarrollar varios tipos de aplicaciones para usted,
                incluyendo pero no limitado a aplicaciones móviles (iOS y
                Android), aplicaciones de escritorio (Windows y Mac),
                aplicaciones web, etc. Ya sea que necesite una aplicación
                sencilla de herramientas o una aplicación empresarial compleja,
                podemos satisfacer sus necesidades.
              </div>
            </div>
            <div className="text-[16px] leading-[28px] text-[#333333] mb-[16px] font-bold">
              Nuestro equipo de desarrollo domina varias pilas tecnológicas,
              incluyendo pero no limitado a:
            </div>
            <ul className="text-[18px] leading-[24px] text-[#333333] mb-[16px] pl-[20px]">
              {cond6.map((i, index) => {
                return (
                  <li className="list-disc mb-[16px]" key={index}>
                    <span className="font-bold">{i.title}</span>
                    {i.cnt}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Servicios de Publicidad",
      sub: " de Promoción de Marca",
      value: "case",
      content: (
        <div className="w-full  relative">
          <div className="relative font-bold text-[#222222] text-[36px] mb-[19px] leading-[41px]">
            Servicios de Publicidad
          </div>
          <div className="relative text-[#2243FF] text-[26px] mb-[61px]">
            Marketing preciso para maximizar el retorno de su inversión
            publicitaria
          </div>
          <div className="mb-[104px]">
            <div className="text-[#333333] xl:flex justify-start items-start mb-[40px]">
              <div className="max-w-full xl:max-w-[432px] xl:max-h-[238px] mb-[30px]">
                <DirectionAwareHover imageUrl="/img/service-9.png">
                  <span className="font-normal text-sm"></span>
                </DirectionAwareHover>
              </div>
              <div className="flex-1 xl:ml-[26px] text-[18px] leading-[24px] font-bold">
                Estamos convencidos de que una publicidad exitosa no solo se
                trata de la transmisión de información, sino también de
                establecer una conexión profunda y resonante con la audiencia
                objetivo.
              </div>
            </div>
            <ul className="text-[18px] leading-[24px] text-[#333333] mb-[16px]  pl-[20px]">
              {cond7.map((i, index) => {
                return (
                  <li className="list-disc mb-[16px]" key={index}>
                    <span className="font-bold">{i.title}</span>
                    {i.cnt}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-[100px]">
            <div className="text-[#333333] xl:flex flex-row-reverse justify-start items-start mb-[40px]">
              <div className="max-w-full xl:max-w-[432px] xl:max-h-[238px] mb-[30px]">
                <DirectionAwareHover imageUrl="/img/service-10.png">
                  <span className="font-normal text-sm"></span>
                </DirectionAwareHover>
              </div>
              <div className="flex-1 xl:mr-[26px] text-[18px] leading-[24px] font-bold">
                Nos enfocamos en estrategias basadas en datos, conceptos de
                diseño creativos y técnicas de segmentación precisas para
                personalizar las soluciones publicitarias que mejor se adapten a
                las necesidades de su negocio.
              </div>
            </div>
            <ul className="text-[18px] leading-[24px] text-[#333333] mb-[16px] pl-[20px]">
              {cond8.map((i, index) => {
                return (
                  <li className="list-disc mb-[16px]" key={index}>
                    <span className="font-bold">{i.title}</span>
                    {i.cnt}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Consultoría Empresarial",
      sub: "en Planificación Estratégica",
      value: "content",
      content: (
        <div className="w-full  relative">
          <div className="relative font-bold text-[#222222] text-[36px] mb-[19px] leading-[41px]">
            Consultoría Empresarial
          </div>
          <div className="relative text-[#2243FF] text-[26px] mb-[61px]">
            Perspectivas estratégicas para impulsar el crecimiento de su empresa
          </div>
          <div className="mb-[104px]">
            <div className="text-[#333333] xl:flex justify-start items-start mb-[40px]">
              <div className="max-w-full xl:max-w-[432px] xl:max-h-[238px] mb-[30px]">
                <DirectionAwareHover imageUrl="/img/service-2.png">
                  <span className="font-normal text-sm"></span>
                </DirectionAwareHover>
              </div>
              <div className="flex-1 xl:ml-[26px] text-[18px] leading-[24px] font-bold">
                En el complejo y cambiante entorno empresarial actual, las
                empresas necesitan decisiones acertadas y orientación
                profesional para lograr un crecimiento sostenible y una ventaja
                competitiva. Nuestros servicios de consultoría en gestión
                empresarial están diseñados para ofrecer soluciones profundas,
                integrales y personalizadas, que ayuden a su empresa a avanzar
                con solidez en el mercado y alcanzar sus objetivos estratégicos.
              </div>
            </div>
            <ul className="text-[18px] leading-[24px] text-[#333333] mb-[16px]  pl-[20px]">
              {cond1.map((i, index) => {
                return (
                  <li className="list-disc mb-[16px]" key={index}>
                    <span className="font-bold">{i.title}</span>
                    {i.cnt}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-[100px]">
            <div className="text-[#333333] xl:flex flex-row-reverse justify-start items-start mb-[40px]">
              <div className="max-w-full xl:max-w-[432px] xl:max-h-[238px] mb-[30px]">
                <DirectionAwareHover imageUrl="/img/service-3.png">
                  <span className="font-normal text-sm"></span>
                </DirectionAwareHover>
              </div>
              <div className="flex-1 xl:mr-[26px] text-[18px] leading-[24px] font-bold">
                Le ayudamos a definir la dirección y los objetivos a largo plazo
                de su empresa, elaborando planes estratégicos viables. A través
                de investigaciones de mercado detalladas, análisis de
                competencia y evaluación de recursos internos, determinamos la
                posición en el mercado, estrategias de productos o servicios, y
                rutas de crecimiento, asegurando que su empresa avance en la
                dirección correcta, aproveche las oportunidades del mercado y
                enfrente los desafíos.
              </div>
            </div>
            <ul className="text-[18px] leading-[24px] text-[#333333] mb-[16px] pl-[20px]">
              {cond2.map((i, index) => {
                return (
                  <li className="list-disc mb-[16px]" key={index}>
                    <span className="font-bold">{i.title}</span>
                    {i.cnt}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="overflow-hidden">
        <motion.div
          initial={{
            filter: "contrast(100%)",
          }}
          animate={{
            filter: "contrast(150%)",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative flex    justify-center items-center w-full pt-[80px] min-h-[560px] md:min-h-[560px] md:max-h-[560px] bg-[url('/img/service.png')] bg-cover bg-center bg-no-repeat px-[40px]"
        >
          <div className="max-w-[1160px] text-[#fff] w-full py-[60px] md:py-0">
            <div className="text-[24px]   md:text-[58px] md:leading-[67px] font-bold text-center md:mb-[28px] mb-[12px]">
              Soluciones digitales integrales que impulsan el éxito de su
              empresa
            </div>
            <div className="text-[14px]  text-center">
              Ofrecemos servicios digitales completos que satisfacen diversas
              necesidades de las empresas modernas. Ya sea que esté buscando
              soluciones de software robustas, estrategias publicitarias
              precisas o consultoría empresarial profesional, podemos
              personalizar la mejor solución para usted.
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center items-center px-[40px] bg-[#FFFFFF]  pb-[160px]">
        <div className="max-w-[1160px] text-[#fff] w-full">
          <div className="md:flex justify-start items-start ">
            <TabsVer tabs={tabs} />
          </div>
          <AboutBlock
            type="1"
            title="¿Listo para potenciar sus  capacidades digitales?"
            sub="Contáctenos para programar una consulta gratuita y descubrir cómo podemos aportar valor a su empresa."
          />
        </div>
      </div>
    </div>
  );
}
