import {Card, Typography} from "@material-tailwind/react";

interface ResumeItemProps {
    icon: React.ElementType;
    children: React.ReactNode;
}

export function VereinItem({icon: Icon, children}: ResumeItemProps) {
    return (
        <div className="flex items-start gap-4">
            <Card
                color="yellow"
                className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
            >
                <Icon className="h-6 w-6 !text-black" strokeWidth={2}/>
            </Card>
            <Typography className="w-full font-normal !text-gray-500">
                {children}
            </Typography>
        </div>
    );
}

export default VereinItem;
