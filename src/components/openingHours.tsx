import React from "react";
import {Typography} from "@material-tailwind/react";

interface OpeningHoursProps {
    days: Array<{
        day: string;
        hours: string;
        notice?: string;
    }>;
}

function OpeningHours({ days }: OpeningHoursProps) {
    return (
        <div className="grid grid-cols-[150px_1fr] gap-5">
            {days.map(({ day, hours, notice }) => (
                <React.Fragment key={day}>
                    <Typography variant="h6" color="black" className="mb-2">
                        {day}
                    </Typography>
                    <Typography variant="h6" color="black" className="mb-2">
                        {hours}
                        {notice && (
                            <span className="block text-sm text-gray-600">
                                {notice}
                            </span>
                        )}
                    </Typography>
                </React.Fragment>
            ))}
        </div>
    );
}

export default OpeningHours;