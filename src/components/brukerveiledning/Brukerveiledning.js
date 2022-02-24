import '../../assets/css/fonts.css';
import './brukerveiledning.css';
import React from 'react';
import HelpVideos from './HelpVideos.js';
import Subheader from './../common/Subheader.js';
import aktiviteterOgOppfolgning from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.jpg';
import avvikTiltak from './../../assets/img/brukerveiledning/avvik_og_tiltak.jpg';
import brukerRegistrer from './../../assets/img/brukerveiledning/bruker_registrer.jpg';
import flerbrukertilgang from './../../assets/img/brukerveiledning/flerbrukertilgang.jpg';
import hmshandbok from './../../assets/img/brukerveiledning/hmshandbok.jpg';
import kontaktOpprettRedigerSlett from './../../assets/img/brukerveiledning/kontaktOpprettRedigerSlett.jpg';
import passordEndre from './../../assets/img/brukerveiledning/passordEndre.jpg';
import risikovurderingBrukAvModul from './../../assets/img/brukerveiledning/risikovurderingBrukAvModul.jpg';
import startsida from './../../assets/img/brukerveiledning/startsida.jpg';
import arligGjennomgang from './../../assets/img/brukerveiledning/arligGjennomgang.png';
import styretsHmsAnsvar from './../../assets/img/fagvideoer/styretsHmsAnsvar.jpg';
import risikovurderingIBorettslagOgSameier from './../../assets/img/fagvideoer/risikovurderingIBorettslagOgSameier.jpg';
import byggherreforskriften from './../../assets/img/fagvideoer/byggherreforskriften.jpg';
import internkontrollForHMSIBorettslagOgSameier from './../../assets/img/fagvideoer/internkontrollForHMSIBorettslagOgSameier.jpg';

import SidebarMenu from './../menu/SidebarMenu.js';
import { ICONS_MENU_FAGVIDEOER, ICONS_MENU_OPPLAERING } from './../../assets/img/image_dictionary.js';

class Content extends React.Component {

    findVideos() {

        const opplaeringvideoer = [{
            videoUrl: "https://player.vimeo.com/video/516603780?h=dcb211b570&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Aktiviteter - Oppfølging",
            duration: 152,
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: aktiviteterOgOppfolgning
        },{
            videoUrl: "https://player.vimeo.com/video/650247254?h=86b5e62798&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Avvik tiltak - Opprette og redigere",
            duration: 371,
            videoDurationText: "6:11 minutter",
            videoHeaderImageUrl: avvikTiltak
        },{
            videoUrl: "https://player.vimeo.com/video/404549439?h=de4e471f99&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Bruker - Registrere ny",
            duration: 241,
            videoDurationText: "4:01 minutter",
            videoHeaderImageUrl: brukerRegistrer
        },{
            videoUrl: "https://player.vimeo.com/video/368535704?h=9a80a41eca&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Flerbruker tilgang – Brukerveiledning",
            duration: 78,
            videoDurationText: "1:18 minutter",
            videoHeaderImageUrl: flerbrukertilgang
        },{
            videoUrl: "https://player.vimeo.com/video/404511470?h=eb4b5abc75&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "HMS-håndbok – Søk",
            duration: 71,
            videoDurationText: "1:11 minutter",
            videoHeaderImageUrl: hmshandbok
        },{
            videoUrl: "https://player.vimeo.com/video/404531408?h=e0da65d496&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Kontakt – Opprette, redigere og slette",
            duration: 176,
            videoDurationText: "2:56 minutter",
            videoHeaderImageUrl: kontaktOpprettRedigerSlett
        },{
            videoUrl: "https://player.vimeo.com/video/403658054?h=5683370a80&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Passord – Endre",
            duration: 50,
            videoDurationText: "0:50 minutter",
            videoHeaderImageUrl: passordEndre
        },{
            videoUrl: "https://player.vimeo.com/video/368537296?h=db6a2d64d7&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Risikovurdering – Bruk av modul",
            duration: 563,
            videoDurationText: "9:23 minutter",
            videoHeaderImageUrl: risikovurderingBrukAvModul
        },{
            videoUrl: "https://player.vimeo.com/video/368531527?h=0c8a5253d9&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Startsida – Icon",
            duration: 36,
            videoDurationText: "0:36 minutter",
            videoHeaderImageUrl: startsida
        },{
            videoUrl: "https://player.vimeo.com/video/667225111?h=763b6d58d2&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Årlig gjennomgang – Kopiere til arkiv",
            duration: 144,
            videoDurationText: "2:24 minutter",
            videoHeaderImageUrl: arligGjennomgang
        }];

        const fagvideoer = [{
            videoUrl: "https://player.vimeo.com/video/475461615?h=9e48c15ea9&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Internkontroll for HMS i borettslag og sameier",
            duration: 207,
            videoDurationText: "3:27 minutter",
            videoHeaderImageUrl: internkontrollForHMSIBorettslagOgSameier
        },{
            videoUrl: "https://player.vimeo.com/video/481628753?h=f44de17b59&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Styrets HMS-ansvar",
            duration: 154,
            videoDurationText: "2:34 minutter",
            videoHeaderImageUrl: styretsHmsAnsvar
        },{
            videoUrl: "https://player.vimeo.com/video/500798352?h=099b3450f3&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Risikovurdering i borettslag og sameier",
            duration: 324,
            videoDurationText: "5:24 minutter",
            videoHeaderImageUrl: risikovurderingIBorettslagOgSameier
        },{
            videoUrl: "https://player.vimeo.com/video/592706443?h=9f4ae2be12&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Byggherreforskriften",
            duration: 263,
            videoDurationText: "7:53 minutter",
            videoHeaderImageUrl: byggherreforskriften
        }];

        switch (this.props.page.id) {
            case 1:
                return opplaeringvideoer;
            case 2:
                return fagvideoer;
            default:
                return opplaeringvideoer;
        }
    }
    render() {
        const menuItems = [
            {
                itemUrl: '/fagvideoer',
                itemImgUrl: ICONS_MENU_FAGVIDEOER,
                title: 'Fagvideoer'
            },
            {
                itemUrl: '/opplaering',
                itemImgUrl: ICONS_MENU_OPPLAERING,
                title: 'Opplæring'
            },
        ]

        let videoer = this.findVideos();

        return (
            <div className="container">
                <div className="content">
                    <div className="brukerveiledning site-content">
                        <SidebarMenu items={menuItems}/>
                        <div className="main-content">
                            <Subheader title={this.props.page.title}/>
                            <HelpVideos videoList={videoer}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
