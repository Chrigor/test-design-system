import { create } from "storybook/theming/create";

export default create({
  base: "light",

  // Cores da EVNTS (INVERTIDAS)
  colorPrimary: "#466946", // NOVO: Verde Escuro como cor principal
  colorSecondary: "#663399", // NOVO: Roxo como cor secundária

  // Branding
  brandTitle: "EVNTS Storybook",
  brandUrl: "https://evnts.com.br/",
  brandImage:
    "https://s3.amazonaws.com/files.evnts.com.br/corporate/logoevnts11png-1761314516352-485cc0dc-f533-4590-9444-ecba4305ed5a.png",
  brandTarget: "_self",

  // UI (Fundo Branco Padrão)
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#cccccc", // Cinza claro para bordas
  appBorderRadius: 4,

  // Textos
  textColor: "#10162F", // Texto Principal Escuro
  textInverseColor: "#ffffff", // Texto Invertido (usado sobre cores escuras)

  // Barra de Ferramentas (Toolbar)
  barBg: "#ffffff",
  barTextColor: "#663399", // NOVO: Roxo para textos da barra (Secundária)
  barSelectedColor: "#466946", // NOVO: Verde Escuro para o item selecionado (Primária)
  barHoverColor: "#466946", // NOVO: Verde Escuro no hover

  // Formulários
  inputBg: "#ffffff",
  inputBorder: "#466946", // NOVO: Verde Escuro nas bordas de input (Primária)
  inputTextColor: "#10162F",
  inputBorderRadius: 2,

  // Tipografia
  fontBase: '"Mulish", sans-serif',
  fontCode: "monospace",
});
