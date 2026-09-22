import type { Hotel } from "@/lib/types";

export const hotels: Hotel[] = [
  {
    destinationId: "prague",
    name: "Pension Unitas o similar",
    neighborhood: "Malá Strana",
    pricePerRoom: 90,
    notes: "Casa de huéspedes en el barrio histórico, caminando a todo",
    bookingTip: "Reservar con 3-4 meses de antelación para septiembre",
  },
  {
    destinationId: "cesky-krumlov",
    name: "Pension Na Ostrově o similar",
    neighborhood: "Centro histórico",
    pricePerRoom: 85,
    notes: "Vistas al castillo o al río Vltava desde el centro",
    bookingTip: "Pedir habitación con vistas al castillo",
  },
  {
    destinationId: "austria",
    name: "Gasthof o casa de huéspedes local",
    neighborhood: "Gosau o Bad Goisern",
    pricePerRoom: 80,
    notes: "Desayuno incluido típicamente. Gosau tiene mejor parking y acceso al lago",
    bookingTip: "Base recomendada: Gosau, no Hallstatt (mejor precio, más tranquilo, mismo acceso)",
  },
  {
    destinationId: "budapest",
    name: "Hotel zona Andrássy o Barrio Judío",
    neighborhood: "Pest",
    pricePerRoom: 100,
    notes: "Cerca de los principales atractivos y la vida nocturna",
    bookingTip: "Evitar hoteles en el lado de Buda si se quiere caminar a los bares y restaurantes",
  },
  {
    destinationId: "bled",
    name: "Pension Ančka o Pr' Šurc",
    neighborhood: "Ribčev Laz (Lago Bohinj)",
    pricePerRoom: 90,
    notes: "Base recomendada en Bohinj: más barato, tranquilo, naturaleza pura",
    bookingTip: "Ribčev Laz es mejor base que el pueblo de Bled: más barato y auténtico",
  },
  {
    destinationId: "soca",
    name: "Villa Bovec o Alp Hotel",
    neighborhood: "Bovec",
    pricePerRoom: 80,
    notes: "Bovec es la capital del valle del Soča, ideal como base",
    bookingTip: "Reservar con antelación en temporada alta (julio-agosto)",
  },
  {
    destinationId: "dolomites",
    name: "B&B o Garni en Val Gardena",
    neighborhood: "Ortisei o Santa Cristina",
    pricePerRoom: 110,
    notes: "Val Gardena tiene la mejor oferta hotelera cerca de Seceda",
    bookingTip: "Ortisei tiene la estación del teleférico Seceda más próxima",
  },
  {
    destinationId: "venice",
    name: "B&B en Cannaregio",
    neighborhood: "Cannaregio",
    pricePerRoom: 130,
    notes: "El barrio más auténtico y asequible de Venecia, lejos de las multitudes de San Marcos",
    bookingTip: "Reservar con 4-6 meses de antelación para septiembre en Venecia",
  },
];

export function getHotelByDestination(destinationId: string): Hotel | undefined {
  return hotels.find((hotel) => hotel.destinationId === destinationId);
}
