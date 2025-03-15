import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

interface ProfileCardProps {
    img: string;
    name: string;
    section: string;
    mail?: string;
    phone?: string;
}

export function ProfileCard({img, name, section, mail, phone}: ProfileCardProps) {
    return (
        <Card className="w-96">
            <CardHeader floated={false} className="h-auto">
                {img &&( <img src={img} alt="profile-picture" />)}
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {section}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
               {mail && (
                    <Tooltip content="Mail">
                        <Typography
                            as="a"
                            href={`mailto:${mail}`}
                            variant="lead"
                            color="yellow"
                            textGradient
                        >
                            <i className="fas fa-envelope" aria-hidden="true"/>
                        </Typography>
                    </Tooltip>
                )}
                <Tooltip content="Telefonnummer">
                    <Typography
                        as="a"
                        href={`tel:${phone}`}
                        variant="lead"
                        color="yellow"
                        textGradient
                    >
                        <i className="fas fa-phone" aria-hidden="true"/>
                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    );
}
