import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nayem Chowdhury — Software Developer & Founder",
  description:
    "Nayem Chowdhury is a software developer and founder from Bangladesh, building useful digital products through Pleron Labs.",
  openGraph: {
    title: "Nayem Chowdhury — Software Developer & Founder",
    description:
      "Building useful digital products and turning ideas into practical solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
