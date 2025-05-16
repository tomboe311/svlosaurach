"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {ProfileCard} from "@/components";
import {Trainingszeiten} from "@/components/trainingszeiten/trainingszeiten";

const TRAINER = [
    {
        img: "",
        name: "Christian Mederer",
        section: "Schützenmeister",
        mail: "",
        phone: "+49 173 1928863",
    },
];

const TRAININGSZEITEN = [
    {
        team: "Jugend (Lichtgewehr)",
        montag: "",
        dienstag: "18:00 Uhr",
        mittwoch: "",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "Jugend (Lichtgewehr)",
        montag: "",
        dienstag: "(alle 2 Wochen) 16:30 Uhr",
        mittwoch: "",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "Erwachsene (Luftgewehr & Luftpistole)",
        montag: "",
        dienstag: "",
        mittwoch: "19:00 Uhr",
        donnerstag: "",
        freitag: "",
    },
];
function Schuetzen() {
    return (
        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Willkommen bei den Schützen
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Der „Schützenbund 1964 Losaurach und Umgebung e. V.“ wurde am 30.01.1964 im damaligen Gasthaus „Zur Einkehr“ in Losaurach gegründet. Nachdem man in den folgenden fast 40 Jahren mehrmals seinen Schießstandort in verschiedene Gasthäuser verlagerte, folgte im Jahr 2002 die Fusion mit dem SV Losaurach. Seitdem geht man als „Abteilung Schützen“ für den SVL an den Schießstand. Zwei Jahre später bezog man dann die neu errichtete Schießanlage mit zehn elektronischen Schießständen im Keller des Sportheimanbaus in Losaurach.
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Im Schützenkeller ist man mit seinen gut 165 Mitgliedern bis heute aktiv. Derzeit befinden sich vier Mannschaften im Rundenwettkampf. Auch unsere Jugend trifft sich regelmäßig, um mit Luft-/ und Lichtgewehren zu trainieren. Wer sich unseren Schützen anschließen möchte, kann sich gerne mit Schützenmeister Christian Mederer in Verbindung setzen.
                </Typography>
                <div className="text-center">
                    <img
                        className="mx-auto min-h-full w-1/2 rounded-lg object-cover object-center"
                        src="/teams/sv-losaurach-schuetzen.jpeg"
                        alt="SV Losaurach - Los Dartos"
                    />
                    <Typography variant="small" className="mt-2 font-normal">
                        Foto: Gudrun Schwarz-Köhler - FLZ
                    </Typography>
                </div>
            </div>
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Schützenmeister
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
                    Trainingsort: Sportheim Saal Losaurach
                </Typography>
                <Typography variant="small" color="blue-gray" className="my-4">
                    Trainingszeiten können sich kurzfristig ändern. Bitte informieren Sie sich bei den Trainern.
                </Typography>
            </div>
        </header>
    );
}

export default Schuetzen;
