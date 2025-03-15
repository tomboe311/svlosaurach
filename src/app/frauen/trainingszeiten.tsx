import {Card, Typography} from "@material-tailwind/react";

const TABLE_HEAD = ["Team", "Dienstag", "Donnerstag"];

const TABLE_ROWS = [
    {
        team: "Frauen 1",
        dienstag: "19:00 - 20:00 Uhr",
        donnerstag: "19:00 - 20:00 Uhr",
    },
    {
        team: "Frauen 2",
        dienstag: "19:00 - 20:00 Uhr",
        donnerstag: "19:00 - 20:00 Uhr",
    },
];

export function Trainingszeiten() {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
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
                {TABLE_ROWS.map(({team, dienstag, donnerstag}, index) => (
                    <tr key={team} className="even:bg-blue-gray-50/50">
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {team}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {dienstag}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {donnerstag}
                            </Typography>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Card>
    );
}
