import '../../assets/css/fonts.css';
import './brukerveiledning.css';
import React from 'react';
import HelpVideos from './HelpVideos.js';
import aktiviteterOgOppfolgning from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.png';
import avvikTiltak from './../../assets/img/brukerveiledning/avvik_og_tiltak.png';
import brukerRegistrer from './../../assets/img/brukerveiledning/bruker_registrer.png';
import flerbrukerTilgang from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.png';
import hmshandbok from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.png';
import kontaktOpprettRedigerSlett from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.png';
import passordEndre from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.png';
import risikovurderingBrukAvModul from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.png';
import startsidaIcon from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.png';
import arligGjennomgang from './../../assets/img/brukerveiledning/aktiviteter_og_oppfolging.png';
import SidebarMenu from './../menu/SidebarMenu.js';
import { ICONS_MENU_FAGVIDEOER, ICONS_MENU_OPPLAERING } from './../../assets/img/image_dictionary.js';

class Content extends React.Component {
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
        const videos = [{
            videoUrl: "https://player.vimeo.com/video/516603780?h=dcb211b570&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Aktiviteter - Oppfølging",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: aktiviteterOgOppfolgning
        },{
            videoUrl: "https://player.vimeo.com/video/650247254?h=86b5e62798&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Avvik tiltak - Opprette og redigere",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: avvikTiltak
        },{
            videoUrl: "https://player.vimeo.com/video/404549439?h=de4e471f99&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Bruker - Registrere ny",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: brukerRegistrer
        },{
            videoUrl: "https://player.vimeo.com/video/368535704?h=9a80a41eca&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Flerbruker tilgang – Brukerveiledning",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: flerbrukerTilgang
        },{
            videoUrl: "https://player.vimeo.com/video/404511470?h=eb4b5abc75&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "HMS-håndbok – Søk",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: hmshandbok
        },{
            videoUrl: "https://player.vimeo.com/video/404531408?h=e0da65d496&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Kontakt – Opprette, redigere og slette",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: kontaktOpprettRedigerSlett
        },{
            videoUrl: "https://player.vimeo.com/video/403658054?h=5683370a80&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Passord – Endre",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: passordEndre
        },{
            videoUrl: "https://player.vimeo.com/video/368537296?h=db6a2d64d7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Risikovurdering – Bruk av modul",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: risikovurderingBrukAvModul
        },{
            videoUrl: "https://player.vimeo.com/video/368531527?h=0c8a5253d9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Startsida – Icon",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: startsidaIcon
        },{
            videoUrl: "https://player.vimeo.com/video/667225111?h=763b6d58d2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            videoTitle: "Årlig gjennomgang – Kopiere til arkiv",
            videoDurationText: "2:32 minutter",
            videoHeaderImageUrl: arligGjennomgang
        }];
        return (
            <div className="brukerveiledning">
                <SidebarMenu items={menuItems}/>
                <div className="container">
                    <div className="content">
                        <HelpVideos videoList={videos}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
