"use client";

import {Typography} from "@material-tailwind/react";
import {SectionCard} from "@/components";

const SECTIONS = [
    {
        iconFontName: "fa-futbol",
        title: "Fußball",
    },
    {
        iconFontName: "fa-person-rifle",
        title: "Schützen",
    },
    {
        iconFontName: "fa-bullseye",
        title: "Dart",
    },
    {
        iconFontName: "fa-car-side",
        title: "Seifenkiste",
    }
];

export function Sections() {
    return (
        <section className="px-8 bg-gray-100 shadow-sm py-8">
            <div className="container mx-auto mb-20 text-center">
                <Typography color="blue-gray" className="mb-2 font-bold uppercase">
                    Unsere
                </Typography>
                <Typography variant="h1" color="blue-gray" className="mb-4 uppercase">
                    Abteilungen
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full !text-gray-500 lg:w-10/12"
                >
                    Entdecke die Vielfalt, die unser Verein bietet! Vom Rasen des Fußballplatzes bis hin zum
                    Nervenkitzel des Dartboards, von der Geschwindigkeit der Seifenkistenrennen bis zur Präzision des
                    Schützensports - wir haben für jeden etwas zu bieten! Tauche ein in eine Welt voller spannender
                    Aktivitäten und lebendiger Gemeinschaft. Willkommen bei uns, wo Abwechslung und Begeisterung zuhause
                    sind! </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-4">
                {SECTIONS.map((props, idx) => (
                    <SectionCard key={idx} {...props}/>
                ))}
            </div>
        </section>
    );
}

export default Sections;
