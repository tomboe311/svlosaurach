"use client";

import React from "react";
import {Button} from "@material-tailwind/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="bg-[url('/images/404-not-found.jpg')] bg-cover xl:bg-center">
            <div className="flex flex-col items-center justify-center min-h-screen text-yellow-400">
                <h1 className="text-2xl font-bold">404 - Seite nicht gefunden</h1>
                <p className="m-8 text-4xl text-center">Die angeforderte Seite konnte nicht gefunden werden. Es sieht so aus, als hätten wir das
                    Tor verfehlt!
                </p>
                <Link href="/">
                    <Button color="yellow" className="mt-8">
                    Zurück zum Anstoßpunkt
                    </Button>
                </Link>
            </div>
        </div>
    )
}