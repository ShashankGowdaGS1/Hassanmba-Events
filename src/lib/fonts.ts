import { Bodoni_Moda, Jost, Pinyon_Script } from "next/font/google";

/**
 * FONT 01 — BODONI MODA
 * Primary display / editorial heading font.
 * Used for: Hero headlines, H1, H2, H3, large editorial statements.
 */
export const fontDisplay = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  fallback: ["Bodoni MT", "Didot", "Georgia", "serif"],
});

/**
 * FONT 02 — JOST
 * Body and interface font.
 * Used for: Body text, navigation, buttons, forms, labels, footer content.
 */
export const fontBody = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

/**
 * FONT 03 — PINYON SCRIPT
 * Decorative accent font.
 * Used selectively for: Romantic phrases, small decorative phrases, floral storytelling.
 * NOTE: Never use for long paragraphs, navigation links, buttons, or form labels.
 * Do not automatically apply to future Kannada text.
 */
export const fontAccent = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-accent",
  fallback: ["cursive"],
});

/**
 * Combined font variable string to apply at the root HTML/body tag.
 */
export const fontVariables = `${fontDisplay.variable} ${fontBody.variable} ${fontAccent.variable}`;

