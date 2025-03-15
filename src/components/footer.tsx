import {Typography, Button} from "@material-tailwind/react";

const LINKS = ["Impressum", "Datenschutz"];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="mt-10 px-8 pt-20">
            <div className="container mx-auto">
                <div
                    className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
                    <Typography className="text-center font-normal !text-gray-700">
                        &copy; {CURRENT_YEAR} {" "}
                        <a href="https://www.sv-losaurach.de" target="_blank">
                            Sportverein Losaurach e. V.
                        </a>{" "}
                        &minus;{" "}unterstützt von{" "}
                        <a href="https://www.boehringer-it.de" target="_blank">
                            BOEHRINGER IT
                        </a>
                    </Typography>
                    <ul className="flex gap-8 items-center">
                        {LINKS.map((link) => (
                            <li key={link}>
                                <Typography
                                    as="a"
                                    href={`/${link.toLocaleLowerCase()}`}
                                    variant="small"
                                    className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    {link}
                                </Typography>
                            </li>
                        ))}
                        <li>
                            <Typography
                                as="a"
                                href="https://www.sunnyportal.com/Templates/PublicPage.aspx?page=0b478a51-a7f0-4697-898e-6dfec83640da"
                                target="_blank"
                                variant="small"
                                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                Leistung PV-Anlage
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
