"use client";

import {TeamCard} from "@/components";
import {Typography} from "@material-tailwind/react";

const TEAMS = [
    {
        img: "/teams/herren-2022.jpeg",
        title: "1. & 2. Herrenmannschaft",
        desc: "Herrenmannschaften",
        link: "/herren",
    },
    {
        img: "/teams/damen-2-2024-2025.jpeg",
        title: "1. & 2. Damenmannschaft",
        desc: "Damenmannschaften",
        link: "/damen",
    },
    {
        img: "/teams/herren-2022.jpeg",
        title: "Jugendmannschaften",
        desc: "Jugendmannschaften",
        link: "/jugend",
    },
    {
        img: "/teams/herren-2022.jpeg",
        title: "Alte Herren",
        desc: "Unsere Alten Herren",
        link: "/alte-herren",
    },
];

export function Teams() {
    return (
        <section className="py-28 px-8">
            <div className="container mx-auto mb-20 text-center">
                <Typography color="blue-gray" className="mb-2 font-bold uppercase">
                    Unsere
                </Typography>
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Fußball Mannschaften
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-12/12"
                >
                    Im Sportverein Losaurach sind wir stolz auf unsere dynamischen Mannschaften und ihre
                    kontinuierlichen Erfolge. Mit insgesamt zwei Herren-, zwei Damen- und elf Jugendmannschaften bieten wir ein
                    breites Spektrum an Möglichkeiten für alle Altersgruppen, um aktiv zu werden und sich sportlich zu
                    entfalten.
                </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
                {TEAMS.map((props, idx) => (
                    <TeamCard key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}

export default Teams;
