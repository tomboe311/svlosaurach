"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/components/trainingszeiten/trainingszeiten";

const TRAINER = {
    "U19 (SG) A-Jugend": [
        {
            team: "(SG) A1-Jugend",
            name: "Manfred Jobst",
            section: "Trainer",
            mail: "",
            phone: "+49 176 43246360",
        },
        {
            team: "(SG) A1-Jugend",
            name: "Laurenz Maneth",
            section: "Trainer",
            mail: "",
            phone: "+49 175 3218891",
        },
        {
            team: "(SG) A1-Jugend",
            name: "Paul Popp",
            section: "Trainer",
            mail: "",
            phone: "+49 175 2474272",
        },
    ],
    "U17 (SG) B-Jugend": [
        {
            team: "(SG) B-Jugend",
            name: "Heiko Gräbner",
            section: "Trainer",
            mail: "",
            phone: "+49 172 8621772",
        },
        {
            team: "(SG) B-Jugend",
            name: "Heiko Weißfloch",
            section: "Trainer",
            mail: "",
            phone: "+49 1522 4934155",
        }
    ],
    "U15 (SG) C1-Jugend": [
        {
            team: "(SG) C1-Jugend",
            name: "Oliver Böhm",
            section: "Trainer",
            mail: "",
            phone: "+49 1514 0339128",
        },
        {
            team: "(SG) C1-Jugend",
            name: "Jürgen Hofmann",
            section: "Trainer",
            mail: "",
            phone: "+49 175 8603746",
        },
    ],
    "U15 (SG) C2-Jugend": [
        {
            team: "(SG) C2-Jugend",
            name: "Heinz Kerschbaum",
            section: "Trainer",
            mail: "",
            phone: "+49 1515 0594913",
        },
        {
            team: "(SG) C2-Jugend",
            name: "Andreas Mann",
            section: "Trainer",
            mail: "",
            phone: "+49 1515 2988882",
        }
    ],
    "U13 (SG) D1-Jugend": [
        {
            team: "(SG) D1-Jugend",
            name: "Jochen Datz",
            section: "Trainer",
            mail: "",
            phone: "+49 179 7584825",
        },
        {
            team: "(SG) D1-Jugend",
            name: "Thomas Bibelriether",
            section: "Trainer",
            mail: "",
            phone: "+49 175 2021964",
        },
        {
            team: "(SG) 12-Jugend",
            name: "Max Geißendörfer",
            section: "Trainer",
            mail: "",
            phone: "+49 176 21166152",
        },
    ],
    "U13 (SG) D2-Jugend": [
        {
            team: "(SG) D2-Jugend",
            name: "Yvonne Pech",
            section: "Trainerin",
            mail: "",
            phone: "+49 1590 4832239",
        },
        {
            team: "(SG) D2-Jugend",
            name: "Jürgen Raab",
            section: "Trainer",
            mail: "",
            phone: "+49 171 8868443",
        },
        {
            team: "(SG) D2-Jugend",
            name: "Marco Fischer",
            section: "Trainer",
            mail: "",
            phone: "+49 176 62575825",
        },

    ],
    "U11 E-Jugend": [
        {
            team: "E-Jugend",
            name: "Daniel Ströbel",
            section: "Trainer",
            mail: "",
            phone: "+49 162 4227650",
        },
        {
            team: "E-Jugend",
            name: "Noah Reuthlingshöfer",
            section: "Trainer",
            mail: "",
            phone: "+49 160 2761444",
        },
    ],
    "U9 F1-Jugend": [
        {
            team: "F1-Jugend",
            name: "Andreas Schönleben",
            section: "Trainer",
            mail: "",
            phone: "+49 179 3624394",
        },
        {
            team: "F1-Jugend",
            name: "Thomas Schönleben",
            section: "Trainer",
            mail: "",
            phone: "+49 174 4603326",
        },
    ],
    "U9 F2-Jugend": [
        {
            team: "F2-Jugend",
            name: "Markus Nießlbeck",
            section: "Trainer",
            mail: "",
            phone: "+49 1511 5532764",
        },
        {
            team: "F2-Jugend",
            name: "Philipp Seibold",
            section: "Trainer",
            mail: "",
            phone: "+49 176 83076103",
        },
    ],
    "U9 F3-Jugend": [
        {
            team: "F3-Jugend",
            name: "Steffen Endner",
            section: "Trainer",
            mail: "",
            phone: "+49 172 5237145",
        },
    ],
    "U7 G-Jugend": [
        {
            team: "G-Jugend",
            name: "Peter Werner",
            section: "Trainer",
            mail: "",
            phone: "+49 1512 7194672",
        },
        {
            team: "G-Jugend",
            name: "Anett Stefani-Kato",
            section: "Trainerin",
            mail: "",
            phone: "+49 173 7687882",
        },
        {
            team: "G-Jugend",
            name: "Michael Stefani",
            section: "Trainer",
            mail: "",
            phone: "+49 175 3611038",
        },
        {
            team: "G-Jugend",
            name: "Jessica Wunner",
            section: "Trainerin",
            mail: "",
            phone: "+49 162 2894436",
        },
        {
            team: "G-Jugend",
            name: "Daniel Distler",
            section: "Trainer",
            mail: "",
            phone: "+49 176 20088360",
        },
        {
            team: "G-Jugend",
            name: "Fabian Weiß",
            section: "Trainer",
            mail: "",
            phone: "+49 175 2304407",
        },
    ],
    "U17 B-Juniorinnen": [
        {
            team: "B-Juniorinnen",
            name: "Jochen Schirmer",
            section: "Trainer",
            mail: "",
            phone: "+49 1511 4072581",
        },
        {
            team: "B-Juniorinnen",
            name: "Christina Schirmer",
            section: "Trainerin",
            mail: "",
            phone: "+49 173 3592401",
        },
        {
            team: "B-Juniorinnen",
            name: "Lea Stefani",
            section: "Trainerin",
            mail: "",
            phone: "+49 162 9433129",
        }
    ],
    "U13 D-Juniorinnen": [
        {
            team: "D-Juniorinnen",
            name: "Anne Kettner",
            section: "Trainerin",
            mail: "",
            phone: "+49 1578 6763662",
        },
        {
            team: "D-Juniorinnen",
            name: "Svenja Hofmockel",
            section: "Trainerin",
            mail: "",
            phone: "+49 172 8264046",
        }
    ],
    "U11 E-Juniorinnen": [
        {
            team: "E-Juniorinnen",
            name: "Markus Sandmann",
            section: "Trainer",
            mail: "",
            phone: "+49 1575 6026348",
        },
        {
            team: "E-Juniorinnen",
            name: "Heiko Schemm",
            section: "Trainer",
            mail: "",
            phone: "+49 1522 2675391",
        },
        {
            team: "E-Juniorinnen",
            name: "Vivien Göß",
            section: "Trainerin",
            mail: "",
            phone: "+49 163 4846926",
        },
        {
            team: "E-Juniorinnen",
            name: "Kerstin Heinlein",
            section: "Trainerin",
            mail: "",
            phone: "+49 179 3264196",
        },
        {
            team: "E-Juniorinnen",
            name: "Melanie Demjanowitsch",
            section: "Trainerin",
            mail: "",
            phone: "+49 173 5622661",
        },
    ],
}

const TRAININGSZEITEN = [
    {
        team: "U19/U18 (A-Junioren)",
        montag: "19:00 - 20:30 Uhr (Sportplatz Markt Erlbach)",
        dienstag: "",
        mittwoch: "",
        donnerstag: "18:30 - 20:00 Uhr (Sportplatz Markt Erlbach)",
        freitag: "",
    },
    {
        team: "U17/U16 (B-Junioren)",
        montag: "17:15 - 18:45 Uhr (Sportplatz Markt Erlbach)",
        dienstag: "",
        mittwoch: "17:15 - 18:45 Uhr (Sportplatz Losaurach)",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "U15/U14 (C1/C2-Junioren)",
        montag: "",
        dienstag: "17:15 - 19:00 Uhr (Sportplatz Markt Erlbach)",
        mittwoch: "",
        donnerstag: "17:15 - 19:00 Uhr (Sportplatz Markt Erlbach)",
        freitag: "",
    },
    {
        team: "U13/U12 (D1/D2-Junioren)",
        montag: "",
        dienstag: "",
        mittwoch: "17:30 - 19:00 Uhr (Sportplatz Losaurach)",
        donnerstag: "",
        freitag: "17:30 - 19:00 Uhr (Sportplatz Losaurach)",
    },
    {
        team: "U11/U10 (E1/E2-Junioren)",
        montag: "",
        dienstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        freitag: "",
    },
    {
        team: "U9/U8 (F-Junioren)",
        montag: "",
        dienstag: "",
        mittwoch: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "U7 (G-Junioren)",
        montag: "",
        dienstag: "",
        mittwoch: "17:00 - 18:00 Uhr (Sportplatz Losaurach)",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "U17/U16 (B-Juniorinnen)",
        montag: "",
        dienstag: "17:30 - 19:00 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "17:30 - 19:00 Uhr (Sportplatz Losaurach)",
        freitag: "",
    },
    {
        team: "U13/U12 (D-Juniorinnen)",
        montag: "",
        dienstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        freitag: "",
    },
    {
        team: "U11/U10 (E-Juniorinnen)",
        montag: "",
        dienstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        freitag: "",
    },
];

function Jugend() {
    return (
        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Jugendmannschaften
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Mit insgesamt 19 Jugendmannschaften, davon sechs Mannschaften in einer Spielgemeinschaft mit dem TSV Markt Erlbach,
                    bilden wir wichtige Basis für die Zukunft unserer Herren- und Frauenmannschaften. Ganz besonders stolz sind wir auch
                    auf unsere drei Juniorinnen-Teams der Altersklassen U17, U13 und U11.
                </Typography>
            </div>
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Trainer
                </Typography>
                <div
                    className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-2 lg:grid-cols-2 mb-20">
                    {Object.entries(TRAINER).map(([key, value], idx) => (
                        <div key={idx}>
                            <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                                {key}
                            </Typography>
                            <div className="grid grid-cols-1 gap-10">
                                {value.map((props) => (
                                    <div>
                                        <Typography variant="paragraph" color="blue-gray">
                                            {props.name}
                                        </Typography>
                                        <Typography variant="paragraph" color="blue-gray">
                                            {props.section}
                                        </Typography>
                                        <Typography
                                            as="a"
                                            href={`tel:${props.mail}`}
                                            variant="paragraph"
                                            color="blue-gray">
                                            {props.mail}
                                        </Typography>
                                        <Typography
                                            as="a"
                                            href={`tel:${props.phone}`}
                                            variant="paragraph"
                                            color="blue-gray">
                                            {props.phone}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto h-full gap-10 w-full items-start">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Trainingszeiten
                </Typography>
                <Trainingszeiten rows={TRAININGSZEITEN}/>
            </div>
        </header>
    );
}

export default Jugend;
