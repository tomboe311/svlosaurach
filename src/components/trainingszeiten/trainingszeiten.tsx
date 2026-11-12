"use client";

import {Card} from "@material-tailwind/react";
import TableView from "@/components/trainingszeiten/tableView";
import CardView from "@/components/trainingszeiten/cardView";
import {TrainingRow} from "@/types/content";

type TrainingszeitenProps = {
    rows: TrainingRow[];
};
export function Trainingszeiten({ rows }: TrainingszeitenProps) {
    return (
        <div>
            {/* Desktop View */}
            <Card className="h-full w-full overflow-scroll">
                <div className="hidden md:block">
                    <TableView rows={rows} />
                </div>
            </Card>
            {/* Mobile View */}
            <div className="md:hidden">
                <CardView rows={rows} />
            </div>
        </div>
    );
}