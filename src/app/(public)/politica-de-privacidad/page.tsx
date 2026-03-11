import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Política de Privacidad',
    description: 'Política de privacidad y protección de datos de Multiservicios Varo.',
    path: '/politica-de-privacidad',
});

export default function PoliticaPrivacidadPage() {
    return (
        <LegalContent
            title="Política de Privacidad"
            lastUpdated="Octubre 2023"
        >
            <h2>Protección de datos personales</h2>
            <p>
                En Multiservicios Varo respetamos profundamente su privacidad y nos comprometemos a proteger los datos personales que nos proporciona, en estricto cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>

            <h2>¿Qué datos recopilamos?</h2>
            <p>A través de nuestros formularios (contacto, presupuesto) recopilamos:</p>
            <ul>
                <li>Datos identificativos: Nombre y apellidos.</li>
                <li>Datos de contacto: Teléfono, correo electrónico, localidad o código postal.</li>
                <li>Datos del proyecto: Información sobre las necesidades de reforma o mantenimiento.</li>
            </ul>

            <h2>¿Para qué usamos sus datos?</h2>
            <p>La finalidad de la recopilación es exclusivamente:</p>
            <ol>
                <li>Atender sus consultas y solicitudes de información.</li>
                <li>Elaborar y enviarle los presupuestos solicitados.</li>
                <li>Gestionar la relación comercial si finalmente contrata nuestros servicios.</li>
            </ol>

            <h2>Legitimación</h2>
            <p>
                La base legal para el tratamiento de sus datos es el consentimiento explícito que presta al marcar la casilla de aceptación en nuestros formularios y enviar la solicitud.
            </p>

            <h2>Cesión a terceros</h2>
            <p>
                Sus datos no se cederán a terceros, salvo obligación legal o cuando sea estrictamente necesario para la ejecución del servicio contratado (por ejemplo, comunicación a proveedores logísticos), de lo cual será informado previamente.
            </p>

            <h2>Derechos del usuario</h2>
            <p>
                Puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación, portabilidad u oposición dirigiéndose a nuestro correo electrónico: <strong>info@multiserviciosvaro.es</strong>, adjuntando prueba de identidad.
            </p>
        </LegalContent>
    );
}
