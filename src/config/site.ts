/**
 * Dados de contato e identidade do site.
 * Troque `whatsappNumber` pelo número real (formato internacional, só dígitos).
 */
export const site = {
  brand: "Decolando",
  tagline: "Your English",
  teacher: "Teacher Débora",
  teacherName: "Débora",
  whatsappNumber: "5500000000000",
  whatsappDisplay: "+55 (00) 00000-0000",
  year: 2026,
} as const;

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#aulas", label: "Aulas" },
  { href: "#destinos", label: "Destinos" },
  { href: "#planos", label: "Planos" },
] as const;
