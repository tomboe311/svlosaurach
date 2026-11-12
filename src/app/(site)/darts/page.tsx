import type {Metadata} from "next";
import Darts from "@/app/darts/darts";

export const metadata: Metadata = {
    title: "Darts | Sportverein Losaurach e. V.",
    description: "Informationen zur Darts-Abteilung des SV Losaurach mit Ansprechpartnern und Trainingszeiten.",
};

export default function DartsPage() {
    return <Darts/>;
}
