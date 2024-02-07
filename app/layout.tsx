// app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Toaster
            closeButton
            richColors
            position="top-right"
            className=" mt-10"
            toastOptions={{
              style: {
                top: 24,
              },
            }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
