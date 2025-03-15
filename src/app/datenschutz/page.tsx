// components
import {Footer, NavbarWithMegaMenu} from "@/components";
import Datenschutz from "@/app/datenschutz/datenschutz";

// sections

export default function DatenschutzPage() {
    return (
        <div>
            <NavbarWithMegaMenu/>
            <Datenschutz/>
            <Footer/>
        </div>
    );
}
