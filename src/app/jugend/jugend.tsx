"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/app/jugend/trainingszeiten";

const TRAINER = {
    "U17 (SG) B-Jugend": [
        {
            team: "(SG) C1-Jugend",
            name: "Manfred Jobst",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 176 43246360",
        },
        {
            team: "(SG) B-Jugend",
            name: "Heiko Gräbner",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 172 8621772",
        }
    ],
    "U15 (SG) C1-Jugend": [
        {
            team: "(SG) C1-Jugend",
            name: "Oliver Böhm",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1514 0339128",
        },
        {
            team: "(SG) C1-Jugend",
            name: "Bernd Fleischmann",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1520 9161759",
        },
        {
            team: "(SG) C1-Jugend",
            name: "Alfred Knoll",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 171 9120211",
        },
    ],
    "U15 (SG) C2-Jugend": [
        {
            team: "(SG) C2-Jugend",
            name: "Heinz Kerschbaum",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1515 0594913",
        },
        {
            team: "(SG) C2-Jugend",
            name: "Jürgen Hofmann",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 175 8603746",
        }
    ],
    "U13 (SG) D1-Jugend": [
        {
            team: "(SG) D2-Jugend",
            name: "Max Geißendörfer",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 176 21166152",
        },
        {
            team: "(SG) D2-Jugend",
            name: "Thomas Bibelriether",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 175 2021964",
        }
    ],
    "U13 (SG) D2-Jugend": [
        {
            team: "(SG) D1-Jugend",
            name: "Jürgen Raab",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 171 8868443",
        },
        {
            team: "(SG) D1-Jugend",
            name: "Stefan Köhler",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 176 45500055",
        },
        {
            team: "(SG) D2-Jugend",
            name: "Yvonne Pech",
            section: "Trainerin",
            mail: "",
            phone: "+49 (0) 1590 4832239",
        }
    ],
    "U11 E1-Jugend": [
        {
            team: "E-Jugend",
            name: "Jochen Datz",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 179 7584825",
        },
        {
            team: "E-Jugend",
            name: "Sven Tiefel",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 173 8583978",
        },
    ],
    "U11 E2-Jugend": [
        {
            team: "E-Jugend",
            name: "Niklas Engel",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1575 6888690",
        },
        {
            team: "E-Jugend",
            name: "Noah Reuthlingshöfer",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 160 2761444",
        },
    ],
    "U9 F-Jugend": [
        {
            team: "F-Jugend",
            name: "Andreas Schönleben",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 179 3624394",
        },
        {
            team: "F-Jugend",
            name: "Rene Hofmockel",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 176 61042669",
        },
        {
            team: "F-Jugend",
            name: "Daniel Ströbel",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 162 4227650",
        },
        {
            team: "F-Jugend",
            name: "Thomas Schönleben",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 174 4603326",
        },
        {
            team: "F-Jugend",
            name: "Melanie Demjanowitsch",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 173 5622661",
        },
    ],
    "U7 G-Jugend": [
        {
            team: "G-Jugend",
            name: "Peter Werner",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1512 7194672",
        },
        {
            team: "G-Jugend",
            name: "Andre Hofmockel",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 177 5456812",
        },
        {
            team: "G-Jugend",
            name: "Michael Stefani",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 175 3611038",
        },
        {
            team: "G-Jugend",
            name: "Anett Stefani-Kato",
            section: "Trainerin",
            mail: "",
            phone: "+49 (0) 173 7687882",
        },
        {
            team: "G-Jugend",
            name: "Daniel Distler",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 176 20088360",
        },
        {
            team: "G-Jugend",
            name: "Jessica Wunner",
            section: "Trainerin",
            mail: "",
            phone: "+49 (0) 162 2894436",
        },
    ],
    "U17 B-Juniorinnen": [
        {
            team: "B-Juniorinnen",
            name: "Jochen Schirmer",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1511 4072581",
        },
        {
            team: "B-Juniorinnen",
            name: "Christina Schirmer",
            section: "Trainerin",
            mail: "",
            phone: "+49 (0) 173 3592401",
        },
        {
            team: "B-Juniorinnen",
            name: "Lea Stefani",
            section: "Trainerin",
            mail: "",
            phone: "+49 (0) 162 9433129",
        }
    ],
    "U11 E-Juniorinnen": [
        {
            team: "E-Juniorinnen",
            name: "Markus Sandmann",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1575 6026348",
        },
        {
            team: "E-Juniorinnen",
            name: "Heiko Schemm",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1522 2675391",
        },
        {
            team: "E-Juniorinnen",
            name: "Kerstin Heinlein",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 179 3264196",
        }
    ],
}

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
                    Mit insgesamt elf Jugendmannschaften, davon fünf Mannschaften in einer Spielgemeinschaft mit dem TSV Markt Erlbach,
                    bilden wir wichtige Basis für die Zukunft unserer Herren- und Damenmannschaften. Ganz besonders stolz sind wir auch
                    auf unsere beiden Mädchenmannschaften der Altersklassen U17 und U11.
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
                <Trainingszeiten/>
            </div>
        </header>
    );
}

export default Jugend;
