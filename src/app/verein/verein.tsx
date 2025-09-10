"use client";

import React from "react";
import {Button, Carousel, Typography} from "@material-tailwind/react";
import {ProfileCard} from "@/components";
import Link from "next/link";
import VEREIN_DATA from "@/data/verein.json";

function Verein() {
    const VORSTANDSCHAFT = VEREIN_DATA.vorstandschaft;
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
                    Der SV Losaurach wurde 1972 gegründet und entwickelte sich von zwei Fußballmannschaften zu einem vielseitigen Sportverein mit aktuell über 700 Mitgliedern – mehr als das Fünffache der Einwohnerzahl. Neben Fußball kamen im Laufe der Jahre Tennis, Schützen, Seifenkiste und Dart als Abteilungen hinzu. Große Meilensteine waren der Bau des Sportheims, die Gründung einer Frauenmannschaft sowie die erfolgreiche Spielgemeinschaft im Jugendfußball. Trotz Herausforderungen, wie dem gesellschaftlichen Wandel und der Pandemie, wächst der Verein stetig weiter und bleibt ein fester Bestandteil des regionalen Sportlebens.
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
