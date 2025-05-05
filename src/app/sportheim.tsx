"use client";

import {
    Typography,
    Card,
    CardBody,
} from "@material-tailwind/react";
import React from "react";
import OpeningHours from "@/components/openingHours";

export function Sportheim() {
    return (
        <section className="px-8 py-8 bg-gray-100 shadow-sm">
            <div className="container mx-auto mb-10 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Öffnungszeiten Sportheim
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full !text-gray-500"
                >
                    Die Öffnungszeiten an Feiertagen sind über die Social-Media-Kanäle des SV Losaurach e.V. oder telefonisch zu erfragen.
                </Typography>
            </div>
            <div>
                <Card shadow={true} className="container mx-auto border border-gray/50">
                    <CardBody className="grid grid-cols-1">
                        <div className="w-full col-span-3 rounded-lg py-8 p-5 md:p-16 bg-yellow-500">
                            <OpeningHours days={
                                [
                                    {day: "Montag", "hours": "geschlossen"},
                                    {day: "Dienstag", hours: "geschlossen"},
                                    {day: "Mittwoch", hours: "18:00 - 22:00 (Küche: geschlossen)"},
                                    {day: "Donnerstag", hours: "19:00 - 22:00 (Küche: geschlossen)"},
                                    {day: "Freitag", hours: "geschlossen"},
                                    {day: "Samstag", hours: "15:00 - 22:00 (Küche: 16:00 - 19:00)"},
                                    {day: "Sonntag", hours: "09:00 - 21:00 (Küche: 11:00 - 19:00)", notice:"Sonntags wenn kein Fußballbetrieb von 13:00 - 17:00 geschlossen"}
                                ]
                            }
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}

export default Sportheim;
