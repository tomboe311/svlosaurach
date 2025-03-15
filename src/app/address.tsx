"use client";

import {
    Typography,
    Card,
    CardBody,
} from "@material-tailwind/react";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";
import React from "react";

export function Address() {
    return (
        <section className="px-8 py-16">
            <div className="container mx-auto mb-20 text-center">
                <Typography variant="h1" color="blue-gray" className="mb-4 uppercase">
                    So findest du uns
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full lg:w-5/12 !text-gray-500"
                >
                    Unser Standort: Wo der Spaß beginnt und das Spiel niemals endet
                </Typography>
            </div>
            <div>
                <Card shadow={true} className="container mx-auto border border-gray/50">
                    <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
                        <div className="w-full col-span-3 rounded-lg py-8 p-5 md:p-16 bg-gray-900">
                            <Typography variant="h4" color="white" className="mb-2">
                                Adressinformationen
                            </Typography>
                            <Typography
                                variant="lead"
                                className="mx-auto mb-8 text-base !text-gray-500"
                            >
                                Finde den Weg zu unseren Grünflächen des Fußballfieber.
                            </Typography>
                            <div className="flex my-2 gap-5">
                                <MapPinIcon className="h-6 w-6" color="white"/>
                                <Typography variant="h6" color="white" className="mb-2">
                                    Losaurach 120, 91459 Markt Erlbach
                                </Typography>
                            </div>
                            <div className="flex my-2 gap-5">
                                <PhoneIcon className="h-6 w-6" color="white"/>
                                <Typography variant="h6" color="white" className="mb-2">
                                    <a href="tel:091611267">09161 1267 (Sportheim)</a>
                                </Typography>
                            </div>
                            <div className="flex my-2 gap-5">
                                <EnvelopeIcon className="h-6 w-6" color="white"/>
                                <Typography variant="h6" color="white" className="mb-2">
                                    <a href="mailto:info@sv-losaurach.de">info@sv-losaurach.de</a>
                                </Typography>
                            </div>
                        </div>
                        <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 p-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.4310021611027!2d10.6226850777469!3d49.533016971431344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a2095a9a702191%3A0xf8a5d27df2fff7cf!2sSportheim%20Losaurach!5e0!3m2!1sde!2sde!4v1714819490613!5m2!1sde!2sde"
                                width="100%"
                                height="450"
                                style={{border:0}}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}

export default Address;
