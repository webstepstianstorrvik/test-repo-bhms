import '../../assets/css/fonts.css';
import './videolist.css';
import React from 'react';
import HelpVideos from './HelpVideos.js';
import aktiviteterOgOppfolgning from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.jpg';
import avvikTiltak from './../../assets/img/brukerveiledning/avvik_og_tiltak.jpg';
import brukerRegistrer from './../../assets/img/brukerveiledning/bruker_registrer.jpg';
import flerbrukertilgang from './../../assets/img/brukerveiledning/flerbrukertilgang.jpg';
import hmshandbok from './../../assets/img/brukerveiledning/hmshandbok.jpg';
import kontaktOpprettRedigerSlett from './../../assets/img/brukerveiledning/kontaktOpprettRedigerSlett.jpg';
import passordEndre from './../../assets/img/brukerveiledning/passordEndre.jpg';
import risikovurderingBrukAvModul from './../../assets/img/brukerveiledning/risikovurderingBrukAvModul.jpg';
import startsida from './../../assets/img/brukerveiledning/startsida.jpg';
import arkivLaerAlt from './../../assets/img/brukerveiledning/arkiv_laer_alt.jpg';
import arkiv1Oversikt from './../../assets/img/brukerveiledning/arkiv_1_oversikt.jpg';
import arkiv2Filer from './../../assets/img/brukerveiledning/arkiv_2_filer.jpg';
import arkiv3Mapper from './../../assets/img/brukerveiledning/arkiv_3_mapper.jpg';
import demoErfaringBevar from './../../assets/img/brukerveiledning/demo_og_erfaring_bevar.jpg';
import demoErfaringLite from './../../assets/img/brukerveiledning/demo_og_erfaring_1.jpg';
import demoErfaringMellomstort from './../../assets/img/brukerveiledning/demo_og_erfaring_2.jpg';
import demoErfaringStort from './../../assets/img/brukerveiledning/demo_og_erfaring_3.jpg';
import styretsHmsAnsvar from './../../assets/img/fagvideoer/styretsHmsAnsvar.jpg';
import risikovurderingIBorettslagOgSameier from './../../assets/img/fagvideoer/risikovurderingIBorettslagOgSameier.jpg';
import byggherreforskriften from './../../assets/img/fagvideoer/byggherreforskriften.jpg';
import internkontrollForHMSIBorettslagOgSameier from './../../assets/img/fagvideoer/internkontrollForHMSIBorettslagOgSameier.jpg';
import { useSearchParams } from 'react-router-dom';

const VideoList = ({videoType}) => {
    const [searchParams] = useSearchParams();
    const showVideoTitle = searchParams.get("video")


    const findVideos = () => {

        const opplaeringvideoer = [{
            id: 1,
            category: "aktiviteter",
            videoUrl: "https://player.vimeo.com/video/516603780?h=dcb211b570&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Aktiviteter - Oppfølging",
            duration: 152,
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: aktiviteterOgOppfolgning,
            urlFriendlyName: "aktiviteter-og-oppfoelgning"
        },{
            id: 2,
            category: "avvik_tiltak",
            videoUrl: "https://player.vimeo.com/video/650247254?h=86b5e62798&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Avvik tiltak - Opprette og redigere",
            duration: 371,
            videoDurationText: "6:11 minutter",
            videoHeaderImageUrl: avvikTiltak,
            urlFriendlyName: "avvik-tiltak-opprett-og-rediger"
        },{
            id: 3,
            category: "brukerkonto",
            videoUrl: "https://player.vimeo.com/video/404549439?h=de4e471f99&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Bruker - Registrere ny",
            duration: 241,
            videoDurationText: "4:01 minutter",
            videoHeaderImageUrl: brukerRegistrer,
            urlFriendlyName: "bruker-registrere-ny"
        },{
            id: 4,
            category: "brukerkonto",
            videoUrl: "https://player.vimeo.com/video/368535704?h=9a80a41eca&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Flerbruker tilgang – Brukerveiledning",
            duration: 78,
            videoDurationText: "1:18 minutter",
            videoHeaderImageUrl: flerbrukertilgang,
            urlFriendlyName: "flerbrukertilgang-brukerveiledning"
        },{
            id: 5,
            category: "hms_handbok",
            videoUrl: "https://player.vimeo.com/video/404511470?h=eb4b5abc75&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "HMS-håndbok – Søk",
            duration: 71,
            videoDurationText: "1:11 minutter",
            videoHeaderImageUrl: hmshandbok,
            urlFriendlyName: "hmshandbok-sok"
        },{
            id: 6,
            category: "kontakt",
            videoUrl: "https://player.vimeo.com/video/404531408?h=e0da65d496&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Kontakt – Opprette, redigere og slette",
            duration: 176,
            videoDurationText: "2:56 minutter",
            videoHeaderImageUrl: kontaktOpprettRedigerSlett,
            urlFriendlyName: "kontakt-opprette-redigere-slette"
        },{
            id: 7,
            category: "brukerkonto",
            videoUrl: "https://player.vimeo.com/video/403658054?h=5683370a80&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Passord – Endre",
            duration: 50,
            videoDurationText: "0:50 minutter",
            videoHeaderImageUrl: passordEndre,
            urlFriendlyName: "passord-endre"
        },{
            id: 8,
            category: "risikovurdering",
            videoUrl: "https://player.vimeo.com/video/368537296?h=db6a2d64d7&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Risikovurdering – Bruk av modul",
            duration: 563,
            videoDurationText: "9:23 minutter",
            videoHeaderImageUrl: risikovurderingBrukAvModul,
            urlFriendlyName: "risikovurdering-bruk-av-modul"
        },{
            id: 9,
            category: "startside",
            videoUrl: "https://player.vimeo.com/video/368531527?h=0c8a5253d9&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Startsida – Icon",
            duration: 36,
            videoDurationText: "0:36 minutter",
            videoHeaderImageUrl: startsida,
            urlFriendlyName: "startsida-icon"
        },{
            id: 10,
            category: "arkiv",
            videoUrl: "https://player.vimeo.com/video/701550388?h=b25ce28457&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Arkiv – Lær alt om arkivet",
            duration: 1,
            videoDurationText: "2:24 minutter",
            videoHeaderImageUrl: arkivLaerAlt,
            urlFriendlyName: "arkiv-laer-alt-om-arkivet"
        },{
            id: 11,
            category: "arkiv",
            videoUrl: "https://player.vimeo.com/video/701183325?h=977f1fbe9b&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Arkiv Del 1 – En oversikt",
            duration: 159,
            videoDurationText: "2:39 minutter",
            videoHeaderImageUrl: arkiv1Oversikt,
            urlFriendlyName: "arkiv-1-oversikt"
        },{
            id: 12,
            category: "arkiv",
            videoUrl: "https://player.vimeo.com/video/701558271?h=1754321715&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Arkiv Del 2 – Filer",
            duration: 200,
            videoDurationText: "3:20 minutter",
            videoHeaderImageUrl: arkiv2Filer,
            urlFriendlyName: "arkiv-2-filer"
        },{
            id: 13,
            category: "arkiv",
            videoUrl: "https://player.vimeo.com/video/701571469?h=1ee86da71e&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Arkiv Del 3 – Mapper",
            duration: 172,
            videoDurationText: "2:52 minutter",
            videoHeaderImageUrl: arkiv3Mapper,
            urlFriendlyName: "arkiv-3-mapper"
        }
        ,{
            id: 14,
            category: "demo_og_erfaring",
            videoUrl: "https://player.vimeo.com/video/415894095?h=f3042dcdca&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Demo BevarHMS",
            duration: 112,
            videoDurationText: "1:52 minutter",
            videoHeaderImageUrl: demoErfaringBevar,
            urlFriendlyName: "demo-bevarhms"
        }
        ,{
            id: 15,
            category: "demo_og_erfaring",
            videoUrl: "https://player.vimeo.com/video/372569470?h=bdefac3a03&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Lite sameie",
            duration: 170,
            videoDurationText: "2:50 minutter",
            videoHeaderImageUrl: demoErfaringLite,
            urlFriendlyName: "demo-lite-sameie"
        }
        ,{
            id: 16,
            category: "demo_og_erfaring",
            videoUrl: "https://player.vimeo.com/video/383068108?h=437791110c&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Mellomstort borettslag",
            duration: 134,
            videoDurationText: "2:14 minutter",
            videoHeaderImageUrl: demoErfaringMellomstort,
            urlFriendlyName: "demo-mellomstort-borettslag"
        }
        ,{
            id: 17,
            category: "demo_og_erfaring",
            videoUrl: "https://player.vimeo.com/video/368741334?h=07300b5056&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Stort borettslag",
            duration: 178,
            videoDurationText: "2:58 minutter",
            videoHeaderImageUrl: demoErfaringStort,
            urlFriendlyName: "demo-stort-borettslag"
        }];

        const brukerveiledninger = [{
            id: 1,
            category: "fagvideo1",
            videoUrl: "https://player.vimeo.com/video/475461615?h=9e48c15ea9&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Internkontroll for HMS i borettslag og sameier",
            duration: 207,
            videoDurationText: "3:27 minutter",
            videoHeaderImageUrl: internkontrollForHMSIBorettslagOgSameier,
            urlFriendlyName: "internkontroll-hms-borettslag-sameier"
        },{
            id: 2,
            category: "fagvideo2",
            videoUrl: "https://player.vimeo.com/video/481628753?h=f44de17b59&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Styrets HMS-ansvar",
            duration: 154,
            videoDurationText: "2:34 minutter",
            videoHeaderImageUrl: styretsHmsAnsvar,
            urlFriendlyName: "styrets-hms-ansvar"
        },{
            id: 3,
            category: "fagvideo3",
            videoUrl: "https://player.vimeo.com/video/500798352?h=099b3450f3&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Risikovurdering i borettslag og sameier",
            duration: 324,
            videoDurationText: "5:24 minutter",
            videoHeaderImageUrl: risikovurderingIBorettslagOgSameier,
            urlFriendlyName: "risikovurdering-borettslag-sameier"
        },{
            id: 4,
            category: "fagvideo4",
            videoUrl: "https://player.vimeo.com/video/592706443?h=9f4ae2be12&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Byggherreforskriften",
            duration: 263,
            videoDurationText: "7:53 minutter",
            videoHeaderImageUrl: byggherreforskriften,
            urlFriendlyName: "byggherreforskriften"
        }];

        switch (videoType) {
            case "opplaeringsvideoer":
                return opplaeringvideoer;
            case "brukerveiledning":
                return brukerveiledninger;
            default:
                return opplaeringvideoer;
        }
    }

        return (
            <div className="container">
                <div className="brukerveiledning">
                    <div className="main-content">
                        <HelpVideos videoList={findVideos()} showVideoTitle={showVideoTitle}/>
                    </div>
                </div>
            </div>
        );
}

export default VideoList;
