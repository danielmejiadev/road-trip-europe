import type { TimelineActivity, TripPhoto } from "@/lib/types";

// Photo IDs from Unsplash, curated and verified to load (HTTP 200) as of this commit.
export const tripPhotos: TripPhoto[] = [
  {
    id: "prague-panorama",
    destinationId: "prague",
    caption: "Panorámica de Praga desde Petřín",
    unsplashId: "1541849546-216549ae216d",
    status: "mock" as const,
  },
  {
    id: "prague-charles-bridge",
    destinationId: "prague",
    caption: "Puente de Carlos al amanecer",
    unsplashId: "1535723129303-6a7635e28cd3",
    status: "mock" as const,
  },
  {
    id: "prague-night",
    destinationId: "prague",
    caption: "Praga de noche",
    unsplashId: "1780134193661-ebe7547a5848",
    status: "mock" as const,
  },
  {
    id: "cesky-krumlov-castle",
    destinationId: "cesky-krumlov",
    caption: "Castillo de Český Krumlov",
    unsplashId: "1764145468410-04135e78e2e1",
    status: "mock" as const,
  },
  {
    id: "cesky-krumlov-town",
    destinationId: "cesky-krumlov",
    caption: "Casco histórico de Český Krumlov",
    unsplashId: "1634842543395-1f502123e081",
    status: "mock" as const,
  },
  {
    id: "hallstatt-lake",
    destinationId: "austria",
    caption: "Lago de Hallstatt",
    unsplashId: "1694508048484-842335a8c569",
    status: "mock" as const,
  },
  {
    id: "gosausee",
    destinationId: "austria",
    caption: "Gosausee entre los Alpes",
    unsplashId: "1698871138114-b01a19a8b9c7",
    status: "mock" as const,
  },
  {
    id: "austria-mountains",
    destinationId: "austria",
    caption: "Montañas austríacas",
    unsplashId: "1621532450828-732396728722",
    status: "mock" as const,
  },
  {
    id: "budapest-parliament",
    destinationId: "budapest",
    caption: "Parlamento de Budapest al atardecer",
    unsplashId: "1761157845019-11c2d237eb75",
    status: "mock" as const,
  },
  {
    id: "budapest-night",
    destinationId: "budapest",
    caption: "Budapest iluminada de noche",
    unsplashId: "1507622560124-621e26755fb8",
    status: "mock" as const,
  },
  {
    id: "budapest-fisherman",
    destinationId: "budapest",
    caption: "Bastión de los Pescadores",
    unsplashId: "1549877452-9c387954fbc2",
    status: "mock" as const,
  },
  {
    id: "lake-bled",
    destinationId: "bled",
    caption: "Lago de Bled con su isla",
    unsplashId: "1678189803726-c98010ef41e5",
    status: "mock" as const,
  },
  {
    id: "bled-castle",
    destinationId: "bled",
    caption: "Castillo de Bled sobre el lago",
    unsplashId: "1691513826089-98be0e562e72",
    status: "mock" as const,
  },
  {
    id: "lake-bohinj",
    destinationId: "bled",
    caption: "Lago de Bohinj en calma",
    unsplashId: "1628844349504-be690076fe6b",
    status: "mock" as const,
  },
  {
    id: "vrsic-pass",
    destinationId: "soca",
    caption: "Paso de Vršič, 50 horquillas",
    unsplashId: "1748894808078-9f1a68474d91",
    status: "mock" as const,
  },
  {
    id: "soca-river",
    destinationId: "soca",
    caption: "Río Soča color esmeralda",
    unsplashId: "1783202506420-4b093ba82f5b",
    status: "mock" as const,
  },
  {
    id: "bovec",
    destinationId: "soca",
    caption: "Bovec entre las montañas",
    unsplashId: "1633428109931-841207a73157",
    status: "mock" as const,
  },
  {
    id: "dolomites-seceda",
    destinationId: "dolomites",
    caption: "Seceda, picos de los Dolomitas",
    unsplashId: "1551524559-8af4e6624178",
    status: "mock" as const,
  },
  {
    id: "dolomites-panorama",
    destinationId: "dolomites",
    caption: "Panorámica de los Dolomitas",
    unsplashId: "1704834310326-70f4826650cd",
    status: "mock" as const,
  },
  {
    id: "lago-braies",
    destinationId: "dolomites",
    caption: "Lago di Braies",
    unsplashId: "1476514525535-07fb3b4ae5f1",
    status: "mock" as const,
  },
  {
    id: "alpe-di-siusi",
    destinationId: "dolomites",
    caption: "Alpe di Siusi al amanecer",
    unsplashId: "1558618666-fcd25c85cd64",
    status: "mock" as const,
  },
  {
    id: "venice-canal",
    destinationId: "venice",
    caption: "Canal Grande de Venecia",
    unsplashId: "1514890547357-a9ee288728e0",
    status: "mock" as const,
  },
  {
    id: "venice-rialto",
    destinationId: "venice",
    caption: "Puente de Rialto",
    unsplashId: "1523906834658-6e24ef2386f9",
    status: "mock" as const,
  },
  {
    id: "venice-sunset",
    destinationId: "venice",
    caption: "Atardecer en Venecia",
    unsplashId: "1787767296879-b8fe757914f3",
    status: "mock" as const,
  },
  {
    id: "prague-josefov-synagogue",
    destinationId: "prague",
    caption: "Sinagoga en el barrio judío de Josefov",
    unsplashId: "1759862301680-c912f894cc9a",
    status: "mock" as const,
  },
  {
    id: "prague-kampa-island",
    destinationId: "prague",
    caption: "Paseo junto al río en la Isla de Kampa",
    unsplashId: "1639361571710-36c53671841d",
    status: "mock" as const,
  },
  {
    id: "prague-wenceslas-square",
    destinationId: "prague",
    caption: "Plaza Wenceslas con el Museo Nacional al fondo",
    unsplashId: "1653754336689-2823d49a43cc",
    status: "mock" as const,
  },
  {
    id: "prague-astronomical-clock",
    destinationId: "prague",
    caption: "Reloj Astronómico en la Plaza de la Ciudad Vieja",
    unsplashId: "1584142639606-325473d1b2dc",
    status: "mock" as const,
  },
  {
    id: "prague-beer-hall",
    destinationId: "prague",
    caption: "Ambiente de cervecería tradicional al aire libre en Praga",
    unsplashId: "1654682940468-ca6c08a1a4c2",
    status: "mock" as const,
  },
  {
    id: "budapest-szechenyi-baths",
    destinationId: "budapest",
    caption: "Baños termales Széchenyi de Budapest",
    unsplashId: "1572983417754-78ae967b181e",
    status: "mock" as const,
  },
  {
    id: "budapest-buda-castle-palace",
    destinationId: "budapest",
    caption: "Palacio del Castillo de Buda al atardecer",
    unsplashId: "1652001786521-4bb8429eb9eb",
    status: "mock" as const,
  },
  {
    id: "budapest-great-synagogue",
    destinationId: "budapest",
    caption: "Gran Sinagoga de la calle Dohány",
    unsplashId: "1633448606109-45a823fbbd51",
    status: "mock" as const,
  },
  {
    id: "budapest-great-market-hall",
    destinationId: "budapest",
    caption: "Interior del Gran Mercado Central de Budapest",
    unsplashId: "1786524384275-52295386c166",
    status: "mock" as const,
  },
  {
    id: "soca-russian-chapel",
    destinationId: "soca",
    caption: "Capilla Rusa de madera en el paso de Vršič",
    unsplashId: "1610106548620-de20fe739467",
    status: "mock" as const,
  },
  {
    id: "soca-kozjak-waterfall",
    destinationId: "soca",
    caption: "Cascada de Kozjak junto a Kobarid",
    unsplashId: "1783883611569-cf0446a03ab3",
    status: "mock" as const,
  },
  {
    id: "soca-kobarid-village",
    destinationId: "soca",
    caption: "Monumento a los caídos italianos en Kobarid",
    unsplashId: "1772807523143-1a19734d95e8",
    status: "mock" as const,
  },
  {
    id: "dolomites-lake-predil",
    destinationId: "dolomites",
    caption: "Lago del Predil en la frontera ítalo-eslovena",
    unsplashId: "1571942347102-23df2d0ee3a2",
    status: "mock" as const,
  },
  {
    id: "venice-cannaregio",
    destinationId: "venice",
    caption: "Callejón tranquilo del barrio de Cannaregio",
    unsplashId: "1764064276044-7fcc8d4f6743",
    status: "mock" as const,
  },
  {
    id: "cesky-krumlov-street",
    destinationId: "cesky-krumlov",
    caption: "Calle empedrada del casco histórico de Český Krumlov",
    unsplashId: "1634842544181-812be1a81284",
    status: "mock" as const,
  },
  {
    id: "bled-slovenian-farmhouse",
    destinationId: "bled",
    caption: "Granja tradicional eslovena al amanecer",
    unsplashId: "1763844598924-2f13f94caa4c",
    status: "mock" as const,
  },
];

export function getUnsplashUrl(unsplashId: string): string {
  return `https://images.unsplash.com/photo-${unsplashId}?w=1200&q=80&auto=format&fit=crop`;
}

export function getPhotosByDestination(destinationId: string): TripPhoto[] {
  return tripPhotos.filter((photo) => photo.destinationId === destinationId);
}

export function getPrimaryPhoto(destinationId: string): TripPhoto | undefined {
  return tripPhotos.find((photo) => photo.destinationId === destinationId);
}

// Returns the activity's curated photos when available, otherwise falls back
// to the destination's general photo gallery so the detail view always has images.
export function getActivityPhotos(activity: TimelineActivity, destinationId: string | undefined): TripPhoto[] {
  const curatedPhotos = (activity.photoIds ?? [])
    .map((photoId) => tripPhotos.find((photo) => photo.id === photoId))
    .filter((photo): photo is TripPhoto => photo !== undefined);

  if (curatedPhotos.length > 0) {
    return curatedPhotos;
  }

  return destinationId ? getPhotosByDestination(destinationId) : [];
}
