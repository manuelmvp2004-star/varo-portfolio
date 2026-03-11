import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Política de Cookies',
    description: 'Información sobre el uso de cookies en la web de Multiservicios Varo.',
    path: '/politica-de-cookies',
});

export default function PoliticaCookiesPage() {
    return (
        <LegalContent
            title="Política de Cookies"
            lastUpdated="Octubre 2023"
        >
            <h2>¿Qué son las cookies?</h2>
            <p>
                Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
            </p>

            <h2>Cookies utilizadas en este sitio web</h2>
            <p>
                Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.
            </p>

            <h3>Cookies propias (Necesarias)</h3>
            <p>
                Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.
            </p>
            <ul>
                <li><strong>consentimiento_cookies</strong>: Permite recordar si el usuario ha aceptado o rechazado la instalación de cookies no estrictamente necesarias.</li>
            </ul>

            <h3>Cookies de terceros</h3>
            <p>
                Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.
            </p>
            <ul>
                <li><strong>Analíticas (Ej. Google Analytics)</strong>: Almacenan cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google.</li>
                <li><strong>Publicitarias</strong>: Permiten la gestión de los espacios publicitarios en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.</li>
            </ul>

            <h2>Desactivación o eliminación de cookies</h2>
            <p>
                En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Adicionalmente al panel de preferencias de nuestra web, estas acciones se realizan de forma diferente en función del navegador que esté usando:
            </p>
            <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Firefox</a></li>
            </ul>
        </LegalContent>
    );
}
