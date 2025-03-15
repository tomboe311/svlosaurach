"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";

function Impressum() {
    return (

        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Impressum
                </Typography>
                <Typography
                    variant="lead"
                    className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
                >
                    Angaben gemäß &sect; 5 TMG
                </Typography>
            </div>
            <div
                className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-start lg:grid-cols-2">
                <div>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Anschrift
                    </Typography>
                    <Typography variant="paragraph" className="mb-4">
                        Sportverein Losaurach e. V.<br/>
                        Losaurach 120<br/>
                        91459 Markt Erlbach<br/>
                        Vertreten durch: Vorstandschaft
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Postanschrift
                    </Typography>
                    <Typography variant="paragraph" className="mb-4">
                        Sportverein Losaurach e. V.<br/>
                        Losaurach 9<br/>
                        91459 Markt Erlbach<br/>
                        Vertreten durch: Vorstandschaft
                    </Typography>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Kontakt
                    </Typography>
                    <Typography variant="paragraph" className="mb-4">
                        Telefon:
                        <a href="tel:091611267">09161 1267 (Sportheim)</a>
                        <br/>
                        E-Mail:
                        <a href="mailto:info@sv-losaurach.de">info@sv-losaurach.de</a>
                    </Typography>

                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        EU-Streitschlichtung
                    </Typography>
                    <Typography variant="paragraph" className="mb-4">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank"
                           rel="noopener">https://ec.europa.eu/consumers/odr</a>
                        .
                        <br/>
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        <br/>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </Typography>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Gestaltung und Realisierung
                    </Typography>
                    <Typography variant="paragraph" className="mb-4">
                        BOEHRINGER IT - Thomas Böhringer<br/>
                        <a href="https://www.boehringer-it.de">www.boehringer-it.de</a>
                    </Typography>
                </div>
                <div>
                    <Typography variant="h2" className="mb-2">Haftungsausschuss</Typography>
                    <Typography variant="h3" color="blue-gray" className="mb-4">Haftung f&uuml;r Inhalte</Typography>
                    <Typography variant="paragraph" className="mb-4">Die Inhalte unserer Seiten wurden mit größter
                        Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                        und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind
                        wir
                        gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den
                        allgemeinen
                        Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                        nicht
                        verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder
                        nach
                        Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen. Verpflichtungen
                        zur
                        Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                        hiervon
                        unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                        einer
                        konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                        werden
                        wir diese Inhalte umgehend entfernen.</Typography>
                    <Typography variant="h3" color="blue-gray" className="mb-2">Haftung f&uuml;r Links</Typography>
                    <Typography variant="paragraph" className="mb-4">Unser Angebot enth&auml;lt Links zu externen
                        Websites Dritter, auf deren Inhalte wir keinen Einfluss
                        haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine
                        Gew&auml;hr &uuml;bernehmen.
                        F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                        Seiten
                        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
                        Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                        Verlinkung
                        nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                        konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir
                        derartige Links umgehend entfernen.</Typography>
                    <Typography variant="h3" className="mb-2">Urheberrecht</Typography>
                    <Typography variant="paragraph" className="mb-4">Die durch die Seitenbetreiber erstellten Inhalte
                        und Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                        au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des
                        jeweiligen
                        Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht
                        kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt
                        wurden,
                        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                        gekennzeichnet.
                        Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungenwerden wir derartige Inhalte
                        umgehend
                        entfernen.</Typography>
                    <Typography variant="small">
                        Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
                    </Typography>
                </div>
            </div>
        </header>
    );
}

export default Impressum;
