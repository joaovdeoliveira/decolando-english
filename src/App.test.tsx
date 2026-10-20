import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

const sendLink = () => screen.getByRole("link", { name: /enviar no whatsapp/i });
const decodedText = () => new URL(sendLink().getAttribute("href") ?? "").searchParams.get("text");

describe("App", () => {
  beforeAll(() => {
    // jsdom não implementa reprodução de mídia.
    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  });

  it("renderiza as seções principais", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Seu inglês, pronto para decolar.",
    );
    expect(screen.getByRole("region", { name: /painel de embarque/i })).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(4 + 3);
  });

  it("monta a mensagem do WhatsApp a partir do formulário", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/seu nome/i), "Ana");
    await user.click(screen.getByRole("radio", { name: "Entrevista" }));
    await user.selectOptions(screen.getByLabelText(/nível hoje/i), "Avançado");

    expect(decodedText()).toBe(
      "Olá, Teacher Débora! Aqui é Ana. Quero aprender inglês para passar em uma entrevista. " +
        "Meu nível hoje: avançado. Pode me ajudar a escolher um plano? " +
        "Gostaria de agendar uma aula experimental.",
    );
  });

  it("preenche o plano ao clicar em um cartão de embarque", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("link", { name: "Quero o Executiva" }));

    expect(screen.getByLabelText<HTMLSelectElement>(/^plano$/i).value).toBe("executiva");
    expect(decodedText()).toContain("Tenho interesse no plano Executiva.");
  });
});
