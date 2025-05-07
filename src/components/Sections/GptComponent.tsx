import React, { useState } from "react";
import SectionTitle from "../UI/SectionTitle";
import {
  GitCommit,
  MessageSquare,
  FileText,
  CheckCircle,
  Terminal,
} from "lucide-react";

const GptComponent = () => {
  const [activeTab, setActiveTab] = useState("commit");

  return (
    <section id="gpt-component" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Asistente de Desarrollador Impulsado por GPT"
          subtitle="Un componente inteligente que transforma la documentación del código y la comunicación con el cliente."
          alignment="center"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="border-b border-gray-100">
              <nav className="flex">
                <TabButton
                  active={activeTab === "commit"}
                  onClick={() => setActiveTab("commit")}
                  icon={<GitCommit className="h-4 w-4" />}
                  label="Documentación de Commits"
                />
                <TabButton
                  active={activeTab === "client"}
                  onClick={() => setActiveTab("client")}
                  icon={<MessageSquare className="h-4 w-4" />}
                  label="Análisis de Reunión con el Cliente"
                />
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "commit" ? (
                <CommitDocumentation />
              ) : (
                <ClientMeetingAnalysis />
              )}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Cómo Funciona
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Terminal className="h-5 w-5 text-blue-600" />}
                title="Procesamiento de Entrada"
                description="GPT analiza los cambios de código o las transcripciones de las reuniones para comprender el contexto y los detalles técnicos."
              />

              <FeatureCard
                icon={<FileText className="h-5 w-5 text-purple-600" />}
                title="Documentación Generada"
                description="Genera documentación completa que resalta los cambios clave y sus implicaciones."
              />

              <FeatureCard
                icon={<CheckCircle className="h-5 w-5 text-teal-600" />}
                title="Mejora Continua"
                description="El sistema aprende de los comentarios y proyectos anteriores para mejorar la calidad de la documentación."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  onClick,
  icon,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
        active
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

const CommitDocumentation = () => {
  return (
    <div>
      <p className="text-gray-700 mb-6">
        El asistente de documentación de commits impulsado por GPT analiza
        automáticamente los cambios de código y genera documentación detallada
        para cada commit, destacando los cambios, los posibles impactos y las
        sugerencias de optimización.
      </p>

      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-2">
          Ejemplo de Commit
        </h4>
        <pre className="text-xs text-gray-800 overflow-x-auto">
          <code>{`feat(auth): implement JWT authentication middleware

- Add token generation and validation
- Implement role-based access control
- Add refresh token functionality
- Update user repository for token storage`}</code>
        </pre>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
        <div className="flex items-center mb-2">
          <GitCommit className="h-4 w-4 text-blue-600 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">
            Documentación Generada por GPT
          </h4>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-xs font-medium text-gray-700">
              Resumen de Cambios
            </h5>
            <p className="text-sm text-gray-800">
              Este commit implementa un sistema completo de autenticación JWT
              con generación de tokens, validación y control de acceso basado en
              roles.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-medium text-gray-700">
              IMPACTO TÉCNICO
            </h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>
                Todas las rutas protegidas ahora requieren tokens JWT válidos
              </li>
              <li>
                Los permisos de usuario se aplican a través de middleware basado
                en roles
              </li>
              <li>
                El mecanismo de renovación de tokens permite sesiones extendidas
              </li>
              <li>
                Cambios en la base de datos: nuevos campos en la tabla de
                usuarios para tokens de renovación
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-medium text-gray-700">
              SUGERENCIAS DE OPTIMIZACIÓN
            </h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>
                Considerar implementar una lista negra de tokens para mejorar la
                seguridad
              </li>
              <li>
                Añadir limitación de tasa en los endpoints de autenticación para
                prevenir ataques de fuerza bruta
              </li>
              <li>
                Almacenar en caché los permisos de usuario utilizados con
                frecuencia para reducir las consultas a la base de datos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientMeetingAnalysis = () => {
  return (
    <div>
      <p className="text-gray-700 mb-6">
        El componente de Análisis de Reunión con el Cliente utiliza GPT para
        grabar, transcribir y analizar automáticamente las reuniones con los
        clientes, extrayendo los requisitos técnicos clave y organizándolos en
        tareas accionables para el equipo de desarrollo.
      </p>

      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-2">
          Extracto de la Transcripción de la Reunión
        </h4>
        <p className="text-xs text-gray-700 italic">
          "Necesitamos que el panel de control muestre análisis en tiempo real
          sobre el compromiso de los usuarios. Debe actualizarse automáticamente
          cada minuto aproximadamente. Y asegúrate de que funcione bien también
          en dispositivos móviles. Para la base de datos, necesitamos almacenar
          al menos 12 meses de datos históricos para informes, y la API debe ser
          realmente rápida, incluso con grandes volúmenes de datos..."
        </p>
      </div>

      <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
        <div className="flex items-center mb-2">
          <MessageSquare className="h-4 w-4 text-purple-600 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">
            GPT-Generated Analysis
          </h4>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-xs font-medium text-gray-700">
              REQUISITOS DE FRONTEND
            </h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>
                Panel de control con visualización de análisis en tiempo real
              </li>
              <li>
                Funcionalidad de actualización automática (aproximadamente cada
                60 segundos)
              </li>
              <li>Diseño responsivo optimizado para dispositivos móviles</li>
              <li>
                Visualización de datos para métricas de compromiso de usuarios
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-medium text-gray-700">
              REQUISITOS DE BACKEND
            </h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>API de alto rendimiento para datos de análisis</li>
              <li>
                Mecanismo de Websocket o polling para actualizaciones en tiempo
                real
              </li>
              <li>
                Capa de caché para mejorar el rendimiento con grandes volúmenes
                de datos
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-medium text-gray-700">
              REQUISITOS DE BASE DE DATOS
            </h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>
                Solución de almacenamiento para un mínimo de 12 meses de datos
                históricos
              </li>
              <li>
                Consultas optimizadas para datos de análisis de series
                temporales
              </li>
              <li>
                Estrategia de indexación para consultas de informes de alto
                rendimiento
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">{icon}</div>
        <h3 className="ml-3 font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default GptComponent;
