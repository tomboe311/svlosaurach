import type {Metadata} from "next";
import Hero from "@/app/hero";
import Sponsors from "@/app/sponsors";
import Sections from "@/app/sections";
import Teams from "@/app/teams";
import Verein from "@/app/verein";
import Address from "@/app/address";
import Sportheim from "@/app/sportheim";

export const metadata: Metadata = {
    title: "Sportverein Losaurach e. V. | Startseite",
    description: "Willkommen beim Sportverein Losaurach e. V. mit Informationen zu Verein, Mannschaften, Abteilungen, Sportheim und Kontakt.",
};

export default function Home() {
    return (
        <>
            <Hero/>
            <Verein/>
            <Teams/>
            <Sections/>
            <Sponsors/>
            <Sportheim/>
            <Address/>
        </>
    );
}
