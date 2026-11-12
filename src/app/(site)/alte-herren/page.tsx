import type {Metadata} from "next";
import AlteHerren from "@/app/alte-herren/alte-herren";

export const metadata: Metadata = {
    title: "Alte Herren | Sportverein Losaurach e. V.",
    description: "Informationen zur Traditionsmannschaft Alte Herren des SV Losaurach.",
};

export default function AlteHerrenPage() {
    return <AlteHerren/>;
}
