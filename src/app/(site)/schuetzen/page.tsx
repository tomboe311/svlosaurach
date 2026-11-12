import type {Metadata} from "next";
import Schuetzen from "@/app/schuetzen/schuetzen";

export const metadata: Metadata = {
    title: "Schützen | Sportverein Losaurach e. V.",
    description: "Informationen zur Schützenabteilung des SV Losaurach mit Ansprechpartnern und Trainingszeiten.",
};

export default function SchuetzenPage() {
    return <Schuetzen/>;
}
