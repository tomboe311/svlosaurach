import { Typography } from "@material-tailwind/react";

type TrainingRow = {
    team: string;
    montag: string;
    dienstag: string;
    mittwoch: string;
    donnerstag: string;
    freitag: string;
};

type CardViewProps = {
    rows: TrainingRow[];
};

function CardView({ rows }: CardViewProps) {
    return (
        <>
            {rows.map(({ team, montag, dienstag, mittwoch, donnerstag, freitag }, index) => (
                <div key={team} className="mb-4 p-4 rounded-lg shadow-md">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {team}
                    </Typography>
                    {montag && (
                        <div className="mb-2">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                <strong>Montag:</strong> {montag}
                            </Typography>
                        </div>
                    )}
                    {dienstag && (
                        <div className="mb-2">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                <strong>Dienstag:</strong> {dienstag}
                            </Typography>
                        </div>
                    )}
                    {mittwoch && (
                        <div className="mb-2">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                <strong>Mittwoch:</strong> {mittwoch}
                            </Typography>
                        </div>
                    )}
                    {donnerstag && (
                        <div className="mb-2">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                <strong>Donnerstag:</strong> {donnerstag}
                            </Typography>
                        </div>
                    )}
                    {freitag && (
                        <div className="mb-2">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                <strong>Freitag:</strong> {freitag}
                            </Typography>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export default CardView;
