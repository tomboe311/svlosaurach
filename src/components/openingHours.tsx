import React from "react";
import {Typography} from "@material-tailwind/react";

interface OpeningHoursProps {
    days: Array<{
        day: string;
        hours: string;
        notice?: string;
    }>;
}

function DesktopView({ days }: OpeningHoursProps) {
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

function MobileView({ days }: OpeningHoursProps) {
    return (
        <div className="flex flex-col gap-4">
            {days.map(({ day, hours, notice }) => (
                <div key={day} className="border-b border-black/10 pb-4 last:border-b-0">
                    <Typography variant="h6" color="black" className="mb-1">
                        {day}
                    </Typography>
                    <Typography variant="paragraph" color="black">
                        {hours}
                    </Typography>
                    {notice && (
                        <Typography variant="small" className="text-gray-900">
                            {notice}
                        </Typography>
                    )}
                </div>
            ))}
        </div>
    );
}

function OpeningHours({ days }: OpeningHoursProps) {
    return (
        <>
            <div className="hidden md:block">
                <DesktopView days={days} />
            </div>
            <div className="md:hidden">
                <MobileView days={days} />
            </div>
        </>
    );
}

export default OpeningHours;