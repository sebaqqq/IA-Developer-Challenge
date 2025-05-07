import React from "react";
import SectionTitle from "../UI/SectionTitle";
import { CheckCircle, Brain, Rocket } from "lucide-react";

const Conclusion = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="El Futuro del Desarrollo"
          subtitle="Adoptando la IA como una fuerza transformadora en la creación de software"
          alignment="center"
          withAccent={false}
        />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-blue-100 text-lg">
            La integración de la IA en el proceso de desarrollo de software
            representa no solo una mejora incremental, sino una transformación
            fundamental en la forma en que construimos tecnología. Al adoptar
            estos cambios, los desarrolladores y las organizaciones pueden
            desbloquear niveles sin precedentes de eficiencia, calidad e
            innovación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ConclusionCard
            icon={<Brain className="h-6 w-6 text-blue-300" />}
            title="Desarrollo Impulsado por IA"
            description="Procesos de desarrollo mejorados por automatización inteligente y generación de código"
          />

          <ConclusionCard
            icon={<CheckCircle className="h-6 w-6 text-teal-300" />}
            title="Enfoque en la Calidad"
            description="Pruebas y verificación automatizadas que aseguran una calidad excepcional del software"
          />

          <ConclusionCard
            icon={<Rocket className="h-6 w-6 text-purple-300" />}
            title="Innovación Acelerada"
            description="Entrega más rápida que permite más experimentación y soluciones creativas"
          />
        </div>
      </div>
    </section>
  );
};

interface ConclusionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ConclusionCard: React.FC<ConclusionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-colors">
      <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg inline-flex mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
};

export default Conclusion;
