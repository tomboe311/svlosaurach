/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type {Metadata} from "next";
import {Roboto, Source_Sans_3} from "next/font/google";
import {Layout} from "@/components";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

const sourceSans3 = Source_Sans_3({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Sportverein Losaurach e. V. | Fußball, Schützen, Darts, Seifenkiste",
    description: "Ihr Sportverein in Losaurach: Sportverein Losaurach e. V. – Fußball, Schützensport, Darts, Seifenkiste. Jetzt Mitglied werden und sportliche Vielfalt erleben!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <head>
            <script
                defer
                data-site="https://www.sv-losaurach.de"
                src=""
            ></script>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
            <title>Sportverein Losaurach e. V.</title>
        </head>
        <body className={sourceSans3.className}>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    );
}
