import React from "react";
import SectionTitle from "../UI/SectionTitle";
import { LightbulbIcon, Users, Zap, Rocket } from "lucide-react";

const Reflection = () => {
  return (
    <section id="reflection" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Reflexión e Impacto"
          subtitle="Cómo la transformación con IA cambia el rol de los desarrolladores y mejora los resultados comerciales."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Transformando el Rol del Desarrollador
            </h3>

            <p className="text-gray-700 mb-4">
              A medida que la IA asume más tareas rutinarias de codificación, el
              rol de los desarrolladores evoluciona hacia un enfoque de
              pensamiento de alto nivel, diseño arquitectónico y resolución
              creativa de problemas. Lejos de reemplazar a los desarrolladores,
              la IA les permite concentrarse en los aspectos más impactantes de
              la creación de software.
            </p>

            <p className="text-gray-700 mb-6">
              Este cambio representa una evolución significativa en la profesión
              de desarrollador, pasando de un trabajo enfocado en la
              implementación a un rol más estratégico que combina la experiencia
              técnica con la creatividad y el conocimiento del dominio
              empresarial.
            </p>

            <div className="relative bg-gradient-to-r from-indigo-100 to-blue-50 rounded-xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full -mr-12 -mt-12 opacity-50"></div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4 relative z-10">
                Evolución del Desarrollador
              </h4>

              <div className="space-y-4 relative z-10">
                <EvolutionItem
                  before="Escribir código repetitivo y base"
                  after="Definir la arquitectura y patrones del software"
                />

                <EvolutionItem
                  before="Pruebas manuales y depuración"
                  after="Planificación estratégica de pruebas e identificación de casos límite"
                />

                <EvolutionItem
                  before="Redacción tediosa de documentación"
                  after="Diseño y optimización de sistemas a nivel alto"
                />

                <EvolutionItem
                  before="Gestión rutinaria de despliegues"
                  after="Creación de características innovadoras y mejora de la experiencia de usuario (UX)"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Impacto en el Negocio
            </h3>

            <p className="text-gray-700 mb-6">
              La integración de la IA en el flujo de trabajo de desarrollo
              ofrece beneficios comerciales sustanciales más allá de las simples
              ganancias de eficiencia. Las organizaciones experimentan una
              transformación en sus capacidades de entrega, una mejora en la
              calidad y una mayor capacidad para responder a los cambios del
              mercado.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <ImpactCard
                icon={<Zap className="h-6 w-6 text-amber-500" />}
                title="Entrega Acelerada"
                value="68%"
                description="Mayor velocidad en la entrega de nuevas características"
              />

              <ImpactCard
                icon={<LightbulbIcon className="h-6 w-6 text-purple-500" />}
                title="Crecimiento en Innovación"
                value="3.2x"
                description="Aumento en el desarrollo de nuevas características"
              />

              <ImpactCard
                icon={<Users className="h-6 w-6 text-teal-500" />}
                title="Satisfacción del Cliente"
                value="42%"
                description="Mejora en los puntajes de satisfacción del cliente"
              />

              <ImpactCard
                icon={<Rocket className="h-6 w-6 text-blue-500" />}
                title="Eficiencia en Costos"
                value="35%"
                description="Reducción en los costos de desarrollo"
              />
            </div>

            <div className="mt-8 p-5 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Perspectivas Futuras
              </h4>
              <p className="text-gray-700">
                A medida que las herramientas de IA continúan evolucionando,
                podemos esperar una integración aún más profunda en el ciclo de
                vida del desarrollo, con la IA convirtiéndose en un colaborador
                activo en los aspectos creativos del desarrollo de software, no
                solo en los detalles de implementación. Esta colaboración entre
                la creatividad humana y las capacidades de la IA redefinirá lo
                que es posible en la creación de software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface EvolutionItemProps {
  before: string;
  after: string;
}

const EvolutionItem: React.FC<EvolutionItemProps> = ({ before, after }) => {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <p className="text-sm text-gray-600">{before}</p>
      </div>

      <div className="mx-4 flex-shrink-0">
        <svg
          width="24"
          height="8"
          viewBox="0 0 24 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.3536 4.35356C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464468C19.9763 0.269206 19.6597 0.269206 19.4645 0.464468C19.2692 0.65973 19.2692 0.976312 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35356ZM-4.37114e-08 4.5L23 4.5L23 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
            fill="#3B82F6"
          />
        </svg>
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium text-blue-800">{after}</p>
      </div>
    </div>
  );
};

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  icon,
  title,
  value,
  description,
}) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        <div className="flex-shrink-0">{icon}</div>
        <h3 className="ml-2 font-medium text-gray-900 text-sm">{title}</h3>
      </div>

      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};

export default Reflection;
