
export const metadata = {
  title: "Annuire Pro et Partic",
  description: "Annuaire pro & particulier — retrouvez un numéro ou un nom en un clic",
  icons: { icon: "/favicon.svg" }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="fr"><body>{children}</body></html>);
}
