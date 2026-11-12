import type {Metadata} from "next";
import Seifenkiste from "@/app/seifenkiste/seifenkiste";

export const metadata: Metadata = {
    title: "Seifenkiste | Sportverein Losaurach e. V.",
    description: "Informationen zur Seifenkisten-Abteilung des SV Losaurach mit Ansprechpartnern und Trainingszeiten.",
};

export default function SeifenkistenPage() {
    return <Seifenkiste/>;
}
