// components
import {Footer, NavbarWithMegaMenu} from "@/components";
import Seifenkiste from "@/app/seifenkiste/seifenkiste";

// sections

export default function SeifenkistenPage() {
    return (
        <div>
            <NavbarWithMegaMenu/>
            <Seifenkiste/>
            <Footer/>
        </div>
    );
}
