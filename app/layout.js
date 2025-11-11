// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Sundrop Valley — Cozy Pixel Gallery",
  description: "AI-assisted pixel art with tiny summer stories. Clearly labeled.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
