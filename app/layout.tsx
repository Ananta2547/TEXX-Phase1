import type { Metadata } from "next";
import { Sora, Inter, Noto_Sans_Thai, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-thai",
  display: "swap",
});

const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500"],
  variable: "--font-plex-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TEXX — Premium Materials, Global Standard",
  description:
    "TEXX คัดสรรวัสดุพรีเมียมจากทั่วโลก — หินธรรมชาติ พื้นผิววิศวกรรม โลหะและไม้ — ด้วยมาตรฐานเดียวสำหรับงานสถาปัตยกรรมและตกแต่งภายในระดับสากล",
  metadataBase: new URL("https://texx.co"),
  openGraph: {
    title: "TEXX — Premium Materials",
    description: "Premium materials for world-class spaces. Sourced globally, delivered to one standard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${sora.variable} ${inter.variable} ${notoThai.variable} ${plexThai.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
