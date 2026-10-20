import { formatClock, formatPrice, formatTwoDigits } from "./format";

describe("formatClock", () => {
  it("preenche horas e minutos com dois dígitos", () => {
    expect(formatClock(new Date(2026, 0, 1, 7, 5))).toBe("07:05");
    expect(formatClock(new Date(2026, 0, 1, 23, 59))).toBe("23:59");
  });
});

describe("formatTwoDigits", () => {
  it("adiciona zero à esquerda", () => {
    expect(formatTwoDigits(4)).toBe("04");
    expect(formatTwoDigits(12)).toBe("12");
  });
});

describe("formatPrice", () => {
  it("formata em reais sem centavos", () => {
    // Intl usa espaço não separável entre o símbolo e o valor.
    expect(formatPrice(220).replace(/\s/g, " ")).toBe("R$ 220");
  });
});
