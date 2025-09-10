"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/components/trainingszeiten/trainingszeiten";
import {ProfileCard} from "@/components";
import FRAUEN_DATA from "@/data/frauen.json";

function Frauen() {
    const TRAINER = FRAUEN_DATA.trainer;
    const TRAININGSZEITEN = FRAUEN_DATA.trainingszeiten;
    return (

        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Frauenmannschaften
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Die Frauenmannschaften sind seit vielen Jahren ein fester Bestandteil des SV Losaurach.
                    Der Verein stellt zwei Teams im aktiven Ligabetrieb. Die 1. Frauenmannschaft tritt eigenständig für
                    den SV Losaurach an, während die 2. Frauenmannschaft als Spielgemeinschaft mit dem TSV Wilhermsdorf
                    agiert. Auf diese Weise wird Frauen ab 16 Jahren ein breites Spektrum an Möglichkeiten geboten, sich
                    sportlich zu engagieren und weiterzuentwickeln.
                </Typography>
                <img
                    className="min-h-full w-full rounded-lg object-cover object-center"
                    src="/teams/frauen-2025.jpeg"
                    alt="Frauenmannschaft"
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

export default Frauen;
