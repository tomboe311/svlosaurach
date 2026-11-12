import type {Metadata} from "next";
import Datenschutz from "@/app/datenschutz/datenschutz";

export const metadata: Metadata = {
    title: "Datenschutz | Sportverein Losaurach e. V.",
    description: "Datenschutzerklärung des SV Losaurach gemäß DSGVO.",
};

export default function DatenschutzPage() {
    return <Datenschutz/>;
}
