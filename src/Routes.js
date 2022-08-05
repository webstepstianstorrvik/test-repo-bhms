import React from "react";

import {
    BrowserRouter as Router,
    Routes as RouterRoutes,
    Route,
} from "react-router-dom";
import Brukerstotte from './components/brukerstotte/Brukerstotte.js';
import VideoList from './components/brukerstotte/VideoList.js';
import Startside from './components/startside/Startside.js';
import Risikovurdering from './components/risikovurdering/Risikovurdering.js';
import Kontakter from './components/kontakter/Kontakter.js';
import Arkiv from './components/arkiv/Arkiv.js';
import Snarveier from './components/snarveier/Snarveier.js';
import Bilder from './components/bilder/Bilder.js';
import Nyheter from './components/nyheter/Nyheter.js';
import Innstillinger from './components/Innstillinger/Instillinger.js';
import Handbok from './components/handbok/Handbok.js';
import Aktiviteter from './components/aktiviteter/Aktiviteter.js';
import Avviktiltak from './components/avviktiltak/Avviktiltak.js';
import KontaktBoligbyggelaget from './components/brukerstotte/kontakt-boligbyggelaget/KontaktBoligbyggelaget.js';
import OfteStilteSpoersmal from './components/brukerstotte/ofte-stilte-sporsmal/OfteStilteSpoersmal.js';
import Profil from './components/profil/Profil.js';
import Rutiner from './components/handbok/rutiner/Rutiner';
import Skjema from './components/handbok/skjema/Skjema';
import Fagvideoer from './components/handbok/fagvideoer/Fagvideoer';
import Sjekklister from './components/handbok/sjekklister/Sjekklister';
import MineFristerAktiviteter from './components/aktiviteter/mine-frister/MineFrister';
import NyAktivitet from './components/aktiviteter/ny-aktivitet/NyAktivitet';
import Avtaler from './components/aktiviteter/avtaler/Avtaler';
import OversiktAktiviteter from './components/aktiviteter/oversikt/Oversikt';
import OversiktAvviktiltak from './components/avviktiltak/oversikt/Oversikt';
import MineFristerAvviktiltak from './components/avviktiltak/mine-frister/MineFrister';
import NyttAvviktiltak from './components/avviktiltak/nytt-avviktiltak/NyttAvviktiltak';
import RedigerNyRisikovurdering from './assets/img/icons/risikovurdering/rediger-ny-risikovurdering/RedigerNyRisikovurdering';
import SeRisikovurdering from './assets/img/icons/risikovurdering/se-risikovurdering/SeRisikovurdering';
import TidligereRevisjoner from './assets/img/icons/risikovurdering/tidligere-revisjoner/TidligereRevisjoner';
import Boligbyggelaget from './components/kontakter/boligbyggelaget/Boligbyggelaget';
import Kontaktregister from './components/kontakter/kontaktregister/Kontaktregister';
import MinKontaktinformasjon from './components/kontakter/min-kontaktinformasjon/MinKontaktinformasjon';
import NyKontakt from './components/kontakter/ny-kontakt/NyKontakt';
import ArkivSubPage from './components/arkiv/arkiv/Arkiv';
import RedigerArkiv from './components/arkiv/rediger-arkiv/RedigerArkiv';
import Soppelbotte from './components/arkiv/soppelbotte/Soppelbotte';
import LeggTilFiler from './components/arkiv/legg-til-filer/LeggTilFiler';
import Brukerregister from './components/Innstillinger/brukerregister/Brukerregister';
import Innstillingvarsling from './components/Innstillinger/innstillingvarsling/Innstillingvarsling';
import Loggvarsler from './components/Innstillinger/loggvarsler/Loggvarsler';
import OmBoligselskapet from './components/Innstillinger/om-boligselskapet/OmBoligselskapet';
import RedigerBilde from './components/Innstillinger/rediger-bilde/RedigerBilde';
import RedigerRettighet from './components/Innstillinger/rediger-rettighet/RedigerRettighet';
import RedigerStyreleder from './components/Innstillinger/rediger-styreleder/RedigerStyreleder';
import App from "./App.js";

const Routes = () => {
    
    return (
        <Router>
        <RouterRoutes>
        <Route path="/" element={<App />}>
            <Route index element={<Startside />} />
            <Route path="haandbok" element={<Handbok />} />
                <Route path="haandbok/rutiner" element={<Rutiner />} />
                <Route path="haandbok/skjema" element={<Skjema />} />
                <Route path="haandbok/fagvideoer" element={<Fagvideoer />} />
                <Route path="haandbok/sjekklister" element={<Sjekklister />} />
            <Route path="aktiviteter" element={<Aktiviteter />} />
                <Route path="aktiviteter/avtaler" element={<Avtaler />} />
                <Route path="aktiviteter/mine-frister" element={<MineFristerAktiviteter />} />
                <Route path="aktiviteter/ny-aktivitet" element={<NyAktivitet />} />
                <Route path="aktiviteter/oversikt" element={<OversiktAktiviteter />} />
            <Route path="avviktiltak" element={<Avviktiltak />} />
                <Route path="avviktiltak/oversikt" element={<OversiktAvviktiltak />} />
                <Route path="avviktiltak/mine-frister" element={<MineFristerAvviktiltak />} />
                <Route path="avviktiltak/nytt-avviktiltak" element={<NyttAvviktiltak />} />
            <Route path="risikovurdering" element={<Risikovurdering />} />
                <Route path="risikovurdering/rediger-ny-risikovurdering" element={<RedigerNyRisikovurdering />} />
                <Route path="risikovurdering/se-risikovurdering" element={<SeRisikovurdering />} />
                <Route path="risikovurdering/tidligere-revisjoner" element={<TidligereRevisjoner />} />
            <Route path="kontakter" element={<Kontakter />} />
                <Route path="kontakter/boligbyggelaget" element={<Boligbyggelaget />} />
                <Route path="kontakter/kontaktregister" element={<Kontaktregister />} />
                <Route path="kontakter/min-kontaktinformasjon" element={<MinKontaktinformasjon />} />
                <Route path="kontakter/ny-kontakt" element={<NyKontakt />} />
            <Route path="arkiv" element={<Arkiv />} />
                <Route path="arkiv/arkiv" element={<ArkivSubPage />} />
                <Route path="arkiv/legg-til-filer" element={<LeggTilFiler />} />
                <Route path="arkiv/rediger-arkiv" element={<RedigerArkiv />} />
                <Route path="arkiv/sooppelbootte" element={<Soppelbotte />} />

            <Route path="snarveier" element={<Snarveier />} />
            <Route path="bilder" element={<Bilder />} />
            <Route path="nyheter" element={<Nyheter />} />
            <Route path="brukerstootte" element={<Brukerstotte />} />
                <Route path="brukerstootte/brukerveiledning" element={<VideoList videoType="brukerveiledning"/>} />
                <Route path="brukerstootte/kontakt-boligbyggelaget" element={<KontaktBoligbyggelaget />} />
                <Route path="brukerstootte/ofte-stilte-spoorsmaal" element={<OfteStilteSpoersmal />} />
                <Route path="brukerstootte/opplaeringsvideoer" element={<VideoList videoType="opplaeringsvideoer"/>} />
            <Route path="innstillinger" element={<Innstillinger />} />
                <Route path="innstillinger/brukerregister" element={<Brukerregister />} />
                <Route path="innstillinger/innstillingvarsling" element={<Innstillingvarsling />} />
                <Route path="innstillinger/loggvarsler" element={<Loggvarsler />} />
                <Route path="innstillinger/om-boligselskapet" element={<OmBoligselskapet />} />
                <Route path="innstillinger/rediger-bilde" element={<RedigerBilde />} />
                <Route path="innstillinger/rediger-rettighet" element={<RedigerRettighet />} />
                <Route path="innstillinger/rediger-styreleder" element={<RedigerStyreleder />} />
                <Route path="innstillinger/snarveier" element={<Snarveier />} />

            <Route path="profil" element={<Profil />} />

            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <h1>Kunne ikke finne siden du ser etter..</h1>
                    </main>
                }
            />
        </Route>
        </RouterRoutes>
    </Router >
    )
}

export default Routes;