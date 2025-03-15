"use client";

import React from "react";
import {Typography, Card, CardBody, Button, CardFooter} from "@material-tailwind/react";
import Link from "next/link";
import {ProfileCard} from "@/components";

const shops = [
    {
        name: "Fabes Creates",
        url: "https://www.fabes-creates.de/c/fanshop/shops/sv-losaurach",
        img: "/images/fabes-creates.jpeg",
    },
    {
        name: "Günther's Sport Shop",
        url: "https://team.jako.com/de-de/team/sv_losaurach/",
        img: "/images/guenthers-sport-shop.jpg",
    },
    {
        name: "SG Fanshop",
        url: "https://team.jako.com/de-de/team/sg_losaurach_markt_erlbach/",
        img: "/images/guenthers-sport-shop.jpg",
    },
];

export default function Fanshop() {
    return (
        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    SVL Fanshops
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Die SVL Fanshops bieten eine große Auswahl an Fanartikeln und Fanbekleidung.
                </Typography>
            </div>
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {shops.map((shop, index) => (
                        <Card key={index} className="shadow-lg">
                            <img src={shop.img} alt={shop.name} className="h-48 w-full object-cover"/>
                            <CardBody className="text-center">
                                <Typography variant="h5" className="mb-4">
                                    {shop.name}
                                </Typography>

                                <Link href={shop.url} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        color="yellow"
                                        size="lg"
                                    >
                                        Zum Shop
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </header>
    );
}
