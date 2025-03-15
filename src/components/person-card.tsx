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
    phone?: string;
}

export function PersonCard({img, name, section, mail, phone}: VorstandCardProps) {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl">
                <img src={img} alt="profile-picture"/>
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h4>
                <p
                    className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                    {section}
                </p>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-7">
                {mail && (
                    <a href={`mailto:${mail}`}
                       className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                        <i className="fas fa-envelope" aria-hidden="true"></i>
                    </a>
                )}
                <a href={`tel:${phone}`}
                   className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                    <i
                        className="fas fa-phone" aria-hidden="true">
                    </i>
                </a>
            </div>
        </div>
    );
}

export default PersonCard;
