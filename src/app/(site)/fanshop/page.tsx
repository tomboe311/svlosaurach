import type {Metadata} from "next";
import Fanshop from "@/app/fanshop/fanshop";

export const metadata: Metadata = {
    title: "Fanshop | Sportverein Losaurach e. V.",
    description: "Offizielle Fanshops des SV Losaurach mit Fanartikeln und Vereinsbekleidung.",
};

export default function FanshopPage() {
    return <Fanshop/>;
}
