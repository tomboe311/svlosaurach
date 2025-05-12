"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";

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
                    Diese Seite befindet sich derzeit im Aufbau.<br/>
                    In Kürze findest du hier alle Informationen rund um unsere Aktivitäten, Termine und Angebote.

                    Bei Fragen wende dich bitte an Christian Mederer.
                </Typography>
            </div>
        </header>
    );
}

export default Schuetzen;
