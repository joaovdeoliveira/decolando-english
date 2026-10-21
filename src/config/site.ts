/**
 * Dados de contato e identidade do site.
 * `whatsappNumber` vai no link wa.me: formato internacional, só dígitos.
 */
export const site = {
  brand: "Decolando",
  tagline: "Your English",
  teacher: "Teacher Débora",
  teacherName: "Débora",
  whatsappNumber: "5511920118206",
  whatsappDisplay: "+55 (11) 92011-8206",
  year: 2026,
} as const;

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#aulas", label: "Aulas" },
  { href: "#destinos", label: "Destinos" },
  { href: "#planos", label: "Planos" },
] as const;
