"use client";

import React from "react";
import {Button} from "@material-tailwind/react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-yellow-400">
            <h1 className="text-2xl font-bold">404 - Seite nicht gefunden</h1>
            <p className="m-8 text-4xl text-center">Die angeforderte Seite konnte nicht gefunden werden. Es sieht so aus, als hätten wir das
                Tor verfehlt!
            </p>
            <a href="/">
                <Button color="yellow" className="mt-8">
                Zurück zum Anstoßpunkt
                </Button>
            </a>
        </div>
    )
}