// components
import {Footer, NavbarWithMegaMenu} from "@/components";
import Schuetzen from "@/app/schuetzen/schuetzen";
// sections

export default function SchuetzenPage() {
    return (
        <div>
            <NavbarWithMegaMenu/>
            <Schuetzen/>
            <Footer/>
        </div>
    );
}
