"use client";

import Image from "next/image";
import {Typography} from "@material-tailwind/react";

const SPONSORS = [
    "boehringer-it",
];

export function Sponsors() {
    return (
        <section className="px-8 py-28">
            <div className="container mx-auto text-center">
                <Typography color="blue-gray" className="mb-2 font-bold uppercase">
                    Ein Dankeschön an unsere
                </Typography>
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Sponsoren & Partner
                </Typography>
                <div className="flex flex-wrap items-center justify-center gap-10">
                    {SPONSORS.map((logo, key) => (
                        <Image
                            key={key}
                            alt={logo}
                            width={768}
                            height={768}
                            className="w-40"
                            src={`/logos/logo-${logo}.svg`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
