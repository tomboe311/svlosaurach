import {Card, CardBody, IconButton, Typography} from "@material-tailwind/react";
import React from "react";

interface SectionCardProps {
    title: string;
    iconFontName: string;
}

export function SectionCard({iconFontName, title}: SectionCardProps) {
    return (
        <Card color="transparent" shadow={true} className="bg-yellow-500">
            <CardBody className="grid justify-center text-center">
                <div
                    className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-yellow-500 p-2.5 text-gray-900 shadow">
                    <i className={`fa-solid ${iconFontName} text-lg`}/>
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default SectionCard;
