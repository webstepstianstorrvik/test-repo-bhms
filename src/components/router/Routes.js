import React from "react";

import {
    BrowserRouter as Router,
    Routes as RouterRoutes,
    Route,
    Navigate,
} from "react-router-dom";
import Brukerstotte from '../brukerstotte/Brukerstotte.js';
import VideoList from '../brukerstotte/VideoList.js';
import Startside from '../startside/Startside.js';
import Risikovurdering from '../risikovurdering/Risikovurdering.js';
import Kontakter from '../kontakter/Kontakter.js';
import Arkiv from '../arkiv/Arkiv.js';
import Snarveier from '../snarveier/Snarveier.js';
import Bilder from '../bilder/Bilder.js';
import Nyheter from '../nyheter/Nyheter.js';
import Innstillinger from '../Innstillinger/Instillinger.js';
import Handbok from '../handbok/Handbok.js';
import Aktiviteter from '../aktiviteter/Aktiviteter.js';
import Avviktiltak from '../avviktiltak/Avviktiltak.js';
import KontaktBoligbyggelaget from '../brukerstotte/kontakt-boligbyggelaget/KontaktBoligbyggelaget.js';
import OfteStilteSpoersmal from '../brukerstotte/ofte-stilte-sporsmal/OfteStilteSpoersmal.js';
import Profil from '../profil/Profil.js';
import Rutiner from '../handbok/rutiner/Rutiner';
import Skjema from '../handbok/skjema/Skjema';
import Fagvideoer from '../handbok/fagvideoer/Fagvideoer';
import Sjekklister from '../handbok/sjekklister/Sjekklister';
import MineFristerAktiviteter from '../aktiviteter/mine-frister/MineFrister';
import NyAktivitet from '../aktiviteter/ny-aktivitet/NyAktivitet';
import Avtaler from '../aktiviteter/avtaler/Avtaler';
import OversiktAktiviteter from '../aktiviteter/oversikt/Oversikt';
import OversiktAvviktiltak from '../avviktiltak/oversikt/Oversikt';
import MineFristerAvviktiltak from '../avviktiltak/mine-frister/MineFrister';
import NyttAvviktiltak from '../avviktiltak/nytt-avviktiltak/NyttAvviktiltak';
import RedigerNyRisikovurdering from '../../assets/img/icons/risikovurdering/rediger-ny-risikovurdering/RedigerNyRisikovurdering';
import SeRisikovurdering from '../../assets/img/icons/risikovurdering/se-risikovurdering/SeRisikovurdering';
import TidligereRevisjoner from '../../assets/img/icons/risikovurdering/tidligere-revisjoner/TidligereRevisjoner';
import Boligbyggelaget from '../kontakter/boligbyggelaget/Boligbyggelaget';
import Kontaktregister from '../kontakter/kontaktregister/Kontaktregister';
import MinKontaktinformasjon from '../kontakter/min-kontaktinformasjon/MinKontaktinformasjon';
import NyKontakt from '../kontakter/ny-kontakt/NyKontakt';
import ArkivSubPage from '../arkiv/arkiv/Arkiv';
import RedigerArkiv from '../arkiv/rediger-arkiv/RedigerArkiv';
import Soppelbotte from '../arkiv/soppelbotte/Soppelbotte';
import LeggTilFiler from '../arkiv/legg-til-filer/LeggTilFiler';
import Brukerregister from '../Innstillinger/brukerregister/Brukerregister';
import Innstillingvarsling from '../Innstillinger/innstillingvarsling/Innstillingvarsling';
import Loggvarsler from '../Innstillinger/loggvarsler/Loggvarsler';
import OmBoligselskapet from '../Innstillinger/om-boligselskapet/OmBoligselskapet';
import RedigerBilde from '../Innstillinger/rediger-bilde/RedigerBilde';
import RedigerRettighet from '../Innstillinger/rediger-rettighet/RedigerRettighet';
import RedigerStyreleder from '../Innstillinger/rediger-styreleder/RedigerStyreleder';
import App from "../../App.js";
import ProtectedRoute from "./ProtectedRoute.js";
import { useAuth } from "react-oidc-context";

const Routes = () => {

    const auth = useAuth();

    if(auth.isLoading) {
        return <></>
    }
    
    return (
        <Router>
        <RouterRoutes>
        <Route path="/" element={<App />}>
            <Route index element={auth.isAuthenticated ? <ProtectedRoute><Startside /></ProtectedRoute> : <Navigate replace to="/brukerstootte" />} />
            <Route path="haandbok" element={<ProtectedRoute><Handbok /></ProtectedRoute>} />
                <Route path="haandbok/rutiner" element={<ProtectedRoute><Rutiner /></ProtectedRoute>} />
                <Route path="haandbok/skjema" element={<ProtectedRoute><Skjema /></ProtectedRoute>} />
                <Route path="haandbok/fagvideoer" element={<ProtectedRoute><Fagvideoer /></ProtectedRoute>} />
                <Route path="haandbok/sjekklister" element={<ProtectedRoute><Sjekklister /></ProtectedRoute>} />
            <Route path="aktiviteter" element={<ProtectedRoute><Aktiviteter /></ProtectedRoute>} />
                <Route path="aktiviteter/avtaler" element={<ProtectedRoute><Avtaler /></ProtectedRoute>} />
                <Route path="aktiviteter/mine-frister" element={<ProtectedRoute><MineFristerAktiviteter /></ProtectedRoute>} />
                <Route path="aktiviteter/ny-aktivitet" element={<ProtectedRoute><NyAktivitet /></ProtectedRoute>} />
                <Route path="aktiviteter/oversikt" element={<ProtectedRoute><OversiktAktiviteter /></ProtectedRoute>} />
            <Route path="avviktiltak" element={<ProtectedRoute><Avviktiltak /></ProtectedRoute>} />
                <Route path="avviktiltak/oversikt" element={<ProtectedRoute><OversiktAvviktiltak /></ProtectedRoute>} />
                <Route path="avviktiltak/mine-frister" element={<ProtectedRoute><MineFristerAvviktiltak /></ProtectedRoute>} />
                <Route path="avviktiltak/nytt-avviktiltak" element={<ProtectedRoute><NyttAvviktiltak /></ProtectedRoute>} />
            <Route path="risikovurdering" element={<ProtectedRoute><Risikovurdering /></ProtectedRoute>} />
                <Route path="risikovurdering/rediger-ny-risikovurdering" element={<ProtectedRoute><RedigerNyRisikovurdering /></ProtectedRoute>} />
                <Route path="risikovurdering/se-risikovurdering" element={<ProtectedRoute><SeRisikovurdering /></ProtectedRoute>} />
                <Route path="risikovurdering/tidligere-revisjoner" element={<ProtectedRoute><TidligereRevisjoner /></ProtectedRoute>} />
            <Route path="kontakter" element={<ProtectedRoute><Kontakter /></ProtectedRoute>} />
                <Route path="kontakter/boligbyggelaget" element={<ProtectedRoute><Boligbyggelaget /></ProtectedRoute>} />
                <Route path="kontakter/kontaktregister" element={<ProtectedRoute><Kontaktregister /></ProtectedRoute>} />
                <Route path="kontakter/min-kontaktinformasjon" element={<ProtectedRoute><MinKontaktinformasjon /></ProtectedRoute>} />
                <Route path="kontakter/ny-kontakt" element={<ProtectedRoute><NyKontakt /></ProtectedRoute>} />
            <Route path="arkiv" element={<ProtectedRoute><Arkiv /></ProtectedRoute>} />
                <Route path="arkiv/arkiv" element={<ProtectedRoute><ArkivSubPage /></ProtectedRoute>} />
                <Route path="arkiv/legg-til-filer" element={<ProtectedRoute><LeggTilFiler /></ProtectedRoute>} />
                <Route path="arkiv/rediger-arkiv" element={<ProtectedRoute><RedigerArkiv /></ProtectedRoute>} />
                <Route path="arkiv/sooppelbootte" element={<ProtectedRoute><Soppelbotte /></ProtectedRoute>} />

            <Route path="snarveier" element={<ProtectedRoute><Snarveier /></ProtectedRoute>} />
            <Route path="bilder" element={<ProtectedRoute><Bilder /></ProtectedRoute>} />
            <Route path="nyheter" element={<ProtectedRoute><Nyheter /></ProtectedRoute>} />
            <Route index path="brukerstootte" element={<Brukerstotte />} />
                <Route path="brukerstootte/brukerveiledning" element={<VideoList videoType="brukerveiledning"/>} />
                <Route path="brukerstootte/kontakt-boligbyggelaget" element={<ProtectedRoute><KontaktBoligbyggelaget /></ProtectedRoute>} />
                <Route path="brukerstootte/ofte-stilte-spoorsmaal" element={<ProtectedRoute><OfteStilteSpoersmal /></ProtectedRoute>} />
                <Route path="brukerstootte/opplaeringsvideoer" element={<VideoList videoType="opplaeringsvideoer"/>} />
            <Route path="innstillinger" element={<ProtectedRoute><Innstillinger /></ProtectedRoute>} />
                <Route path="innstillinger/brukerregister" element={<ProtectedRoute><Brukerregister /></ProtectedRoute>} />
                <Route path="innstillinger/innstillingvarsling" element={<ProtectedRoute><Innstillingvarsling /></ProtectedRoute>} />
                <Route path="innstillinger/loggvarsler" element={<ProtectedRoute><Loggvarsler /></ProtectedRoute>} />
                <Route path="innstillinger/om-boligselskapet" element={<ProtectedRoute><OmBoligselskapet /></ProtectedRoute>} />
                <Route path="innstillinger/rediger-bilde" element={<ProtectedRoute><RedigerBilde /></ProtectedRoute>} />
                <Route path="innstillinger/rediger-rettighet" element={<ProtectedRoute><RedigerRettighet /></ProtectedRoute>} />
                <Route path="innstillinger/rediger-styreleder" element={<ProtectedRoute><RedigerStyreleder /></ProtectedRoute>} />
                <Route path="innstillinger/snarveier" element={<ProtectedRoute><Snarveier /></ProtectedRoute>} />

            <Route path="profil" element={<Profil />} />

            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <h1>Kunne ikke finne siden du leter etter..</h1>
                    </main>
                }
            />
        </Route>
        </RouterRoutes>
    </Router >
    )
}

export default Routes;