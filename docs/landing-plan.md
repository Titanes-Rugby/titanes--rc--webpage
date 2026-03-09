# Plan Landing - Titanes Rugby Club

## Objetivo
Crear una homepage tipo landing que:

1. Presente identidad del club.
2. Genere accion (`Unete`, `Ver Fixture`, `Contactar`).
3. Sea facil de reemplazar cuando lleguen textos/fotos oficiales.

## Estructura de la Landing (MVP Pro)

1. **Header fijo**
- Logo, navegacion, CTA principal (`Unete`).
- Menu desktop con submenus y menu mobile.

2. **Hero**
- Titulo potente + subtitulo + 2 CTAs.
- Imagen/parallax de fondo.
- 3 metricas rapidas (ej. jugadores, anos, categorias).

3. **Seccion "Quienes Somos"**
- Bloque de valor del club.
- 3 pilares visuales: `Hermandad`, `Homor`, `Disciplina`.

4. **Equipos y Categorias**
- Cards para: `Primera`, `Juveniles`, `Femenino`.
- Boton por card: `Ver Plantel` / `Ver Calendario`.

5. **Proximos Partidos (Fixture Preview)**
- 3 proximos encuentros en cards.
- CTA: `Ver Fixture Completo`.

6. **Noticias / Media**
- 3 cards de noticias o highlights.
- CTA: `Ver Todas las Noticias`.

7. **Patrocinadores**
- Banda de logos (placeholder por ahora).

8. **CTA final**
- Fondo contrastante + mensaje + boton `Hazte Miembro`.

9. **Footer**
- Contacto, redes, direccion, links legales.

## Copy temporal (Lorem Ipsum)
- Usar lorem ipsum solo en parrafos.
- Mantener titulos reales de secciones (ej: "Equipos", "Fixture", "Noticias").
- Dejar un archivo central de contenido placeholder para reemplazo rapido despues.

## Plan de ejecucion por fases

1. **Fase 1: Wireframe y jerarquia**
- Definir layout final desktop/mobile y orden de secciones.

2. **Fase 2: Implementacion UI**
- Construir secciones en `App.tsx` con componentes reutilizables.
- Definir estilos consistentes (spacing, tipografia, botones).

3. **Fase 3: Contenido temporal**
- Inyectar lorem ipsum y datos fake consistentes.

4. **Fase 4: Pulido UX**
- Animaciones sutiles (Framer Motion), estados hover/focus, accesibilidad.

5. **Fase 5: QA**
- Revision responsive, performance basica, y chequeo visual final.

## Entregables

1. Landing funcional completa en homepage.
2. Componentes modulares por seccion.
3. Placeholder content listo para reemplazar por texto real.
4. Checklist de reemplazo (que textos/imagenes faltan del cliente).
