import React from "react";
import SectionTitle from "../UI/SectionTitle";
import { Bot, Code, Server } from "lucide-react";

const Introduction = () => {
  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="El desafío de la automatización del desarrollador"
          subtitle="Explorando cómo la IA puede transformar y mejorar el rol de los desarrolladores de software"
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              En el panorama tecnológico de rápido cambio de hoy en día, mi rol
              como desarrollador de software se ve enriquecido con oportunidades
              sin precedentes para la transformación, gracias a la inteligencia
              artificial y la automatización, herramientas que me permiten
              optimizar procesos y ofrecer soluciones más eficientes y
              innovadoras.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              El desafío que tenemos por delante es explorar cómo las
              herramientas impulsadas por IA, especialmente los modelos de
              lenguaje grandes como GPT, pueden revolucionar nuestras tareas
              diarias, desde la generación y prueba de código hasta la
              documentación y la interacción con los clientes.
            </p>

            <p className="text-lg text-gray-700">
              Esta exploración conceptual analiza un futuro en el que la IA no
              solo asiste a los desarrolladores, sino que cambia
              fundamentalmente la forma en que abordamos la creación de
              software, potenciando la eficiencia, calidad y creatividad a lo
              largo de todo el ciclo de vida del desarrollo.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Áreas Clave de Transformación
            </h3>

            <div className="space-y-4">
              <TransformationArea
                icon={<Code className="h-5 w-5 text-blue-600" />}
                title="Generación y Optimización de Código"
                description="La IA automatiza tareas rutinarias de codificación mientras optimiza el rendimiento."
              />

              <TransformationArea
                icon={<Server className="h-5 w-5 text-purple-600" />}
                title="Pruebas y Despliegue"
                description="Creación automatizada de pruebas y procesos de despliegue simplificados."
              />

              <TransformationArea
                icon={<Bot className="h-5 w-5 text-teal-600" />}
                title="Interacción con Clientes y Documentación"
                description="Análisis de requisitos impulsado por IA y documentación automática."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TransformationAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TransformationArea: React.FC<TransformationAreaProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 p-2 rounded-lg bg-white shadow-sm">
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Introduction;
