import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
<link rel="icon" href="/favicon.ico" sizes="any" />;

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@mito5497",
  description: "Nơi cập nhật các sản phẩm theo xu hướng mới nhất !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
