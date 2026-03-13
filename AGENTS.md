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

No se busca:
- una web genérica del sector
- una landing chillona
- una plantilla evidente
- una estética amateur
- una interfaz sobrecargada
- una demo experimental disfrazada de web corporativa

La prioridad no es meter más cosas.
La prioridad es **elevar la dirección visual, la calidad percibida y la coherencia de ejecución**.

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
La prioridad actual es resolver y elevar la experiencia inicial de la home pública, en este orden:

1. `src/app/(public)/layout.tsx`
2. `src/app/(public)/page.tsx`
3. `src/components/motion/IntroOverlay/index.tsx`
4. `src/components/motion/IntroOverlay/IntroOverlay.module.scss`
5. `src/styles/globals.scss`
6. `src/components/layout/Header/index.tsx`
7. `src/components/layout/Header/Header.module.scss`
8. `src/components/home/Hero/index.tsx`
9. `src/components/home/Hero/Hero.module.scss`
10. `src/hooks/useGsapReveal.ts`
11. `src/styles/animations/_gsap.scss`

No dispersarse en nuevas secciones ni nuevas features mientras la intro, el hero y la percepción inicial no tengan nivel.

---

## Método de trabajo obligatorio
Antes de cambiar código:

1. **Auditar archivo por archivo**
2. **Detectar por qué el resultado se siente “meh”**
3. **Explicar qué está bajando el nivel percibido**
4. **Proponer una dirección visual corregida**
5. **Aplicar cambios concretos y contenidos**
6. **Evitar rehacer la arquitectura**
7. **Mantener los cambios auditables**

No hacer cambios grandes sin justificar claramente:

- qué problema resuelven
- por qué mejoran la percepción premium
- por qué encajan con la dirección de marca
- qué impacto tienen en el resto del proyecto

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
- **intro de entrada**
- **header**
- **hero**

No dispersarse en nuevas secciones ni nuevas features mientras esta base no tenga nivel.

---

## Intro de la home y reveal inicial
La intro de la home es una pieza crítica de percepción de marca.

### La intro debe ser
- estructural
- espacial
- cinematográfica
- limpia
- conectada a la página real
- elegante
- sobria
- controlada

### La intro NO debe ser
- un splash screen autónomo
- un overlay decorativo con branding encima
- una maqueta fake de la web
- una ventana falsa con chrome simulado
- una pieza separada del layout real
- una card que crece con apariencia de demo
- una intro “bonita” pero desconectada de la página

### Regla principal
La **web real debe existir desde el inicio**.

La intro debe actuar como una **capa de reveal** por encima de la home real, no como una escena independiente que luego desaparece.

### Secuencia deseada
1. fondo claro tipo marfil / mármol / mineral
2. aparición de una línea fina central
3. apertura arquitectónica desde esa línea
4. revelado del shell real de la home
5. asentamiento de la página
6. entrada posterior y escalonada de header y contenido principal del hero

### Reglas de motion para la intro
- debe existir un único criterio de orquestación de entrada
- evitar múltiples timelines compitiendo entre Intro, Header, Hero y reveals secundarios
- evitar hacks globales frágiles si una solución local es más limpia
- respetar `prefers-reduced-motion`
- no dejar contenido oculto por error
- evitar flashes de hidratación
- evitar maquetas fake para sugerir la página
- evitar repetir la intro completa en cada visita de la misma sesión si ya existe una lógica razonable para no hacerlo

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
- No introducir estados redundantes
- No introducir efectos GSAP duplicados o compitiendo entre sí
- No usar selectores globales excesivos si un alcance local resuelve mejor el problema

---

## Estilo de implementación
Al editar componentes o estilos:

- priorizar claridad sobre complejidad
- priorizar refinamiento sobre espectacularidad
- priorizar consistencia sobre ocurrencias
- priorizar percepción premium sobre efectos llamativos
- priorizar integración real sobre trucos visuales aislados

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

El header debe integrarse bien con la intro y con el hero.
No debe entrar antes de tiempo ni competir con la secuencia inicial.

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

El hero debe sentirse más **“firma seria”** que **“promo rápida”**.

Además:
- su estructura real debe poder existir antes de revelar todo su contenido
- el contenido principal debe entrar con control, no de golpe
- cualquier motion del hero debe subordinarse a la narrativa general de la home

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
8. validar el resultado visual y técnico

---

## Limpieza de lógica legacy
Si una implementación anterior deja de tener sentido tras una mejora, no conservarla por inercia.

Se puede eliminar:
- componentes legacy
- SCSS obsoleto
- estados viejos
- data-attributes antiguos
- timelines GSAP anteriores
- ramas de código que solo existan para sostener una solución descartada

Condiciones:
- comprobar referencias reales antes de borrar
- no dejar imports rotos
- no mantener archivos vacíos “por si acaso”
- explicar siempre qué se elimina y por qué

No hacer limpieza general del proyecto.  
Solo eliminar lo claramente obsoleto y directamente relacionado con la mejora en curso.

No conservar artefactos de la intro anterior solo por inercia o compatibilidad emocional con la solución vieja.

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

## Validación obligatoria de cambios
Toda mejora relevante debe validarse, como mínimo, con:

### Visual
- desktop
- mobile
- primera visita
- visitas posteriores en la misma sesión
- comportamiento con `prefers-reduced-motion`

### Técnica
- `npm run lint`
- `npx tsc --noEmit`

Si algo no puede validarse directamente, debe indicarse con claridad:
- qué falta por comprobar
- qué riesgo queda abierto
- qué parte necesita validación manual adicional

---

## Git y seguridad de cambios
Antes de cambios amplios o sensibles:

- sugerir checkpoint o commit intermedio
- mantener cambios revisables
- evitar modificaciones dispersas difíciles de auditar
- preferir bloques de cambio pequeños y reversibles

---

## Política de commits
Los cambios deben proponerse en bloques lógicos pequeños y auditables.

Evitar commits vagos como:
- `fix stuff`
- `update home`
- `changes`

Preferir mensajes precisos del tipo:
- `refactor(home-intro): scope reveal flow to public home only`
- `feat(home-intro): replace fake overlay with structural page reveal`
- `refactor(home-hero): align header and hero with shared intro phases`
- `chore(motion): remove legacy intro hiding and sync section reveals`

Cada bloque importante debe poder entenderse, revisarse y revertirse con claridad.

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

Si una propuesta añade ruido, teatralidad o artificio, no sirve.
Si una propuesta mejora control, jerarquía y calidad percibida, va en la dirección correcta.