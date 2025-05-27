"use client";

import React from "react";
import {Button, Carousel, Typography} from "@material-tailwind/react";
import {ProfileCard} from "@/components";
import Link from "next/link";

const VORSTANDSCHAFT = [
    {
        img: "",
        name: "Susanne Strohmaier",
        section: "1. Vorsitzender",
        mail: "",
        phone: "+49 170 7688000",
    },
    {
        img: "",
        name: "Bernd Schemm",
        section: "2. Vorsitzender",
        mail: "",
        phone: "+49 170 8322215",
    },
    {
        img: "",
        name: "Kevin Neumeister",
        section: "2. Vorsitzender",
        mail: "",
        phone: "+49 1522 6567348",
    },
    {
        img: "",
        name: "Heiko Gräbner",
        section: "1. Kassier",
        mail: "",
        phone: " +49 172 8621772",
    },
    {
        img: "",
        name: "Henric Raab",
        section: "1. Schriftführer",
        mail: "",
        phone: "+49 174 9175951",
    },
    {
        img: "",
        name: "Helmut Hofmockel",
        section: "2. Kassier",
        mail: "",
        phone: "+49 172 8563666",
    },
    {
        img: "",
        name: "Thomas Zeilinger",
        section: "2. Schriftführer",
        mail: "",
        phone: "+49 172 8608855",
    },
    {
        img: "",
        name: "Sebastian Klein",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 173 5701415",
    },
    {
        img: "",
        name: "Heiko Schemm",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1522 2675391",
    },
    {
        img: "",
        name: "Christian König",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1515 0678043",
    },
    {
        img: "",
        name: "Karin Klein",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1515 6805378",
    },
    {
        img: "",
        name: "Stefan Demjanowitsch",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 172 8647778",
    },
    {
        img: "",
        name: "Jochen Schirmer",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1511 4072581",
    },
    {
        img: "",
        name: "Niklas Stahringer",
        section: "Abteilungsleiter Fußball",
        mail: "",
        phone: "+49 178 2873224",
    },
    {
        img: "",
        name: "Marco Weber",
        section: "Abteilungsleiter Fußball",
        mail: "",
        phone: "+49 1516 1597159",
    },
    {
        img: "",
        name: "Dominik Tuleweit",
        section: "Jugendleiter",
        mail: "",
        phone: "",
    },
    {
        img: "",
        name: "Henric Raab",
        section: "Jugendleiter",
        mail: "",
        phone: "+49 174 9175951",
    },
    {
        img: "",
        name: "Sebastian Strohmaier",
        section: "Abteilungsleiter Seifenkiste",
        mail: "",
        phone: "+49 1516 4736110",
    },
    {
        img: "",
        name: "Christian Mederer",
        section: "Schützenmeister",
        mail: "",
        phone: "+49 173 1928863",
    },
    {
        img: "",
        name: "Sebastian Klein",
        section: "Abteilungsleiter Dart",
        mail: "",
        phone: "+49 173 5701415",
    },
    {
        img: "",
        name: "Erich Reuther",
        section: "Kassenprüfer",
        mail: "",
        phone: "",
    },
    {
        img: "",
        name: "Erwin Sandmann",
        section: "Kassenprüfer",
        mail: "",
        phone: "",
    },
];

function Verein() {
    return (
        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Verein
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Der SV Losaurach wurde 1972 gegründet und entwickelte sich von zwei Fußballmannschaften zu einem vielseitigen Sportverein mit aktuell über 650 Mitgliedern – mehr als das Vierfache der Einwohnerzahl. Neben Fußball kamen im Laufe der Jahre Tennis, Schützen, Seifenkiste und Dart als Abteilungen hinzu. Große Meilensteine waren der Bau des Sportheims, die Gründung einer Frauenmannschaft sowie die erfolgreiche Spielgemeinschaft im Jugendfußball. Trotz Herausforderungen, wie dem gesellschaftlichen Wandel und der Pandemie, wächst der Verein stetig weiter und bleibt ein fester Bestandteil des regionalen Sportlebens.
                </Typography>
                <Typography variant="small" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Unser Heimat ist das Sportheim, unser Stolz der SVL!
                    #TraditionSeitNeunzehnhundertzweiundsiebzig
                </Typography>
                <Link href="/assets/uploads/SVL-Beitrittserklaerung-ab-03-2024.pdf">
                    <Button color="yellow" className="mb-4">
                        Mitgliedsantrag
                    </Button>
                </Link>
            </div>
            <div className="container mx-auto mb-20">
                <Carousel
                    className="rounded-xl h-96"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    <img
                        src="/images/svl-sportplatz-drohnenaufnahme.jpeg"
                        alt="Sportplatz Losaurach"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="/images/svl-jubilaeumsbild.jpeg"
                        alt="Jubiläumsbild"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="/images/svl-jubilaeumsbild-jubel.jpeg"
                        alt="Jubiläumsbild Jubel"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </div>
            <div className="container mx-auto">
                <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                    Vorstandschaft
                </Typography>
                <div
                    className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                    {VORSTANDSCHAFT.map((props, idx) => (
                        <ProfileCard key={idx} {...props} />
                    ))}
                </div>
            </div>
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Abteilungen
                </Typography>
                <div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Fußball
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Der SVL bietet Fußball für alle Altersklassen. Von den Bambinis bis zu den Senioren.
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
                        Abteilungsleiter
                    </Typography>
                    <div
                        className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                        {VORSTANDSCHAFT.filter(props => props.section === "Abteilungsleiter Fußball" || props.section === "Jugendleiter").map((props, idx) => (
                            <ProfileCard key={idx} {...props} />
                        ))}
                    </div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Schützen
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Der Schützenbund ist die älteste Abteilung des SVL und besteht seit über 60 Jahren.
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
                        Schützenmeister
                    </Typography>
                    <div
                        className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                        {VORSTANDSCHAFT.filter(props => props.section === "Schützenmeister").map((props, idx) => (
                            <ProfileCard key={idx} {...props} />
                        ))}
                    </div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Dart
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Der SVL geht seit 2023 mit der Dartmannschaft „Los Dartos“ ans Board.
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
                        Abteilungsleiter
                    </Typography>
                    <div
                        className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                        {VORSTANDSCHAFT.filter(props => props.section === "Abteilungsleiter Dart").map((props, idx) => (
                            <ProfileCard key={idx} {...props} />
                        ))}
                    </div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Seifenkisten
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Die Seifenkiste ist mit Welt- & Europaschaftserfolgen die erfolgreichste Abteilung des SVL.
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
                        Abteilungsleiter
                    </Typography>
                    <div
                        className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                        {VORSTANDSCHAFT.filter(props => props.section === "Abteilungsleiter Seifenkiste").map((props, idx) => (
                            <ProfileCard key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Verein;
