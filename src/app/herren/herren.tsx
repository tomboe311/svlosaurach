"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/components/trainingszeiten/trainingszeiten";
import {ProfileCard} from "@/components";

const TRAINER = [
    {
        img: "",
        name: "Jonas Scheuenstuhl",
        section: "Trainer 1. Herrenmannschaft",
        mail: "",
        phone: "+49 (0) 151 18054220",
    },
    {
        img: "",
        name: "Niklas Stahringer",
        section: "Spielleiter 1. Herrenmannschaft",
        mail: "",
        phone: "+49 (0) 178 2873224",
    },
    {
        img: "",
        name: "Marco Weber",
        section: "Trainer 2. Herrenmannschaft",
        mail: "",
        phone: "+49 (0) 151 18054220",
    },
    {
        img: "",
        name: "Henric Raab",
        section: "Trainerassistent/Betreuer",
        mail: "",
        phone: "+49 (0) 174 9175951",
    },
    {
        img: "",
        name: "Christian König",
        section: "Trainerassistent/Betreuer",
        mail: "",
        phone: "+49 (0) 178 2873224",
    },
    {
        img: "",
        name: "Norbert Scheuenstuhl",
        section: "Torwarttrainer Herrenmannschaften",
        mail: "",
        phone: "+49 (0) 160 5846098",
    },
    {
        img: "",
        name: "Jonas Ruppe",
        section: "Medizinische Betreuung",
        mail: "",
        phone: "+49 (0) 1512 9121998",
    },
    {
        img: "",
        name: "Rene Hofmockel",
        section: "Fotograf",
        mail: "",
        phone: "+49 (0) 176 61042669",
    },
];

const TRAININGSZEITEN = [
    {
        team: "Herren 1",
        montag: "",
        dienstag: "19:00 - 20:30 Uhr",
        mittwoch: "",
        donnerstag: "19:00 - 20:30 Uhr",
        freitag: "",
    },
    {
        team: "Herren 2",
        montag: "",
        dienstag: "19:00 - 20:30 Uhr",
        mittwoch: "",
        donnerstag: "19:00 - 20:30 Uhr",
        freitag: "",
    },
];

function Herren() {
    return (

        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Herrenmannschaften
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Unsere zwei eigenständigen Herrenmannschaften sind eines der Aushängeschilder des Vereins.
                    Auf diese Weise bieten wir unserer Jugend eine langfristige Perspektive und die Möglichkeit, sich auch
                    im Erwachsenenalter sportlich zu betätigen und weiterzuentwickeln.
                </Typography>
                <img
                    className="min-h-full w-full rounded-lg object-cover object-center"
                    src="/teams/herren-2025.jpeg"
                    alt="Herrenmannschaft"
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
                <Trainingszeiten rows={TRAININGSZEITEN}/>
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

export default Herren;
