import Image from "next/image";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

interface VorstandCardProps {
    img: string;
    name: string;
    section: string;
    mail?: string;
}

export function VorstandCard({img, name, section, mail}: VorstandCardProps) {
    return (
        <Card color="transparent" shadow={false}>
            <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
                <Image
                    src={img}
                    alt={name}
                    width={768}
                    height={768}
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className="p-0">
                <a
                    href="#"
                    className="text-blue-gray-900 transition-colors hover:text-gray-800"
                >
                    <Typography variant="h5" className="mb-2">
                        {name}
                    </Typography>
                </a>
                <Typography className="mb-6 font-normal !text-gray-500">
                    {section}
                </Typography>
                <a href={`mailto:${mail}`}>
                    <Button color="gray" size="sm">
                        E-Mail
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
}

export default VorstandCard;
