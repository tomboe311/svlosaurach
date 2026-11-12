import type {Metadata} from "next";
import Impressum from "@/app/impressum/impressum";

export const metadata: Metadata = {
    title: "Impressum | Sportverein Losaurach e. V.",
    description: "Rechtliche Angaben und Kontaktinformationen des SV Losaurach.",
};

export default function ImpressumPage() {
    return <Impressum/>;
}
