# Decolando Your English

Site da **Teacher Débora**: aulas de inglês online, ao vivo e personalizadas. Página única com
hero animado, sobre, métodos, painel de embarque com os destinos, planos em formato de cartão de
embarque e um formulário que monta a mensagem de aula experimental e abre o WhatsApp.

## Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) (modo `strict`)
- [Vite](https://vite.dev) para dev server e build
- CSS Modules por componente + tokens globais (tema claro/escuro via `prefers-color-scheme`)
- [Vitest](https://vitest.dev) + Testing Library
- ESLint + Prettier, com CI no GitHub Actions

## Como rodar

Requer Node 22+.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script            | O que faz                     |
| ----------------- | ----------------------------- |
| `npm run dev`     | Servidor de desenvolvimento   |
| `npm run build`   | Typecheck + build em `dist/`  |
| `npm run preview` | Serve o build de produção     |
| `npm test`        | Roda os testes uma vez        |
| `npm run lint`    | ESLint                        |
| `npm run format`  | Formata o código com Prettier |

## Estrutura

```
src/
├── App.tsx                 # Composição das seções + estado do plano escolhido
├── config/site.ts          # Marca, nome da professora, WhatsApp, links do menu
├── data/                   # Conteúdo: métodos, destinos, planos, níveis
├── lib/                    # Funções puras (mensagem do WhatsApp, formatação) + testes
├── hooks/                  # useScrollProgress, useClock, useCopyToClipboard
├── components/             # Uma pasta por seção: componente + CSS Module
├── styles/                 # tokens.css (cores, fontes, espaçamentos) e global.css
└── assets/                 # Vídeo do globo e imagem da marca
```

O conteúdo fica separado da apresentação: para mudar textos de planos, destinos ou métodos,
edite os arquivos em `src/data/`, sem mexer nos componentes.
