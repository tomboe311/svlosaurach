// components
import {Footer, NavbarWithMegaMenu} from "@/components";

// sections
import Hero from "./hero";
import Sponsors from "./sponsors";
import Sections from "./sections";
import Teams from "./teams";
import Verein from "@/app/verein";
import Address from "@/app/address";
import Sportheim from "@/app/sportheim";

export default function Home() {
    return (
        <>
            <NavbarWithMegaMenu/>
            <Hero/>
            <Verein/>
            <Teams/>
            <Sections/>
            <Sponsors/>
            <Sportheim/>
            <Address/>
            <Footer/>
        </>
    );
}

