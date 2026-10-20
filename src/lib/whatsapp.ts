export interface TrialRequest {
  /** Nome de quem escreve; vazio omite a apresentação. */
  name: string;
  /** Complemento de "Quero aprender inglês para ...". */
  goal: string;
  level: string;
  /** Nome do plano escolhido, ou `null` quando a pessoa ainda não decidiu. */
  plan: string | null;
}

export function buildWhatsAppUrl(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function buildTrialMessage(teacher: string, { name, goal, level, plan }: TrialRequest) {
  const trimmedName = name.trim();
  const parts = [
    `Olá, ${teacher}!`,
    trimmedName && `Aqui é ${trimmedName}.`,
    `Quero aprender inglês para ${goal}. Meu nível hoje: ${level.toLowerCase()}.`,
    plan ? `Tenho interesse no plano ${plan}.` : "Pode me ajudar a escolher um plano?",
    "Gostaria de agendar uma aula experimental.",
  ];
  return parts.filter(Boolean).join(" ");
}

export function buildGreetingMessage(teacher: string, brand: string) {
  return `Olá, ${teacher}! Vim pelo site do ${brand} e quero saber mais sobre as aulas.`;
}
