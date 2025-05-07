import React from "react";
import Card from "../UI/Card";
import { CheckCircle, Shield, AlertTriangle, RefreshCw } from "lucide-react";

const Testing = () => {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 order-2 md:order-1">
          <Card
            title="Generación Automatizada de Pruebas"
            icon={<CheckCircle className="h-5 w-5 text-green-600" />}
            gradient
          >
            <p className="mb-4">
              La IA puede analizar código y generar automáticamente conjuntos de
              pruebas integrales que abarcan pruebas unitarias, pruebas de
              integración y escenarios integrales con detección inteligente de
              casos extremos.
            </p>
            <div className="p-4 bg-white/70 rounded-lg border border-gray-100">
              <pre className="text-xs text-gray-800 overflow-x-auto">
                <code>{`// AI-generated test for the validateEmail function

test('validateEmail function', () => {
  // Valid email cases
  expect(validateEmail('user@example.com')).toBe(true);
  expect(validateEmail('name.surname@domain.co')).toBe(true);
  
  // Invalid email cases
  expect(validateEmail('invalid-email')).toBe(false);
  expect(validateEmail('missing@domain')).toBe(false);
  expect(validateEmail('@no-username.com')).toBe(false);
});`}</code>
              </pre>
            </div>
          </Card>

          <Card
            title="Detección de Vulnerabilidades de Seguridad"
            icon={<Shield className="h-5 w-5 text-blue-600" />}
          >
            <p>
              El análisis de seguridad impulsado por IA puede escanear
              continuamente el código en busca de posibles vulnerabilidades,
              identificar riesgos de seguridad antes del despliegue y sugerir
              alternativas seguras a patrones de código problemáticos.
            </p>
          </Card>
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Pruebas y Garantía de Calidad
          </h3>

          <p className="text-gray-700 mb-4">
            El control de calidad requiere pruebas exhaustivas en múltiples
            escenarios y casos extremos. La IA puede revolucionar este proceso
            al automatizar la creación, ejecución y análisis de pruebas.
          </p>

          <p className="text-gray-700 mb-6">
            Más allá de la simple generación de pruebas, la IA puede predecir
            posibles puntos de fallo, identificar vulnerabilidades de seguridad
            y garantizar una cobertura de pruebas completa sin intervención
            manual.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Beneficios de las Pruebas Impulsadas por IA
            </h4>

            <div className="space-y-4">
              <BenefitItem
                icon={<RefreshCw className="h-4 w-4 text-blue-600" />}
                title="Pruebas Continuas"
                description="¡Las pruebas se ejecutan automáticamente con cada cambio de código! Esto significa que recibes retroalimentación al instante, lo que te ayuda a identificar problemas rápidamente y mantener la calidad del código."
              />

              <BenefitItem
                icon={<AlertTriangle className="h-4 w-4 text-amber-600" />}
                title="Detección Proactiva de Problemas"
                description="¡La IA puede identificar posibles problemas antes de que se conviertan en un dolor de cabeza en producción! Esto te permite solucionarlos de manera proactiva, evitando sorpresas a última hora."
              />

              <BenefitItem
                icon={<Shield className="h-4 w-4 text-green-600" />}
                title="Pruebas con Enfoque en Seguridad"
                description="¡Incorpora un análisis de seguridad automatizado en el proceso de pruebas! Esto te ayuda a detectar vulnerabilidades antes de que lleguen a producción, asegurando que tu aplicación sea segura desde el principio."
              />

              <BenefitItem
                icon={<CheckCircle className="h-4 w-4 text-purple-600" />}
                title="Cobertura Integral"
                description="¡La IA asegura que todos los caminos del código sean probados, incluyendo esos casos límite que a menudo se pasan por alto manualmente! Esto garantiza una cobertura más completa y mejora la calidad de tus pruebas."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 p-1 bg-white rounded-md shadow-sm">
        {icon}
      </div>
      <div className="ml-3">
        <h5 className="font-medium text-gray-900">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Testing;
