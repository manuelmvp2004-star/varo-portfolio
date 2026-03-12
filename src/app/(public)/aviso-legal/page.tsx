import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Aviso Legal',
    description: 'Información legal, condiciones de uso e identificación del titular de la web de Multiservicios Varo.',
    path: '/aviso-legal',
});

export default function AvisoLegalPage() {
    return (
        <LegalContent
            title="Aviso Legal"
            lastUpdated="Octubre 2023"
        >
            <h2>1. DATOS IDENTIFICATIVOS</h2>
            <p>
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002,
                de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico
                (LSSICE), a continuación se reflejan los siguientes datos del titular de la web:
            </p>
            <ul>
                <li><strong>Titular:</strong> Empresa Ficticia S.L. (Multiservicios Varo)</li>
                <li><strong>NIF:</strong> B-00000000</li>
                <li><strong>Domicilio Social:</strong> Calle Ficticia 123, 14900 Lucena (Córdoba), España</li>
                <li><strong>Correo electrónico:</strong> info@multiserviciosvaro.es</li>
                <li><strong>Teléfono:</strong> +34 616 424 271</li>
            </ul>
            <p><em>(Nota: Esta es una página de ejemplo para un diseño de portfolio)</em></p>

            <h2>2. USO DEL PORTAL</h2>
            <p>
                El acceso y/o uso de este portal de Multiservicios Varo atribuye la condición de USUARIO,
                que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
            </p>

            <h2>3. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
            <p>
                Multiservicios Varo por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño).
            </p>

            <h2>4. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
            <p>
                Multiservicios Varo no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos.
            </p>
        </LegalContent>
    );
}
