"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {ProfileCard, TeamCard} from "@/components";

function Seifenkiste() {
    return (
        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Seifenkiste
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Der Seifenkistensport hat eine lange Tradition. Ursprünglich in den 1930er Jahren in den USA entstanden, begeisterte er bald weltweit Menschen aller Altersgruppen. Ohne Motor, allein durch die Schwerkraft angetrieben, steht dieser Sport für technische Kreativität, Geschicklichkeit und die Freude an Geschwindigkeit.
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Unsere Abteilung ist Teil dieser Tradition. Gemeinsam nehmen wir an Seifenkistenrennen teil und erleben den besonderen Reiz dieses Sports – ob an der Rennstrecke oder im Austausch mit anderen Teams.

                    Wer mehr über unsere Aktivitäten erfahren möchte, kann sich gerne mit unserem Abteilungsleiter Sebastian Strohmaier in Verbindung setzen.
                </Typography>
                <div className="container mx-auto">
                    <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                        Abteilungsleiter
                    </Typography>
                    <div
                        className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                        <ProfileCard img={""} name={"Sebastian Strohmaier"} section={"Abteilungsleiter Seifenkiste"} mail={""} phone={"+49 1516 4736110"} />
                    </div>
                </div>
                <div className="container mx-auto">
                    <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                        Bisherige Erfolge
                    </Typography>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <Typography variant="lead" color="blue-gray">
                                    2023: Pascal Leismann mit dem 3. Platz bei der Soapbox Weltmeisterschaft in der Elite XL Ü18-Klasse
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="lead" color="blue-gray">
                                    2022: Sebastian Strohmaier mit dem 2. Platz bei der 22. Europameisterschaft in der Elite XL Ü18-Klasse
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="lead" color="blue-gray">
                                    2019: Sebastian Strohmaier mit dem 1. Platz bei der 71. Deutschen Meisterschaft in der Elite XL Ü18-Klasse
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="lead" color="blue-gray">
                                    2019: Pascal Leismann mit dem 3. Platz bei der 71. Deutschen Meisterschaft in der Elite XL Ü18-Klasse
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="lead" color="blue-gray">
                                    2018: Pascal Leismann mit dem 1. Platz bei der 20. Europameisterschaft in der Elite XL Ü18-Klasse
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="lead" color="blue-gray">
                                    2018: Leander Eisen mit dem 2. Platz bei der 20. Europameisterschaft in der DSKD Open-Klasse
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="lead" color="blue-gray">
                                    2017: Sebastian Strohmaier mit dem 1. Platz bei der 69. Deutschen Meisterschaft in der Elite-XL Klasse
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="lead" color="blue-gray">
                                    2017: Sebastian Strohmaier mit dem 1. Platz bei der 19. Europameisterschaft in der Elite-XL Klasse
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="lead" color="blue-gray">
                                    2017: Pascal Leismann mit dem 2. Platz bei der 19. Europameisterschaft in der Elite XL Ü18-Klasse
                                </Typography>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Seifenkiste;
