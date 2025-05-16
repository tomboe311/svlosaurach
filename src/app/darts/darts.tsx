"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/components/trainingszeiten/trainingszeiten";
import {ProfileCard} from "@/components";

const TRAINER = [
    {
        img: "",
        name: "Sebastian Klein",
        section: "Abteilungsleiter",
        mail: "",
        phone: "+49 173 5701415",
    },
    {
        img: "",
        name: "Christian Böhm",
        section: "Kapitän",
        mail: "",
        phone: "+49 172 5413841",
    },
];

const TRAININGSZEITEN = [
    {
        team: "Dart",
        montag: "",
        dienstag: "",
        mittwoch: "ab 18:00 Uhr",
        donnerstag: "",
        freitag: "",
    },
];

function Darts() {
    return (

        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Darts
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Am 25.03.2023 wurde auf der Jahreshauptversammlung des SV Losaurach e.V. die Abteilung
                    Dart neu gegründet. Mittlerweile zählen über 70 begeisterte Mitglieder zu den „Dartern“.
                    Sebastian Klein leitet die Abteilung, während Christian Böhm als Kapitän die Mannschaft führt.
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Derzeit nimmt eine Mannschaft aktiv am Spielbetrieb teil: „Los Dartos“. In der ersten Saison 2024
                    konnte das Team mit einer beeindruckenden Leistung den vierten Platz in der B-Klasse 7
                    (Nürnberg/Fürth) erreichen und somit die Klasse halten.
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Als Trainingsstätte dient der Saal des Sportheims Losaurach, wo inzwischen drei moderne E-
                    Dart-Automaten zur Verfügung stehen. Trainiert wird in der Regel mittwochs ab 18 Uhr, und
                    die Ligaspiele finden im zweiwöchigen Rhythmus samstagabends statt.
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Die Idee zur Gründung einer eigenen Abteilung Dart entstand bereits vor vielen Jahren, als
                    noch im Losauracher „Hüttla“ gespickert wurde. Der Gedanke wurde durch unser LA-Dart
                    Champion Turnier weitergetragen, das jährlich im Februar stattfindet. Dieses Turnier gehört
                    zu den größten Events des Sportvereins. Um die 60 Teilnehmer treten auf fünf Scheiben im
                    Schützenkeller gegeneinander an, um schließlich einen Sieger zu küren. Dabei stehen vor allem
                    der Spaß und die Freude am gemeinsamen Spiel im Vordergrund.
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Haben wir euer Interesse geweckt?
                    Dann seid ihr herzlich eingeladen, mittwochs ab 18 Uhr unter Rücksprache mit unserem
                    Spielführer Christian Böhm zu einem Schnuppertraining vorbeizukommen.
                    Ihr müsst nicht einmal eigene Darts mitbringen – wir stellen euch gerne welche zum
                    Testen zur Verfügung.
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Egal, ob ihr schon Erfahrung habt oder absolute Anfänger seid: Bei uns ist jeder
                    willkommen!
                </Typography>
                <img
                    className="min-h-full w-full rounded-lg object-cover object-center"
                    src="/teams/sv-losaurach-dart.jpeg"
                    alt="SV Losaurach - Los Dartos"
                />
            </div>
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Abteilungsleitung
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

export default Darts;
