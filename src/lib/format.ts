const pad2 = (n: number) => String(n).padStart(2, "0");

/** "HH:MM" no horário local. */
export function formatClock(date: Date): string {
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}

/** Inteiro com zero à esquerda, como nos cartões de embarque ("04"). */
export function formatTwoDigits(n: number): string {
  return pad2(n);
}

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function formatPrice(value: number): string {
  return brl.format(value);
}
