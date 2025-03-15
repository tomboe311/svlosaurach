"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/app/alte-herren/trainingszeiten";
import {ProfileCard} from "@/components";

const TRAINER = [
    {
        img: "",
        name: "Markus Thomas",
        section: "Trainer Alte Herren",
        mail: "",
        phone: "+49 (0) 1522 7005954",
    },
    {
        img: "",
        name: "Helmut Hofmockel",
        section: "Spielleiter Alte Herren",
        mail: "",
        phone: "+49 (0) 172 8563666",
    },
]

function AlteHerren() {
    return (

        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Alte Herren
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Unsere Alten Herren sind ehemalige Leistungsträger der Herrenmannschaft. Mit viel Spaß und Freude sind sie weiterhin aktiv und spielen regelmäßig Fußball.
                </Typography>
            </div>
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Trainerstab
                </Typography>
                <div
                    className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                    {TRAINER.map((props, idx) => (
                        <ProfileCard key={idx} {...props} />
                    ))}
                </div>
            </div>
            <div className="container mx-auto h-full gap-10 w-full items-start">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Trainingszeiten
                </Typography>
                <Trainingszeiten/>
                <Typography variant="small" color="blue-gray" className="my-4">
                    Trainingsort: Sportplatz Losaurach
                </Typography>
                <Typography variant="small" color="blue-gray" className="my-4">
                    Trainingszeiten können sich kurzfristig ändern. Bitte informieren Sie sich bei den Trainern.
                </Typography>
            </div>
        </header>
    );
}

export default AlteHerren;
