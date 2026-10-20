export const levels = ["Nunca estudei", "Básico", "Intermediário", "Avançado"] as const;

export type Level = (typeof levels)[number];

export const defaultLevel: Level = "Básico";
