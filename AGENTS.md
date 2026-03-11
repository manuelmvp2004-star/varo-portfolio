# AGENTS.md

## Proyecto
Web corporativa premium para la empresa real **Multiservicios Varo**.

## Objetivo principal
La web debe transmitir desde el primer segundo:

- profesionalidad
- confianza
- orden
- precisión
- ejecución de alta calidad
- imagen seria, moderna y premium
- sensación de marca cuidada y solvente

La percepción deseada es:
**“Esta empresa trabaja con criterio, detalle y calidad real.”**

---

## Contexto del proyecto
Se está construyendo una web corporativa sobria y de nivel para una empresa de multiservicios real.

No se busca una web genérica del sector.
No se busca una landing chillona.
No se busca una plantilla evidente.
No se busca una estética amateur ni sobrecargada.

La prioridad actual no es rehacer la arquitectura, sino **elevar la dirección visual y la calidad percibida**.

---

## Stack obligatorio
Mantener este stack salvo instrucción explícita del usuario:

- **Next.js 16**
- **TypeScript**
- **App Router**
- **src/**
- **SCSS Modules**
- **GSAP**
- **Git + GitHub**
- desarrollo en **Linux con VS Code**
- despliegue posterior en **Hostinger**

---

## Tecnologías descartadas
No proponer ni introducir como solución principal:

- WordPress
- Tailwind
- Webflow
- Framer como solución final
- Hostinger Horizon export
- Angular como base principal
- builders visuales como base de producción

---

## Restricciones de arquitectura
La arquitectura general actual está aprobada.

Por tanto:

- **No rehacer el árbol entero**
- **No reestructurar por gusto**
- **No mover carpetas de forma innecesaria**
- **No introducir patrones complejos sin necesidad real**
- **No añadir dependencias porque sí**
- **No romper el App Router**
- **No convertir el proyecto en una demo experimental**

Se debe trabajar **sobre la base existente**, mejorándola con criterio.

---

## Prioridad actual de trabajo
Auditar y mejorar, en este orden:

1. `src/app/layout.tsx`
2. `src/styles/globals.scss`
3. `src/styles/tokens/_colors.scss`
4. `src/styles/tokens/_typography.scss`
5. `src/components/layout/Header/index.tsx`
6. `src/components/home/Hero/index.tsx`
7. `src/components/home/Hero/Hero.module.scss`

---

## Método de trabajo obligatorio
Antes de cambiar código:

1. **Auditar archivo por archivo**
2. **Detectar por qué el resultado se siente “meh”**
3. **Explicar qué está bajando el nivel percibido**
4. **Proponer una dirección visual corregida**
5. **Aplicar cambios concretos y contenidos**
6. **Evitar rehacer la arquitectura**

No hacer cambios grandes sin justificar claramente:

- qué problema resuelven
- por qué mejoran la percepción premium
- por qué encajan con la dirección de marca

---

## Dirección visual obligatoria

### Lo que sí debe transmitir
- lujo sobrio
- precisión
- calma visual
- jerarquía clara
- confianza
- premium discreto
- ejecución cuidada
- sensación de marca seria y moderna

### Lo que no debe aparecer
- estética genérica de “multiservicios”
- look de plantilla barata
- recursos visuales gritones
- efectos exagerados
- UI recargada
- degradados estridentes
- estilo gamer
- look startup vacío
- bloques sin criterio visual
- botones y cards genéricos tipo SaaS de plantilla

---

## Criterios visuales
Toda propuesta debe reforzar estos principios:

### 1. Sobriedad
Menos ruido, más control.  
Cada elemento debe parecer deliberado.

### 2. Jerarquía
La web debe tener una lectura clara y elegante.  
Titulares, subtítulos, texto, CTAs y espacios deben respirar.

### 3. Ritmo y espaciado
El espaciado debe dar sensación de orden, calma y nivel.  
Evitar densidad torpe o separación arbitraria.

### 4. Tipografía
La tipografía debe sentirse cuidada, seria y con autoridad.  
No debe parecer genérica ni improvisada.

### 5. Color
La paleta debe ser contenida y premium.  
Pocos colores, bien elegidos, con contraste fino y sensación de calidad.

### 6. Motion
La animación debe ser:
- sutil
- elegante
- funcional
- nada aparatosa

GSAP debe utilizarse con moderación y propósito.

### 7. Calidad percibida
Cada detalle debe empujar la sensación de:
- empresa fiable
- servicio serio
- trabajo bien ejecutado
- marca con criterio

---

## Enfoque actual sobre UI
La prioridad inmediata es elevar:

- **sistema visual base**
- **paleta**
- **tipografía**
- **espaciado principal**
- **header**
- **hero**

No dispersarse en nuevas secciones ni nuevas features mientras esta base no tenga nivel.

---

## Reglas de código
- Mantener el código limpio, legible y fácil de mantener
- Preferir cambios pequeños y de alto impacto
- Mantener consistencia entre tokens y componentes
- Evitar números mágicos si existe una lógica de sistema
- Preservar accesibilidad y semántica
- Evitar duplicación innecesaria
- No romper componentes ya válidos por hacer refactors cosméticos
- Si algo funciona estructuralmente, mejorar su acabado visual sin destruirlo

---

## Estilo de implementación
Al editar componentes o estilos:

- priorizar claridad sobre complejidad
- priorizar refinamiento sobre espectacularidad
- priorizar consistencia sobre ocurrencias
- priorizar percepción premium sobre efectos llamativos

Las decisiones deben parecer de **director de arte + frontend senior**, no de generador automático de secciones.

---

## Header
El header debe transmitir:

- marca seria
- navegación clara
- sensación premium
- control visual
- confianza

Evitar:

- cabeceras genéricas
- barras sin personalidad
- CTAs chillones
- exceso de elementos
- aspecto de plantilla estándar

---

## Hero
El hero es crítico.

Debe transmitir:

- autoridad
- claridad
- nivel
- especialización
- calidad de ejecución

Evitar:

- titulares genéricos
- claims de relleno
- distribución pobre
- bloques demasiado típicos
- estética de landing repetida
- exceso de adornos visuales sin sentido

El hero debe sentirse más “firma seria” que “promo rápida”.

---

## Tokens y sistema visual
Los tokens deben comportarse como un sistema real, no como una colección aleatoria.

### Colores
La paleta debe ser:
- contenida
- elegante
- contrastada con criterio
- premium
- usable en fondos, superficies, texto y estados

### Tipografía
Definir jerarquía clara para:
- display / hero
- headings
- body
- small / UI labels

Debe existir una relación coherente entre:
- tamaño
- peso
- interlineado
- tracking
- contraste jerárquico

### Espaciado
El spacing debe aportar:
- aire
- estructura
- lectura limpia
- sensación de control

---

## Qué evitar al proponer cambios
No proponer por defecto:

- rediseños completos sin pedirlo
- añadir librerías visuales innecesarias
- meter componentes por moda
- adornos “premium” falsos
- neomorfismo
- glassmorphism exagerado
- dark mode estridente
- gradientes de color innecesarios
- fondos llenos de ruido
- microinteracciones teatrales

Premium aquí significa:
**precisión, control y criterio**, no decoración.

---

## Tono del trabajo
El resultado debe sentirse:

- serio
- elegante
- preciso
- adulto
- contemporáneo
- comercialmente sólido

No debe sentirse:
- juvenil
- experimental
- improvisado
- visualmente ansioso
- demasiado corporativo vacío
- demasiado creativo sin negocio detrás

---

## Flujo recomendado al trabajar
Cuando se pida una mejora:

1. leer los archivos relevantes
2. auditar problemas reales
3. identificar qué resta calidad percibida
4. proponer dirección refinada
5. hacer cambios concretos
6. revisar consistencia visual
7. comprobar que no se ha roto la arquitectura ni el tono del proyecto

---

## Calidad mínima esperada
Toda propuesta o cambio debe mejorar al menos uno de estos puntos sin empeorar los demás:

- jerarquía visual
- claridad
- elegancia
- legibilidad
- coherencia
- percepción premium
- confianza
- calidad de marca

Si una idea hace el proyecto más vistoso pero menos serio, **no sirve**.

---

## Regla de decisión
Ante varias opciones válidas, elegir la que mejor combine:

- sobriedad
- escalabilidad
- calidad percibida
- facilidad de mantenimiento
- coherencia con una marca premium real

---

## Git y seguridad de cambios
Antes de cambios amplios o sensibles:

- sugerir checkpoint o commit intermedio
- mantener cambios revisables
- evitar modificaciones dispersas difíciles de auditar

---

## Resumen ejecutivo
Este proyecto no necesita más “cosas”.
Necesita **más criterio visual**.

La misión actual es transformar una base correcta pero genérica en una web que se sienta:

- premium
- sólida
- limpia
- sobria
- precisa
- profesional de verdad

Cada decisión debe acercar la experiencia a esa percepción.