export const metadata = {
  title: "Digital Sale Ideas ? Launch Wizard",
  description: "Generate digital product ideas and launch a simple sales page.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
