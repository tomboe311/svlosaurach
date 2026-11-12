import type {Metadata} from "next";
import Verein from "@/app/verein/verein";

export const metadata: Metadata = {
    title: "Verein | Sportverein Losaurach e. V.",
    description: "Informationen zur Vereinsgeschichte, Vorstandschaft und Abteilungen des SV Losaurach.",
};

export default function VereinPage() {
    return <Verein/>;
}
