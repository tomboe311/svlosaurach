"use client";

import {Typography, Button, Carousel} from "@material-tailwind/react";
import Link from "next/link";
import {
    UserGroupIcon,
    SwatchIcon,
    CalendarIcon,
    ArrowRightIcon,
    FireIcon,
    GlobeAltIcon
} from "@heroicons/react/24/solid";
import {VereinItem} from "@/components";

const VEREIN_ITEMS = [
    {
        icon: CalendarIcon,
        children: "Gründungsjahr 1972",
    },
    {
        icon: SwatchIcon,
        children: "Vereinsfarben: Gelb Schwarz",
    },
    {
        icon: UserGroupIcon,
        children: "700 Mitglieder",
    },
    {
        icon: FireIcon,
        children: "4 Abteilungen",
    },
    {
        icon: GlobeAltIcon,
        children: "17 Fußballteams",
    }
];

export function Verein() {
    return (
        <section className="px-8 py-24">
            <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="col-span-1">
                    <Typography variant="h2" color="blue-gray" className="mb-4">
                        Der SVL steht für
                    </Typography>
                    <Carousel className="rounded-xl mb-4">
                        <div className="relative h-full w-full">
                            <img
                                src="/images/carousel.jpeg"
                                alt="SVL Losaurach Teamkreis"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
                                <div className="w-3/4 text-center md:w-2/4">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-4 text-1xl md:text-2xl lg:text-3xl uppercase"
                                    >
                                        Toleranz und Fairness im Fokus
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        Wir leben Teamgeist, Respekt und ein faires Miteinander – auf und neben dem
                                        Spielfeld.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full w-full">
                            <img
                                src="/images/carousel.jpeg"
                                alt="SVL Losaurach Teamkreis"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
                                <div className="w-3/4 text-center md:w-2/4">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-4 text-1xl md:text-2xl lg:text-3xl uppercase"
                                    >
                                        Mehr als nur Sport
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        Erlebe unser Vereinsleben auch außerhalb des Trainings im eigenen Sportheim und
                                        bei gemeinsamen Veranstaltungen.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full w-full">
                            <img
                                src="/images/carousel.jpeg"
                                alt="SVL Losaurach Teamkreis"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
                                <div className="w-3/4 text-center md:w-2/4">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-4 text-1xl md:text-2xl lg:text-3xl uppercase"
                                    >
                                        Disziplin und Werte für die Zukunft
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        Wir fördern Ordnung, Zielstrebigkeit und Ehrgeiz, um unsere Mitglieder auf
                                        Erfolg und Verantwortung vorzubereiten.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full w-full">
                            <img
                                src="/images/carousel.jpeg"
                                alt="SVL Losaurach Teamkreis"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
                                <div className="w-3/4 text-center md:w-2/4">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-4 text-1xl md:text-2xl lg:text-3xl uppercase"
                                    >
                                        Die Leidenschaft für den Sport
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        Gemeinsam teilen wir die Begeisterung für Bewegung und sportlichen Erfolg.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full w-full">
                            <img
                                src="/images/carousel.jpeg"
                                alt="SVL Losaurach Teamkreis"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
                                <div className="w-3/4 text-center md:w-2/4">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-4 text-1xl md:text-2xl lg:text-3xl uppercase"
                                    >
                                        Gemeinsam stark
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        Zusammenhalt und Teamgeist sind die Basis für unser Vereinsleben und ein starkes
                                        Miteinander.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full w-full">
                            <img
                                src="/images/carousel.jpeg"
                                alt="SVL Losaurach Teamkreis"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
                                <div className="w-3/4 text-center md:w-2/4">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-4 text-1xl md:text-2xl lg:text-3xl uppercase"
                                    >
                                        Bewegung mit Freude
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        Der Spaß am Sport steht bei uns im Vordergrund – für jedes Alter und jeden
                                        Fitnesslevel.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full w-full">
                            <img
                                src="/images/carousel.jpeg"
                                alt="SVL Losaurach Teamkreis"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
                                <div className="w-3/4 text-center md:w-2/4">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-4 text-1xl md:text-2xl lg:text-3xl uppercase"
                                    >
                                        Förderung von Körper und Geist
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        Besonders bei Kindern und Jugendlichen legen wir Wert auf körperliche, geistige und soziale Entwicklung.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                    <Link href="/verein">
                        <Button
                            variant="text"
                            color="gray"
                            className="flex items-center gap-2"
                        >
                            Erfahre mehr
                            <ArrowRightIcon
                                strokeWidth={3}
                                className="h-3.5 w-3.5 text-gray-900"
                            />
                        </Button>
                    </Link>
                </div>
                <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
                    {VEREIN_ITEMS.map((props, idx) => (
                        <VereinItem key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Verein;
