// app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";
import "@/translations/i18n";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
