import {Card, Typography} from "@material-tailwind/react";

const TABLE_HEAD = ["Team", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

const TABLE_ROWS = [
    {
        team: "U17/U16 (B-Junioren)",
        montag: "18:30 - 20:00 Uhr (Sportplatz Losaurach)",
        dienstag: "",
        mittwoch: "",
        donnerstag: "18:30 - 20:00 Uhr (Sportplatz Markt Erlbach)",
        freitag: "",
    },
    {
        team: "U15/U14 (C1/C2-Junioren)",
        montag: "17:00 - 19:00 Uhr (Sportplatz Markt Erlbach)",
        dienstag: "",
        mittwoch: "17:00 - 19:00 Uhr (Sportplatz Markt Erlbach)",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "U13/U12 (D1/D2-Junioren)",
        montag: "17:30 - 19:00 Uhr (Sportplatz Markt Erlbach)",
        dienstag: "",
        mittwoch: "17:30 - 19:00 Uhr (Sportplatz Markt Erlbach)",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "U11/U10 (E1/E2-Junioren)",
        montag: "",
        dienstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "",
        freitag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
    },
    {
        team: "U9/U8 (F-Junioren)",
        montag: "",
        dienstag: "",
        mittwoch: "17:15 - 18:45 Uhr (Sportplatz Losaurach)",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "U7 (G-Junioren)",
        montag: "",
        dienstag: "",
        mittwoch: "17:30 - 18:30 Uhr (Sportplatz Losaurach)",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "U17/U16 (B-Juniorinnen)",
        montag: "",
        dienstag: "17:30 - 19:00 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "17:30 - 19:00 Uhr (Sportplatz Losaurach)",
        freitag: "",
    },
    {
        team: "U11/U10 (E-Juniorinnen)",
        montag: "",
        dienstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "",
        freitag: "",
    },
];

export function Trainingszeiten() {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full h-full min-w-max table-auto text-left" style={{tableLayout: 'fixed'}}>
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {TABLE_ROWS.map(({team, montag, dienstag, mittwoch, donnerstag, freitag}, index) => (
                    <tr key={team} className="even:bg-blue-gray-50/50">
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {team}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {montag}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {dienstag}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {mittwoch}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                {donnerstag}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                {freitag}
                            </Typography>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Card>
    );
}
