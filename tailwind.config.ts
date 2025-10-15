
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { brand: { blue: "#2563EB", yellow: "#F59E0B" } } } },
  plugins: [],
};
export default config;
