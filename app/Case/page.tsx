"use client";
import { Tabs } from "../../components/ui/tabs";
import { motion } from "motion/react";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import AboutBlock from "../../components/custom/AboutBlock";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

export default function Case() {
  const tabs = [
    {
      id: 1,
      title: "Caso de Desarrollo ",
      sub: "de Aplicaciones",
      value: "product",
      content: (
        <div className="w-full  relative">
          <div className="relative font-bold text-[#222222] text-[36px] mb-[72px] leading-[41px]">
            Caso de Desarrollo de Aplicaciones
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-0 bottom-[-20px] h-[2px] bg-[#0077FF] z-[12px]"
            ></motion.div>
          </div>
          <div className="text-[#333333] lg:flex justify-start items-start mb-[223px]">
            <div className="max-w-full lg:max-w-[373px] mb-[30px] lg:mb-0 flex lg:block justify-center items-center">
              <DirectionAwareHover imageUrl="/img/case-2.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>

            <div className="flex-1 lg:ml-[26px]">
              <div className="mb-[30px]">
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Necesidad del Cliente:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  SerpienteDigital quería desarrollar una aplicación móvil para
                  proporcionar información sobre servicios locales, como
                  recomendaciones de restaurantes, noticias de eventos y ofertas
                  especiales.
                </div>
              </div>
              <div className="mb-[30px]">
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Solución:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  Nuestro equipo de desarrollo creó una aplicación móvil potente
                  para SerpienteDigital. La aplicación cuenta con una función de
                  localización precisa que recomienda a los usuarios negocios y
                  eventos cercanos según su ubicación. Los usuarios pueden ver
                  detalles de los negocios, reseñas de otros usuarios y ofertas,
                  y realizar reservas y pagos en línea.
                </div>
              </div>
              <div>
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Resultado Final:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  SerpienteDigital quería desarrollar una aplicación móvil para
                  proporcionar información sobre servicios locales, como
                  recomendaciones de restaurantes, noticias de eventos y ofertas
                  especiales.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Sistema de Gestión de ",
      sub: "Recursos Empresariales (ERM)",
      value: "services",
      content: (
        <div className="w-full  relative">
          <div className="relative font-bold text-[#222222] text-[36px] mb-[72px] leading-[41px]">
            Sistema de Gestión de Recursos Empresariales (ERM)
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-0 bottom-[-20px] h-[2px] bg-[#0077FF] z-[12px]"
            ></motion.div>
          </div>
          <div className="text-[#333333] lg:flex justify-cente items-start mb-[223px]">
            <div className="max-w-full lg:max-w-[373px] mb-[30px] lg:h-[494px] lg:mb-0 flex  justify-center items-center">
              <DirectionAwareHover imageUrl="/img/case-3.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>

            <div className="flex-1 lg:ml-[26px]">
              <div className="mb-[30px]">
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Necesidad del Cliente:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  VolcánTech es una empresa de tamaño mediano en rápido
                  crecimiento que necesita un sistema integrado de gestión de
                  recursos empresariales para manejar los recursos humanos, las
                  finanzas, los proyectos y las relaciones con los clientes.
                </div>
              </div>
              <div className="mb-[30px]">
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Solución:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  Diseñamos y desarrollamos un sistema de gestión de recursos
                  empresariales (ERM) personalizado para VolcánTech. El sistema
                  cuenta con un módulo de gestión de recursos humanos (perfiles
                  de empleados, asistencia, gestión de nóminas, etc.), un módulo
                  de gestión financiera (presupuestos, reembolsos, generación de
                  informes, etc.), un módulo de gestión de proyectos
                  (planificación de proyectos, asignación de tareas, seguimiento
                  del progreso, etc.) y un módulo de gestión de relaciones con
                  los clientes (información de clientes, oportunidades de venta,
                  gestión de contratos, etc.).
                </div>
              </div>
              <div>
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Resultado Final:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  Tras el lanzamiento del sistema, se mejoró significativamente
                  la eficiencia en la gestión interna de VolcánTech, se
                  redujeron los costos de gestión y se proporcionó un sólido
                  apoyo para el desarrollo de negocios de la empresa.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Caso de Campaña",
      sub: " de Promoción de Marca",
      value: "case",
      content: (
        <div className="w-full  relative">
          <div className="relative font-bold text-[#222222] text-[36px] mb-[72px] leading-[41px]">
            Caso de Campaña de Promoción de Marca
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-0 bottom-[-20px] h-[2px] bg-[#0077FF] z-[12px]"
            ></motion.div>
          </div>
          <div className="text-[#333333] lg:flex justify-start items-start mb-[223px]">
            <div className="max-w-full lg:max-w-[373px] mb-[30px] lg:mb-0 flex lg:block justify-center items-center">
              <DirectionAwareHover imageUrl="/img/case-4.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>

            <div className="flex-1 lg:ml-[26px]">
              <div className="mb-[30px]">
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Necesidad del Cliente:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  NopalTech es una nueva marca de moda que busca aumentar su
                  reconocimiento de marca y atraer a su público objetivo a
                  través de la publicidad.
                </div>
              </div>
              <div className="mb-[30px]">
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Solución:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  Nuestro equipo de publicidad desarrolló una estrategia
                  integral para NopalTech. Se lanzaron anuncios de palabras
                  clave y anuncios gráficos en la red de búsqueda y display de
                  Google, y se crearon y publicaron una serie de anuncios
                  creativos en las plataformas de Facebook e Instagram de Meta.
                </div>
              </div>
              <div>
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Resultado Final:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  La campaña publicitaria elevó rápidamente el reconocimiento de
                  la marca NopalTech, incrementó significativamente el tráfico
                  del sitio web y las ventas de productos, y mejoró eficazmente
                  la percepción y reputación de la marca entre el público
                  objetivo.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Caso de Consultoría ",
      sub: "en Planificación Estratégica",
      value: "content",
      content: (
        <div className="w-full  relative">
          <div className="relative font-bold text-[#222222] text-[36px] mb-[72px] leading-[41px]">
            Caso de Desarrollo de Aplicaciones
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-0 bottom-[-20px] h-[2px] bg-[#0077FF] z-[12px]"
            ></motion.div>
          </div>
          <div className="text-[#333333] lg:flex justify-start items-start mb-[223px]">
            <div className="mb-[30px] max-w-full lg:max-w-[373px] lg:mb-0 flex lg:block justify-center items-center">
              <DirectionAwareHover imageUrl="/img/case-5.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>

            <div className="flex-1 lg:ml-[26px]">
              <div className="mb-[30px]">
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Necesidad del Cliente:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  MayaSoft es una empresa de manufactura tradicional que
                  enfrenta una intensificación de la competencia en el mercado y
                  cuellos de botella en el crecimiento de su negocio, y necesita
                  desarrollar una nueva estrategia de crecimiento.
                </div>
              </div>
              <div className="mb-[30px]">
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Solución:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  Nuestro equipo de consultoría realizó un análisis exhaustivo
                  del entorno de mercado, los recursos internos y las
                  capacidades de MayaSoft, y elaboró una estrategia centrada en
                  la transformación digital y la innovación de productos.
                  Además, proporcionamos un plan de implementación detallado y
                  recomendaciones para ayudar al cliente a avanzar con éxito en
                  la transformación estratégica.
                </div>
              </div>
              <div>
                <div className="text-[26px] leading-[30px] mb-[2px]">
                  Resultado Final:
                </div>
                <div className="text-[16px] leading-[28px] text-[#666666]">
                  Siguiendo nuestras recomendaciones, MayaSoft implementó con
                  éxito la transformación estratégica, lanzó una serie de
                  productos innovadores, expandió nuevos canales de mercado y
                  mejoró significativamente su competitividad y rentabilidad.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center w-full pt-[80px] min-h-[560px] md:min-h-[560px] md:max-h-[560px] bg-[url('/img/case.png')] bg-cover bg-center bg-no-repeat px-[40px]">
        <div className="max-w-[1160px] text-[#fff] w-full">
          <div className="text-[24px]  text-[40px] md:text-[58px] md:leading-[67px] font-bold text-left md:mb-[28px] mb-[12px]">
            Casos de Éxito de Clientes
          </div>
          <div className="text-[14px]  text-left">
            Explora nuestros casos de éxito. Desde startups hasta marcas
            consolidadas, nuestras obras muestran cómo hemos <br /> ayudado a
            nuestros clientes a lograr la transformación digital y el
            crecimiento empresarial.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-[40px] bg-[#F5F7FA] pt-[60px] pb-[160px]">
        <div className="max-w-[1160px] text-[#fff] w-full ">
          <Tabs tabs={tabs} />
          <AboutBlock
            type="1"
            title="Le ofrecemos soluciones personalizadas de la más alta calidad."
            sub="Ahora, dé el primer paso para colaborar con nosotros. Unamos fuerzas
          para convertir su visión empresarial en realidad."
          />
        </div>
      </div>
    </div>
  );
}
