"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/app/damen/trainingszeiten";
import {ProfileCard} from "@/components";

const TRAINER = [
    {
        img: "",
        name: "Christian Popp",
        section: "Trainer 1. Damenmannschaft",
        mail: "",
        phone: "+49 (0) 1520 8726937",
    },
    {
        img: "",
        name: "Franziska Clemens",
        section: "Trainerin 2. Damenmannschaft",
        mail: "",
        phone: "+49 (0) 1525 6158385",
    },
    {
        img: "",
        name: "Stefan Maier",
        section: "Torwarttrainer",
        mail: "",
        phone: "+49 (0) 1511 7684369",
    },
    {
        img: "",
        name: "Nick Salzer",
        section: "Torwarttrainer",
        mail: "",
        phone: "+49 (0) 1520 4685778",
    },
    {
        img: "",
        name: "Manfred Meyer",
        section: "Trainerassistent 2. Damenmannschaft",
        mail: "",
        phone: "+49 (0) 175 1655724",
    },
    {
        img: "",
        name: "Susanne Strohmaier",
        section: "Spielleiterin Damen",
        mail: "",
        phone: "+49 (0) 170 7688000",
    },
]

function Damen() {
    return (

        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Damenmannschaften
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Die Damenmannschaften sind seit vielen Jahren ein fester Bestandteil des SV Losaurach.
                    Der Verein stellt zwei Teams im aktiven Ligabetrieb. Die 1. Damenmannschaft tritt eigenständig für
                    den SV Losaurach an, während die 2. Damenmannschaft als Spielgemeinschaft mit dem TSV Wilhermsdorf
                    agiert. Auf diese Weise wird Frauen ab 16 Jahren ein breites Spektrum an Möglichkeiten geboten, sich
                    sportlich zu engagieren und weiterzuentwickeln.
                </Typography>
                <img
                    className="min-h-full w-full rounded-lg object-cover object-center"
                    src="/teams/damen-1-2024-2025.jpeg"
                    alt="Damenmannschaft"
                />
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

export default Damen;
