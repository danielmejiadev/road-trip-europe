import type { TimelineActivity, TripPhoto } from "@/lib/types";

// Photo IDs from Unsplash. Status "mock" means they are curated suggestions —
// verify each loads correctly before publishing.
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
    unsplashId: "1514890547357-a9ee288728ad",
    status: "mock" as const,
  },
  {
    id: "prague-night",
    destinationId: "prague",
    caption: "Praga de noche",
    unsplashId: "1553697680-e23cc8e0f1f8",
    status: "mock" as const,
  },
  {
    id: "cesky-krumlov-castle",
    destinationId: "cesky-krumlov",
    caption: "Castillo de Český Krumlov",
    unsplashId: "1596442010756-92d6ab66a900",
    status: "mock" as const,
  },
  {
    id: "cesky-krumlov-town",
    destinationId: "cesky-krumlov",
    caption: "Casco histórico de Český Krumlov",
    unsplashId: "1534430480872-3498386ade23",
    status: "mock" as const,
  },
  {
    id: "hallstatt-lake",
    destinationId: "austria",
    caption: "Lago de Hallstatt",
    unsplashId: "1506905925346-21bda4d32df4",
    status: "mock" as const,
  },
  {
    id: "gosausee",
    destinationId: "austria",
    caption: "Gosausee entre los Alpes",
    unsplashId: "1609137144813-46ea0fab0b7a",
    status: "mock" as const,
  },
  {
    id: "austria-mountains",
    destinationId: "austria",
    caption: "Montañas austríacas",
    unsplashId: "1476514525405-309791a2be943",
    status: "mock" as const,
  },
  {
    id: "budapest-parliament",
    destinationId: "budapest",
    caption: "Parlamento de Budapest al atardecer",
    unsplashId: "1558427813-b5b5c2e3f8a2",
    status: "mock" as const,
  },
  {
    id: "budapest-night",
    destinationId: "budapest",
    caption: "Budapest iluminada de noche",
    unsplashId: "1570074776158-f13b67d0b8af",
    status: "mock" as const,
  },
  {
    id: "budapest-fisherman",
    destinationId: "budapest",
    caption: "Bastión de los Pescadores",
    unsplashId: "1525159776983-7ceaba697c0a",
    status: "mock" as const,
  },
  {
    id: "lake-bled",
    destinationId: "bled",
    caption: "Lago de Bled con su isla",
    unsplashId: "1506905925346-21bda4d32df4",
    status: "mock" as const,
  },
  {
    id: "bled-castle",
    destinationId: "bled",
    caption: "Castillo de Bled sobre el lago",
    unsplashId: "1559827291-72ebf3f5db2a",
    status: "mock" as const,
  },
  {
    id: "lake-bohinj",
    destinationId: "bled",
    caption: "Lago de Bohinj en calma",
    unsplashId: "1547036967-23cf7d1ab91b",
    status: "mock" as const,
  },
  {
    id: "vrsic-pass",
    destinationId: "soca",
    caption: "Paso de Vršič, 50 horquillas",
    unsplashId: "1549880338-ad2d03e5e3e5",
    status: "mock" as const,
  },
  {
    id: "soca-river",
    destinationId: "soca",
    caption: "Río Soča color esmeralda",
    unsplashId: "1563974887-2adacb5a8d5a",
    status: "mock" as const,
  },
  {
    id: "bovec",
    destinationId: "soca",
    caption: "Bovec entre las montañas",
    unsplashId: "1598300042194-338462429a5d",
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
    unsplashId: "1506905925346-21bda4d32df4",
    status: "mock" as const,
  },
  {
    id: "lago-braies",
    destinationId: "dolomites",
    caption: "Lago di Braies",
    unsplashId: "1523531294143-8bc5186b5e02",
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
    unsplashId: "1514890547357-a9ee288728ad",
    status: "mock" as const,
  },
  {
    id: "venice-rialto",
    destinationId: "venice",
    caption: "Puente de Rialto",
    unsplashId: "1534430480872-3498386ade23",
    status: "mock" as const,
  },
  {
    id: "venice-sunset",
    destinationId: "venice",
    caption: "Atardecer en Venecia",
    unsplashId: "1553697680-e23cc8e0f1f8",
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
