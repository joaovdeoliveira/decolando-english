import { buildGreetingMessage, buildTrialMessage, buildWhatsAppUrl } from "./whatsapp";

describe("buildTrialMessage", () => {
  const base = { name: "", goal: "viajar", level: "Básico", plan: null };

  it("omite a apresentação quando não há nome", () => {
    expect(buildTrialMessage("Teacher Débora", base)).toBe(
      "Olá, Teacher Débora! Quero aprender inglês para viajar. Meu nível hoje: básico. " +
        "Pode me ajudar a escolher um plano? Gostaria de agendar uma aula experimental.",
    );
  });

  it("inclui nome (sem espaços extras) e plano escolhido", () => {
    expect(
      buildTrialMessage("Teacher Débora", {
        name: "  Ana ",
        goal: "passar em uma entrevista",
        level: "Intermediário",
        plan: "Executiva",
      }),
    ).toBe(
      "Olá, Teacher Débora! Aqui é Ana. Quero aprender inglês para passar em uma entrevista. " +
        "Meu nível hoje: intermediário. Tenho interesse no plano Executiva. " +
        "Gostaria de agendar uma aula experimental.",
    );
  });
});

describe("buildWhatsAppUrl", () => {
  it("codifica o texto na query string", () => {
    expect(buildWhatsAppUrl("5511999999999", "Olá & tchau?")).toBe(
      "https://wa.me/5511999999999?text=Ol%C3%A1%20%26%20tchau%3F",
    );
  });
});

describe("buildGreetingMessage", () => {
  it("menciona a professora e a marca", () => {
    expect(buildGreetingMessage("Teacher Débora", "Decolando")).toBe(
      "Olá, Teacher Débora! Vim pelo site do Decolando e quero saber mais sobre as aulas.",
    );
  });
});
