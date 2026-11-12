import "./globals.css";
import type {Metadata} from "next";
import {Source_Sans_3} from "next/font/google";
import Layout from "@/components/layout";

const sourceSans3 = Source_Sans_3({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Sportverein Losaurach e. V. | Fußball, Schützen, Darts, Seifenkiste",
    description: "Ihr Sportverein in Losaurach: Sportverein Losaurach e. V. – Fußball, Schützensport, Darts, Seifenkiste. Jetzt Mitglied werden und sportliche Vielfalt erleben!",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
        </head>
        <body className={sourceSans3.className}>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    );
}
