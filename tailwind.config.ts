
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",   // Bleu
          yellow: "#F59E0B"  // Jaune
        }
      }
    }
  },
  plugins: [],
};
export default config;
