# Estado del repo — Europe Road Trip Explorer

_Última actualización: 2026-09-23 (commit `baad12c`)_

## Qué es esto

`road-trip-europe` es una app de Next.js que empezó como un planificador de un solo road trip (Praga → Venecia) y ahora es un **explorador de 7 road trips distintos por Europa**. Cada viaje tiene su propio itinerario día a día, mapa, presupuesto, hoteles y galería de fotos, todos renderizados por el mismo motor de componentes.

- **Repo:** `git@github.com-danielmejiadev:danielmejiadev/road-trip-europe.git`
- **Ruta local:** `/Users/danielmejia/Documents/Daniel/road-trip-europe`
- **Deploy:** GitHub Pages, automático en cada push a `main` vía `.github/workflows/deploy.yml` (build está workflow, `actions/deploy-pages`)
- **URL pública:** `https://danielmejiadev.github.io/road-trip-europe/`
- **Rama principal:** `main` (sin otras ramas activas)
- **Último commit:** `baad12c` — "Turn the app into a multi-trip Europe Road Trip Explorer"

## Stack técnico

- Next.js 16.3.4, exportación estática (`output: "export"` en `next.config.ts`) — no hay servidor, todo se sirve como HTML/JS estático desde GitHub Pages
- React 19.2.8, TypeScript 5 estricto
- Tailwind CSS v4 (`@theme inline` en `app/globals.css` para variables de color/tipografía)
- `react-leaflet` + Leaflet para el mapa interactivo (tiles de Esri `World_Dark_Gray_Base`, sin necesidad de API key)
- `zustand` está instalado (`hooks/useTripStore.ts`) pero actualmente **sin uso real** en la app — quedó de una iteración anterior
- `@tanstack/react-query` instalado vía `Providers` pero tampoco tiene queries activas todavía (no hay backend/API externa)
- Sin backend: todo el contenido (itinerarios, precios, fotos) es data estática en TypeScript bajo `lib/data/`

## Cómo correrlo local

```bash
cd /Users/danielmejia/Documents/Daniel/road-trip-europe
npm install
npm run dev     # http://localhost:3000
npm run build   # genera ./out — lo que se despliega a GitHub Pages
```

## Arquitectura de datos (lo más importante para entender el repo)

### El tipo `Trip` (`lib/types.ts`)

Todo road trip es un objeto `Trip` con esta forma:

```
Trip
├── meta            → título, subtítulo, países, ruta resumida, días/noches,
│                      distancia/horas de conducción, tags de personalidad,
│                      nivel de presupuesto, tema de color, temporada, hero photo
├── destinations[]   → paradas con lat/lng, por qué se eligió el lugar, highlights
├── itinerary[]      → 14 DayItinerary, cada uno con sus TimelineActivity[]
├── hotels[]         → un hotel por destino, precio/habitación, estado de verificación
├── budgetCategories[] → 8 categorías (alojamiento, carro, combustible, peajes,
│                         comida, actividades, parking, varios), totales CALCULADOS
│                         desde constantes con nombre, no tipeados a mano
├── vignettes[]      → requisitos de viñeta/peaje por país cruzado
├── drivingLegs[]    → tramo por tramo (origen, destino, km, tiempo)
├── scenicDrives[]   → 2-4 carreteras panorámicas destacadas
└── photos[]         → TripPhoto[] con id de Unsplash verificado
```

### Registro central: `lib/data/trips/index.ts`

Un solo archivo exporta `trips: Trip[]` con los 7 viajes y `getTripById(id)`. Es el único lugar que hay que tocar para agregar un octavo viaje.

### Contexto de trip activo: `lib/trip-context.tsx`

`TripProvider` envuelve la página de detalle de un viaje y expone `useTrip()` a todos los componentes. Además inyecta las variables CSS `--color-accent` / `--color-accent-soft` del tema de color de ESE viaje específicamente, así que Hero, botones, badges, etc. cambian de color automáticamente sin que cada componente sepa qué viaje está activo.

### Rutas (`app/`)

- `app/page.tsx` → **Explorador** (home): grid de 7 tarjetas de viaje, filtros por personalidad, modo comparación. Client component, sin datos de servidor.
- `app/trip/[tripId]/page.tsx` → **Detalle del viaje**: usa `generateStaticParams()` para pre-renderizar las 7 rutas estáticamente (`dynamicParams = false`, obligatorio para `output: "export"`). Envuelve todo en `<TripProvider trip={trip}>` y renderiza Hero, TripDashboard, PhotoJourney, DayByDay, MapSection, ScenicDrives, BudgetSection — los mismos componentes que existían antes de la refactorización.

## Los 7 road trips

| Viaje | id | Países | Días/Noches | Distancia | Presupuesto | Color |
|---|---|---|---|---|---|---|
| Bohemia, Alps & the Adriatic (el original) | `bohemia-alps-adriatic` | 🇨🇿🇦🇹🇭🇺🇸🇮🇮🇹 | 14/14 | ~1.805 km | Moderado | dorado `#e8b86d` |
| Fairytale Europe | `fairytale-europe` | 🇨🇿🇩🇪🇦🇹🇮🇹 | 14/13 | ~1.180 km | Moderado | rosa cálido `#d98a6b` |
| History, Medieval Europe & Canals | `france-belgium-netherlands` | 🇫🇷🇧🇪🇳🇱 | 14/13 | ~1.775 km | Moderado | azul canal `#6b8cae` |
| Portugal — Costa Atlántica y Duero | `portugal` | 🇵🇹 | 14/13 | ~1.237 km | **Bajo** | turquesa "caribeño" `#2fb8a6` |
| Europa del Este | `eastern-europe` | 🇨🇿🇵🇱🇸🇰🇭🇺 | 14/13 | variable | **Bajo** | ámbar tierra `#c17a4a` |
| Alpine Europe | `alpine-europe` | 🇨🇭🇱🇮🇦🇹🇮🇹 | 14/13 | ~860 km | **Alto** | azul oscuro premium `#5c88a8` |
| French Alps & Italy | `french-alps-italy` | 🇫🇷🇮🇹 | 14/13 | ~1.320 km | Moderado | vino/borgoña `#a8567a` |

Cada uno tiene entre 5 y 8 destinos, 6 hoteles en promedio, 8 categorías de presupuesto calculadas, y entre 28 y 41 fotos reales de Unsplash (**verificadas dos veces**: HTTP 200 por curl Y descarga + inspección visual con la herramienta de lectura de imágenes, porque en rondas anteriores del proyecto hubo fotos que devolvían 200 pero mostraban el lugar equivocado — ej. un castillo mal etiquetado, un puerto de montaña genérico en vez del real).

**Nada tiene ranking ni "mejor viaje"** — el presupuesto de cada uno tiene una etiqueta descriptiva (`lower` / `moderate` / `higher`) y las tarjetas de comparación usan valores como "Alta/Moderada/Baja" con una explicación de qué significa cada uno, nunca un puntaje.

## Componentes reutilizados por los 7 viajes

Todos viven en `components/sections/` y ahora leen del contexto (`useTrip()`) en vez de importar datos globales:

- `Hero` — foto cinematográfica + ruta de destinos + CTA
- `TripDashboard` — tarjetas de estadísticas (viajeros, países, km, noches, presupuesto)
- `PhotoJourney` ("El recorrido") — scroll horizontal de destinos con modal de detalle (fotos, por qué el lugar, día a día ahí)
- `DayByDay` — selector de 14 días + timeline de actividades + modal de detalle por actividad con carrusel de fotos
- `MapSection` / `TripMap` — mapa Leaflet con ruta animada ("marching ants"), acepta destinos y color de acento como props
- `ScenicDrives` — carreteras panorámicas destacadas
- `BudgetSection` — desglose por categoría + margen de seguridad del 10% + resumen día a día con cada ítem con precio (desayuno, almuerzo, cena, entradas, alojamiento) en 2 columnas (precio unitario / total del grupo)

Nuevos, solo para el explorador (`components/explorer/`):

- `TripCard` — tarjeta grande con foto hero, mini-galería, ruta resumida, tags, presupuesto/persona; tiene un modo `selectable` para el comparador
- `TripFilters` — chips de personalidad (montañas, medieval, historia, costa, comida/vino, carreteras escénicas, fotografía, playas, campiña, presupuesto bajo, romántico) — vocabulario fijo en `lib/data/trip-tags.ts`
- `TripComparison` — tabla comparativa descriptiva (2-6 viajes), lógica en `lib/trip-comparison.ts`

## Decisiones de diseño relevantes

- **"Mini mapa" en las tarjetas del explorador**: se simplificó a una tira de texto con el nombre de cada destino en orden (no un Leaflet embebido por tarjeta) — evita cargar 7 mapas interactivos en la home por rendimiento. El mapa real e interactivo sigue existiendo en cada página de detalle.
- **Todos los precios llevan `verificationStatus`** (`confirmed` / `estimated` / `needs-verification`) en categorías de presupuesto y hoteles, mostrado como 🟢/🟡/🔴 en la sección de presupuesto — ningún dato se presenta como 100% confirmado si no se pudo verificar en vivo.
- **Banderas de país genéricas**: se agregó `countryCodeToFlag()` en `utils/format.ts` que convierte cualquier código ISO de país a su emoji de bandera, reemplazando un `if/else` hardcodeado que solo conocía los 5 países del viaje original.
- **Sistemas de peaje/viñeta por país verificados por separado en cada archivo de viaje** (Polonia no tiene viñeta para carros, Suiza usa una pegatina anual plana en vez de por días, Francia/Bélgica/Países Bajos no usan viñeta sino peaje por distancia o ninguno) — no se asumió que todos los países funcionan igual.

## Cómo se generó el contenido

La arquitectura (tipos, contexto, refactor de componentes, explorador, comparador, rutas) se hizo directamente. El contenido de los 6 viajes nuevos (itinerario completo, destinos, hoteles, presupuesto, fotos) se generó con 6 agentes en paralelo, cada uno con el mismo estándar de calidad que ya tenía el viaje original: contexto histórico/práctico en cada actividad, fotos verificadas visualmente (no solo por código HTTP), y presupuestos calculados desde constantes nombradas en vez de números tipeados a mano.

## Verificación hecha antes de este commit

- `npx tsc --noEmit` limpio con los 7 viajes integrados
- `npm run build` exitoso — genera las 7 rutas estáticas (`/trip/<id>`) más el explorador (`/`)
- Sample aleatorio de 15 fotos adicionales de los 6 viajes nuevos, todas devolviendo HTTP 200
- Inspección del HTML generado confirmando que los 7 títulos de viaje aparecen correctamente en el explorador y que los presupuestos por persona son distintos y coherentes por nivel (`lower` ~€1.367-1.859, `moderate` ~€1.859-2.389, `higher` ~€2.716)

## Pendiente / no verificado todavía

- **No se hizo una revisión visual en navegador** (mobile/desktop) del explorador ni de los 6 viajes nuevos — solo se verificó el HTML generado y el build. El único viaje probado visualmente en mobile hasta ahora es el original (`bohemia-alps-adriatic`).
- `hooks/useTripStore.ts` (zustand) y `@tanstack/react-query` siguen sin uso real — código heredado, no rotos pero tampoco necesarios hoy.
- `components/sections/DestinationsGallery.tsx` existe y se mantuvo actualizado (usa `useTrip()`), pero **no está montado en ninguna página** — es un componente huérfano de una iteración anterior.
- Precios y detalles como horarios de apertura, costos exactos de peajes/viñetas y nombres de hoteles específicos son estimaciones razonables, no reservas confirmadas — están marcados como tal vía `verificationStatus` donde aplica.
- El modo "Optimizar ruta" y "Slow Travel" descritos en el pedido original de expansión (secciones 15 y 16 del brief) **no se implementaron** — quedaron fuera del alcance de esta iteración.
