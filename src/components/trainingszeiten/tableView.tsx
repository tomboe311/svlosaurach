import { Typography } from "@material-tailwind/react";

type TrainingRow = {
    team: string;
    montag: string;
    dienstag: string;
    mittwoch: string;
    donnerstag: string;
    freitag: string;
};

type TableViewProps = {
    rows: TrainingRow[];
};

function TableView({ rows }: TableViewProps) {
    const TABLE_HEAD = ["Team", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

    return (
        <table className="w-full h-full min-w-max table-auto text-left" style={{ tableLayout: 'fixed' }}>
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
            {rows.map(({ team, montag, dienstag, mittwoch, donnerstag, freitag }, index) => (
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
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            {donnerstag}
                        </Typography>
                    </td>
                    <td className="p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            {freitag}
                        </Typography>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TableView;
