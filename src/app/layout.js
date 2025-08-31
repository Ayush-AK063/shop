import "./globals.css";

export const metadata = {
  title: 'Corevist Commerce | Premium B2B eCommerce Platform',
  description: 'Premium B2B eCommerce platform built for manufacturers and distributors powered by real-time SAP integration.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-montserrat">
        {children}
      </body>
    </html>
  );
}
