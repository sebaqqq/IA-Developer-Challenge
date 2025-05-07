import React from "react";
import Card from "../UI/Card";
import { MessageSquare, FileText, Users, Brain } from "lucide-react";

const ClientInteraction = () => {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 order-2 md:order-1">
          <Card
            title="Análisis y Documentación de Reuniones"
            icon={<MessageSquare className="h-5 w-5 text-blue-600" />}
            gradient
          >
            <p className="mb-4">
              La IA puede transcribir, analizar y extraer puntos clave de las
              reuniones con clientes, generando automáticamente resúmenes que
              destacan los requisitos de frontend, backend y base de datos, con
              mínima intervención humana.
            </p>
            <div className="p-4 bg-white/70 rounded-lg border border-gray-100">
              <h5 className="text-sm font-medium text-gray-900 mb-2">
                Análisis de Reunión con IA
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Frontend:</span>
                  <span>
                    Panel de control con análisis en tiempo real, diseño
                    responsivo para usuarios móviles.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Backend:</span>
                  <span>
                    API RESTful con autenticación JWT y gestión de usuarios,
                    integración con servicios de terceros para análisis de
                    datos.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">DB:</span>
                  <span>
                    PostgreSQL con optimización de datos de series temporales y
                    tablas de análisis histórico.
                  </span>
                </li>
              </ul>
            </div>
          </Card>

          <Card
            title="Documentación Automatizada"
            icon={<FileText className="h-5 w-5 text-purple-600" />}
          >
            <p>
              Los sistemas de IA pueden generar documentación completa
              directamente desde el código, incluyendo referencias de API,
              diagramas de arquitectura y ejemplos de uso, manteniéndose
              automáticamente sincronizados con la base de código a medida que
              evoluciona.
            </p>
          </Card>
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Mejora de la Interacción con el Cliente
          </h3>

          <p className="text-gray-700 mb-4">
            Las interacciones con los clientes son clave para el éxito de un
            proyecto, pero a menudo implican pérdida de información y
            malentendidos. La IA puede revolucionar la forma en que los
            desarrolladores capturan, procesan y responden a los requisitos de
            los clientes.
          </p>

          <p className="text-gray-700 mb-6">
            Al aprovechar el procesamiento de lenguaje natural, la IA puede
            extraer requisitos técnicos precisos de las conversaciones con los
            clientes, garantizar la alineación entre las expectativas del
            cliente y los planes de desarrollo, y mantener una comunicación
            clara a lo largo de todo el ciclo de vida del proyecto.
          </p>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Flujo de Comunicación con el Cliente
            </h4>

            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

              <WorkflowStep
                icon={<Users className="h-5 w-5 text-indigo-600" />}
                title="Reunión con el Cliente"
                description="La IA graba y transcribe la conversación en tiempo real."
              />

              <WorkflowStep
                icon={<Brain className="h-5 w-5 text-purple-600" />}
                title="Extracción de Requisitos"
                description="La IA analiza la conversación para identificar los requisitos técnicos."
              />

              <WorkflowStep
                icon={<FileText className="h-5 w-5 text-blue-600" />}
                title="Generación de Documentación"
                description="Creación automática de documentos de requisitos y especificaciones."
              />

              <WorkflowStep
                icon={<MessageSquare className="h-5 w-5 text-teal-600" />}
                title="Sugerencias de Aclaración"
                description="La IA identifica requisitos ambiguos y sugiere preguntas para aclararlos."
                isLast
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface WorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({
  icon,
  title,
  description,
  isLast = false,
}) => {
  return (
    <div className={`relative pl-12 ${isLast ? "" : "pb-8"}`}>
      <div className="absolute left-0 top-0 z-10 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h5 className="font-medium text-gray-900">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ClientInteraction;
