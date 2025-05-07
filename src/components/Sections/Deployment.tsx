import Card from "../UI/Card";
import { UploadCloud, BarChart, Clock, ArrowRight } from "lucide-react";

const Deployment = () => {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Despliegue Automatizado
          </h3>

          <p className="text-gray-700 mb-4">
            Los procesos de implementación suelen implicar pasos complejos y la
            posibilidad de errores humanos. La IA puede transformar esta fase
            crítica automatizando la verificación, la orquestación y la
            monitorización.
          </p>

          <p className="text-gray-700 mb-6">
            Con la implementación basada en IA, los sistemas pueden programar
            lanzamientos de forma inteligente, analizar los riesgos de la
            implementación e incluso revertir automáticamente actualizaciones
            problemáticas antes de que afecten a los usuarios.
          </p>

          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-800 to-indigo-900 p-6 text-white">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-600 opacity-20"></div>
            <div className="absolute -left-5 -bottom-5 h-24 w-24 rounded-full bg-indigo-500 opacity-20"></div>

            <h4 className="text-xl font-semibold mb-4 relative z-10">
              Aceleración del Despliegue
            </h4>

            <div className="flex items-center mb-6 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-blue-200">Tradicional</span>
                <span className="text-lg font-bold">48-72 hrs</span>
              </div>

              <ArrowRight className="h-5 w-5 text-blue-300 mx-6" />

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                  <UploadCloud className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-blue-200">Impulsado por IA</span>
                <span className="text-lg font-bold">15-30 min</span>
              </div>
            </div>

            <p className="text-sm text-blue-200 relative z-10">
              La implementación basada en IA puede reducir el tiempo de
              implementación hasta en un 95 %, al tiempo que aumenta la
              confiabilidad y reduce los problemas posteriores a la
              implementación.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <Card
            title="Gestión Inteligente de Versiones"
            icon={<UploadCloud className="h-5 w-5 text-blue-600" />}
            gradient
          >
            <p>
              La IA puede analizar los cambios en el código, predecir los
              riesgos del despliegue y programar de manera inteligente las
              versiones para minimizar las interrupciones. El sistema aprende de
              despliegues anteriores para optimizar las estrategias de versiones
              futuras.
            </p>
          </Card>

          <Card
            title="Verificación Automatizada"
            icon={<BarChart className="h-5 w-5 text-teal-600" />}
          >
            <p className="mb-4">
              La verificación post-despliegue se automatiza mediante IA, que
              monitorea métricas clave, patrones de comportamiento de los
              usuarios y el rendimiento del sistema para detectar anomalías de
              manera instantánea.
            </p>
            <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span>Tiempo de respuesta</span>
                <span className="text-green-600 font-medium">↑15% Mejora</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Tasa de error</span>
                <span className="text-green-600 font-medium">
                  ↓42% Reducción
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Participación del usuario</span>
                <span className="text-green-600 font-medium">
                  ↑23% Aumentará
                </span>
              </div>
            </div>
          </Card>

          <Card
            title="Sistemas Auto-Restauradores"
            icon={<Clock className="h-5 w-5 text-purple-600" />}
          >
            <p>
              ¡Los sistemas de despliegue con IA pueden detectar problemas al
              instante y tomar acciones automáticas para solucionarlos! Pueden
              escalar recursos, redirigir el tráfico o incluso revertir
              actualizaciones problemáticas, todo sin que tengas que intervenir.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Deployment;
