import {Footer, NavbarWithMegaMenu} from "@/components";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavbarWithMegaMenu/>
            {children}
            <Footer/>
        </>
    );
}
