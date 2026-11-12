import type {Metadata} from "next";
import Herren from "@/app/herren/herren";

export const metadata: Metadata = {
    title: "Herrenmannschaften | Sportverein Losaurach e. V.",
    description: "Alles zu den Herrenmannschaften des SV Losaurach inklusive Trainerteam und Trainingszeiten.",
};

export default function HerrenPage() {
    return <Herren/>;
}
