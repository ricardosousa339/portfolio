import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Ricardo Henrique - Portfolio</title>
        </head>
        <body>
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    );
  }