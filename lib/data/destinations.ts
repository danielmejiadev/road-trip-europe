import type { Destination } from "@/lib/types";

export const destinations: Destination[] = [
  {
    id: "prague",
    name: "Praga",
    country: "República Checa",
    countryFlag: "🇨🇿",
    nights: 3,
    days: "Días 1-3",
    dayNumbers: [1, 2, 3],
    lat: 50.0755,
    lng: 14.4378,
    description:
      "La ciudad de las cien torres. Praga enamora con su casco histórico medieval intacto, el Puente de Carlos al amanecer y la vida en los adoquines de Malá Strana.",
    highlights: [
      "Castillo de Praga y Catedral de San Vito",
      "Puente de Carlos al amanecer y atardecer",
      "Plaza de la Ciudad Vieja y Reloj Astronómico",
      "Barrio judío de Josefov",
      "Colina Petřín con vistas panorámicas",
      "Gastronomía checa: svíčková, svíčková",
    ],
    photoId: "prague-panorama",
    locationDescription:
      "Capital de la República Checa, a orillas del río Vltava, en pleno centro de Europa — a unos 350 km de Berlín, 330 km de Viena y 280 km de Múnich.",
    whyThisPlace:
      "Es el punto de partida obvio: vuelos baratos desde casi cualquier ciudad, un casco histórico medieval que sobrevivió intacto a las dos guerras mundiales, y una ciudad que se disfruta perfectamente a pie y en transporte público antes de recoger el carro de alquiler el día 4.",
  },
  {
    id: "cesky-krumlov",
    name: "Český Krumlov",
    country: "República Checa",
    countryFlag: "🇨🇿",
    nights: 1,
    days: "Día 4",
    dayNumbers: [4],
    lat: 48.8127,
    lng: 14.3175,
    description:
      "Un pueblo de cuento envuelto por el río Vltava. El castillo medieval domina el meandro y el casco histórico es Patrimonio UNESCO.",
    highlights: [
      "Castillo y torre barroca",
      "Casco histórico Patrimonio UNESCO",
      "Barrio de Latrán",
      "Mirador del jardín del castillo al atardecer",
      "Cena en Na Louží (gastronomía tradicional checa)",
    ],
    photoId: "cesky-krumlov-castle",
    locationDescription:
      "Pueblo medieval a 170 km al sur de Praga, en la región de Bohemia del Sur, muy cerca de la frontera con Austria.",
    whyThisPlace:
      "Es la escala perfecta para la primera etapa en carro: solo 2h30 desde Praga, rompe el trayecto largo hacia Austria y permite dormir en un pueblo Patrimonio de la Humanidad que la mayoría de turistas solo ve en una excursión de un día desde Praga.",
  },
  {
    id: "austria",
    name: "Salzkammergut",
    country: "Austria",
    countryFlag: "🇦🇹",
    nights: 2,
    days: "Días 5-6",
    dayNumbers: [5, 6],
    lat: 47.5622,
    lng: 13.6493,
    description:
      "La región de los lagos alpinos austriacos. Gosausee con sus reflejos de glaciar y el icónico Hallstatt, el pueblo más fotografiado de los Alpes.",
    highlights: [
      "Gosausee: paseo de 2-3h alrededor del lago superior e inferior",
      "Hallstatt al amanecer (antes de las multitudes)",
      "St. Wolfgang a orillas del Wolfgangsee",
      "Paisajes alpinos y desayunos Gasthof con vistas",
    ],
    photoId: "gosausee",
    locationDescription:
      "Región de lagos alpinos en el centro de Austria, entre Salzburgo y Graz, a unos 200 km al suroeste de Viena.",
    whyThisPlace:
      "Conecta Bohemia con Hungría sin renunciar a los Alpes: Hallstatt y el Gosausee están literalmente de camino, y quedarse 2 noches (en vez de solo parar unas horas, como hace la mayoría) permite ver Hallstatt al amanecer, sin las multitudes de autobuses turísticos del mediodía.",
  },
  {
    id: "budapest",
    name: "Budapest",
    country: "Hungría",
    countryFlag: "🇭🇺",
    nights: 3,
    days: "Días 7-9",
    dayNumbers: [7, 8, 9],
    lat: 47.4979,
    lng: 19.0402,
    description:
      "La perla del Danubio. Budapest combina la elegancia de Buda con la energía de Pest, los baños termales romanos y los bares ruina del Barrio Judío.",
    highlights: [
      "Parlamento — uno de los más bellos del mundo",
      "Baños Széchenyi (reservar con antelación)",
      "Crucero nocturno por el Danubio",
      "Bastión de los Pescadores y Castillo de Buda",
      "Sinagoga y bares ruina del Barrio Judío",
      "Atardecer desde la Colina Gellért",
    ],
    photoId: "budapest-parliament",
    locationDescription:
      "Capital de Hungría, dividida por el Danubio entre las colinas de Buda y la llanura de Pest, a 380 km al sureste de Gosau.",
    whyThisPlace:
      "Es la ciudad más grande de toda la ruta y se le dan 3 noches -el doble que a la mayoría de paradas- porque hay para varios días distintos: baños termales, la mejor gastronomía del viaje, y una ciudad que cambia por completo de cara según se vea de día, de noche o desde el agua en un crucero.",
  },
  {
    id: "bled",
    name: "Bled / Bohinj",
    country: "Eslovenia",
    countryFlag: "🇸🇮",
    nights: 2,
    days: "Días 10-11",
    dayNumbers: [10, 11],
    lat: 46.3683,
    lng: 14.1146,
    description:
      "El lago de ensueño de Eslovenia. Bled con su isla y castillo medieval, y Bohinj más salvaje y tranquilo, los dos joyas de los Alpes eslovenos.",
    highlights: [
      "Amanecer en Ojstrica o Mala Osojnica sobre el lago",
      "Barca a la isla de Bled (pletna o remos)",
      "Castillo de Bled (45 min de senderismo)",
      "Kremsnite — el postre típico de Bled",
      "Lago de Bohinj: baño, paseo, teleférico Vogel",
      "Cena en Pr' Skavcu (restaurante de granja local)",
    ],
    photoId: "lake-bled",
    locationDescription:
      "En los Alpes Julianos, al noroeste de Eslovenia, a solo 50 km de la frontera con Italia y 540 km al suroeste de Budapest — la etapa de conducción más larga de todo el viaje.",
    whyThisPlace:
      "Bled es la postal que todo el mundo reconoce, pero Bohinj (20 minutos más allá, ya dentro del Parque Nacional de Triglav) es donde de verdad se respira naturaleza sin las multitudes — por eso el alojamiento se elige en Bohinj y Bled se visita como excursión de medio día, no al revés.",
  },
  {
    id: "soca",
    name: "Valle del Soča",
    country: "Eslovenia",
    countryFlag: "🇸🇮",
    nights: 1,
    days: "Día 12",
    dayNumbers: [12],
    lat: 46.3369,
    lng: 13.5546,
    description:
      "El río más verde del mundo. El valle del Soča con su agua color esmeralda es uno de los paisajes más espectaculares de Europa, conectado por el mítico Paso de Vršič.",
    highlights: [
      "Paso de Vršič (50 horquillas, 1611m) — el más espectacular de Eslovenia",
      "Fuente del río Soča (senderismo 20 min)",
      "Cascada de Kozjak (45 min ida y vuelta)",
      "Pueblo de Kobarid con historia de la I Guerra Mundial",
      "Paseo junto al Soča esmeralda en Bovec",
    ],
    photoId: "soca-river",
    locationDescription:
      "Valle alpino en el extremo noroeste de Eslovenia, pegado a la frontera italiana, conectado con Bled a través del legendario Paso de Vršič.",
    whyThisPlace:
      "Es la única forma de cruzar los Alpes Julianos en carro sin dar un rodeo de horas: el Vršič conecta Bled con Italia en un solo día épico de curvas, y de paso descubre uno de los ríos más fotogénicos de Europa que casi ningún itinerario de 'lo esencial de Eslovenia' incluye.",
  },
  {
    id: "dolomites",
    name: "Dolomitas",
    country: "Italia",
    countryFlag: "🇮🇹",
    nights: 1,
    days: "Día 13",
    dayNumbers: [13],
    lat: 46.5478,
    lng: 11.7172,
    description:
      "Las montañas más espectaculares de los Alpes. Las agujas dolomíticas, el teleférico Seceda y el amanecer en Alpe di Siusi son imprescindibles.",
    highlights: [
      "Teleférico Seceda (2518m) — picos Geisler/Odle icónicos",
      "Paseo por la cresta de Seceda (2-3h, fácil-moderado)",
      "Alpe di Siusi al amanecer — vista de Sassolungo y Sassopiatto",
      "Val Gardena — pueblo típico tirolés",
      "Lago di Braies si el itinerario lo permite",
    ],
    photoId: "dolomites-seceda",
    locationDescription:
      "Cordillera en el norte de Italia (Trentino-Alto Adigio/Südtirol), a unos 200 km de la frontera eslovena cruzando por Tarvisio.",
    whyThisPlace:
      "Val Gardena da acceso directo al teleférico de Seceda en pocos minutos, evitando las carreteras saturadas de otras bases dolomíticas más conocidas como Cortina — Ortisei está igual de bien situado y con muchas menos multitudes.",
  },
  {
    id: "venice",
    name: "Venecia",
    country: "Italia",
    countryFlag: "🇮🇹",
    nights: 1,
    days: "Día 14",
    dayNumbers: [14],
    lat: 45.4408,
    lng: 12.3155,
    description:
      "El final de ensueño. Venecia en Septiembre todavía guarda algo de luz mediterránea y menos turistas que en verano. El Canal Grande, el Rialto y San Marcos al atardecer.",
    highlights: [
      "Devolución del carro en Mestre (evitar la ZTL de Venecia)",
      "Tren Mestre → Venezia Santa Lucia (7 min, €2/persona)",
      "Canal Grande → Rialto → San Marcos caminando",
      "Atardecer en San Marcos o desde Zattere",
      "Cena de despedida: pasta fresca y cicchetti",
      "Alojamiento en Cannaregio — más auténtico y barato",
    ],
    photoId: "venice-canal",
    locationDescription:
      "En la costa noreste de Italia, sobre una laguna del mar Adriático — el punto final de la ruta, a 210 km de Val Gardena.",
    whyThisPlace:
      "Es el cierre perfecto: se devuelve el carro en Mestre (evitando la prohibición de circular en el centro histórico) y se entra a la ciudad en tren en solo 7 minutos, terminando el viaje caminando y sin carro, tal como empezó en Praga.",
  },
];

export function getDestinationById(destinationId: string): Destination | undefined {
  return destinations.find((destination) => destination.id === destinationId);
}

export function getDestinationIdForDay(dayNumber: number): string | undefined {
  return destinations.find((destination) => destination.dayNumbers.includes(dayNumber))?.id;
}
