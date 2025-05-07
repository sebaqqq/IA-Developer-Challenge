import Card from "../UI/Card";
import AnimatedProcess from "../UI/AnimatedProcess";
import { Code, GitBranch, Zap } from "lucide-react";

const developmentSteps = [
  {
    id: 1,
    label: "Análisis de Requisitos",
    description:
      "La IA analiza los requisitos del cliente y los convierte en especificaciones técnicas.",
  },
  {
    id: 2,
    label: "Generación de Código",
    description:
      "La IA genera la estructura inicial del código basada en las especificaciones técnicas.",
  },
  {
    id: 3,
    label: "Optimización",
    description:
      "La IA mejora la eficiencia y legibilidad del código a través de la refactorización automatizada.",
  },
  {
    id: 4,
    label: "Implementación de Características",
    description:
      "La IA asiste en la implementación de características complejas siguiendo las mejores prácticas.",
  },
];

const Development = () => {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Automatización del Proceso de Desarrollo
          </h3>

          <p className="text-gray-700 mb-4">
            El proceso de desarrollo tradicional suele tener muchas tareas
            repetitivas que se pueden agilizar con la ayuda de la automatización
            mediante IA. Usando modelos de lenguaje avanzados, podemos cambiar
            la forma en que escribimos, probamos y optimizamos el código,
            haciéndolo mucho más rápido y eficiente.
          </p>

          <p className="text-gray-700 mb-6">
            Como desarrollador, la IA puede entender los requisitos, generar
            código base, sugerir optimizaciones e incluso implementar
            características complejas con mínima intervención humana,
            permitiéndome concentrarme en tomar decisiones de diseño de mayor
            nivel y en aspectos más estratégicos del desarrollo.
          </p>

          <AnimatedProcess steps={developmentSteps} />
        </div>

        <div className="space-y-6">
          <Card
            title="Generación Automática de Código"
            icon={<Code className="h-5 w-5 text-blue-600" />}
            gradient
          >
            <p className="mb-4">
              Los modelos de IA pueden generar funciones, clases y componentes
              completos basados en descripciones o especificaciones técnicas,
              reduciendo el tiempo de desarrollo hasta en un 40%.
            </p>
            <div className="p-4 bg-white/70 rounded-lg border border-gray-100">
              <pre className="text-xs text-gray-800 overflow-x-auto">
                <code>{`// Prompt: "Create a function to validate email addresses"
  function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }`}</code>
              </pre>
            </div>
          </Card>

          <Card
            title="Control de Versiones Inteligente"
            icon={<GitBranch className="h-5 w-5 text-purple-600" />}
          >
            <p>
              Los sistemas de control de versiones impulsados por IA pueden
              gestionar automáticamente las ramas, detectar conflictos de manera
              temprana y ofrecer sugerencias inteligentes para la fusión,
              reduciendo los problemas de integración y agilizando la
              colaboración.
            </p>
          </Card>

          <Card
            title="Optimización del Rendimiento"
            icon={<Zap className="h-5 w-5 text-amber-600" />}
          >
            <p>
              La IA puede analizar continuamente el código en busca de cuellos
              de botella en el rendimiento, sugerir optimizaciones e incluso
              implementar mejoras de manera automática, asegurando que tu
              aplicación mantenga su eficiencia máxima.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Development;
