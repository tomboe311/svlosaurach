import type {Metadata} from "next";
import Frauen from "@/app/frauen/frauen";

export const metadata: Metadata = {
    title: "Frauenmannschaften | Sportverein Losaurach e. V.",
    description: "Alles zu den Frauenmannschaften des SV Losaurach inklusive Trainerteam und Trainingszeiten.",
};

export default function FrauenPage() {
    return <Frauen/>;
}
