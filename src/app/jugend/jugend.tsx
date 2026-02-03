"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/components/trainingszeiten/trainingszeiten";
import JUGEND_DATA from "@/data/jugend.json";

function Jugend() {
    const TRAINER = JUGEND_DATA.trainer;
    const TRAININGSZEITEN = JUGEND_DATA.trainingszeiten;
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
                    Mit insgesamt 17 Jugendmannschaften, davon acht Mannschaften in einer Spielgemeinschaft mit dem TSV Markt Erlbach, bilden wir wichtige Basis für die Zukunft unserer Herren- und Frauenmannschaften. Ganz besonders stolz sind wir auch auf unsere drei Juniorinnen-Teams der Altersklassen U17, U13, U11 und U9.
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
                                {value.map((props, i) => (
                                    <div key={i}>
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
