import type {Metadata} from "next";
import Foerderverein from "@/app/foerderverein/foerderverein";

export const metadata: Metadata = {
    title: "Förderverein | Sportverein Losaurach e. V.",
    description: "Informationen zum Förderverein des SV Losaurach.",
};

export default function FoerdervereinPage() {
    return <Foerderverein/>;
}
