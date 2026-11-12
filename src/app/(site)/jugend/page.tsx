import type {Metadata} from "next";
import Jugend from "@/app/jugend/jugend";

export const metadata: Metadata = {
    title: "Jugend | Sportverein Losaurach e. V.",
    description: "Informationen zum Jugendbereich des SV Losaurach mit Ansprechpartnern und Trainingszeiten.",
};

export default function JugendPage() {
    return <Jugend/>;
}
