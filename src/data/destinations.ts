import type { Destination } from "./types";

export const destinations: Destination[] = [
  {
    id: "viagem",
    flight: "DY 101",
    name: "Viagem",
    description: "Aeroporto, hotel, restaurante, pedir direções e resolver imprevistos sem travar.",
    gate: "A1",
    status: "Embarque",
    boarding: true,
    goal: "viajar",
  },
  {
    id: "amor-amizade",
    flight: "DY 214",
    name: "Amor & amizade",
    description:
      "Conversa do dia a dia, expressões, mensagens e chamadas de vídeo com quem fala inglês.",
    gate: "B2",
    status: "No horário",
    boarding: false,
    goal: "conversar com alguém especial",
  },
  {
    id: "entrevista",
    flight: "DY 330",
    name: "Entrevista",
    description: "Apresentação pessoal, perguntas clássicas e simulações de entrevista de emprego.",
    gate: "C1",
    status: "No horário",
    boarding: false,
    goal: "passar em uma entrevista",
  },
  {
    id: "reunioes",
    flight: "DY 412",
    name: "Reuniões",
    description:
      "Dar opinião, apresentar resultados, escrever e-mails e participar de calls com o time de fora.",
    gate: "C3",
    status: "No horário",
    boarding: false,
    goal: "participar de reuniões no trabalho",
  },
];
