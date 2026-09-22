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
      "Devolución del coche en Mestre (evitar la ZTL de Venecia)",
      "Tren Mestre → Venezia Santa Lucia (7 min, €2/persona)",
      "Canal Grande → Rialto → San Marcos caminando",
      "Atardecer en San Marcos o desde Zattere",
      "Cena de despedida: pasta fresca y cicchetti",
      "Alojamiento en Cannaregio — más auténtico y barato",
    ],
    photoId: "venice-canal",
  },
];

export function getDestinationById(destinationId: string): Destination | undefined {
  return destinations.find((destination) => destination.id === destinationId);
}

export function getDestinationIdForDay(dayNumber: number): string | undefined {
  return destinations.find((destination) => destination.dayNumbers.includes(dayNumber))?.id;
}
