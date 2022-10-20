import './sidebarmenu.css'

import React, { useContext } from 'react'
import { Context } from '../../App'
import MenuItem from './SidebarMenuItem'

import StartsideIcon from '../../assets/img/icons/menu/startside.svg'
import HandbokIcon from '../../assets/img/icons/menu/handbok.svg'
import AktiviteterIcon from '../../assets/img/icons/menu/aktiviteter.svg'
import AvviktiltakIcon from '../../assets/img/icons/menu/avviktiltak.svg'
import RisikovurderingIcon from '../../assets/img/icons/menu/risikovurdering.svg'
import KontakterIcon from '../../assets/img/icons/menu/kontakter.svg'
import ArkivIcon from '../../assets/img/icons/menu/arkiv.svg'

import SnarveierIcon from '../../assets/img/icons/menu/snarveier.svg'
import BilderIcon from '../../assets/img/icons/menu/bilder.svg'
import NyheterIcon from '../../assets/img/icons/menu/nyheter.svg'
import BrukerstotteIcon from '../../assets/img/icons/menu/brukerstotte.svg'
import InstillingerIcon from '../../assets/img/icons/menu/innstillinger.svg'

const SidebarMenu = ({ isMenuOpen }) => {
    const { isMobile } = useContext(Context)

    const menuItems = [
        {
            itemUrl: '/',
            itemImgUrl: StartsideIcon,
            title: 'Startside',
        },
        {
            itemUrl: '/haandbok',
            itemImgUrl: HandbokIcon,
            title: 'Håndbok',
        },
        {
            itemUrl: '/aktiviteter',
            itemImgUrl: AktiviteterIcon,
            title: 'Aktiviteter',
        },
        {
            itemUrl: '/avviktiltak',
            itemImgUrl: AvviktiltakIcon,
            title: 'Avvik/tiltak',
        },
        {
            itemUrl: '/risikovurdering',
            itemImgUrl: RisikovurderingIcon,
            title: 'Risikovurdering',
        },
        {
            itemUrl: '/kontakter',
            itemImgUrl: KontakterIcon,
            title: 'Kontakter',
        },
        {
            itemUrl: '/arkiv',
            itemImgUrl: ArkivIcon,
            title: 'Arkiv',
        },
    ]

    const navigationItems = [
        {
            itemUrl: '/snarveier',
            itemImgUrl: SnarveierIcon,
            title: 'Snarveier',
        },
        {
            itemUrl: '/bilder',
            itemImgUrl: BilderIcon,
            title: 'Bilder',
        },
        {
            itemUrl: '/nyheter',
            itemImgUrl: NyheterIcon,
            title: 'Nyheter',
        },
        {
            itemUrl: '/brukerstotte',
            itemImgUrl: BrukerstotteIcon,
            title: 'Brukerstøtte',
        },
        {
            itemUrl: '/innstillinger',
            itemImgUrl: InstillingerIcon,
            title: 'Innstillinger',
        },
    ]

    return (
        <>
            {!isMobile ? (
                <nav className="sidebarmenu">
                    {menuItems.map(({ itemImgUrl, itemUrl, title }) => (
                        <MenuItem
                            key={title}
                            itemImgUrl={itemImgUrl}
                            itemUrl={itemUrl}
                            title={title}
                            isMenuOpen={isMenuOpen}
                        />
                    ))}
                    <h4
                        className="sidebarmenu-title"
                        style={isMenuOpen ? {} : { display: 'none' }}
                    >
                        NAVIGASJON
                    </h4>
                    {navigationItems.map(({ itemImgUrl, itemUrl, title }) => (
                        <MenuItem
                            key={title}
                            itemImgUrl={itemImgUrl}
                            itemUrl={itemUrl}
                            title={title}
                            isMenuOpen={isMenuOpen}
                        />
                    ))}
                </nav>
            ) : (
                <nav
                    className="sidebarmenu mobile"
                    style={isMenuOpen ? {} : { display: 'none' }}
                >
                    {menuItems.map(({ itemImgUrl, itemUrl, title }) => (
                        <MenuItem
                            key={title}
                            itemImgUrl={itemImgUrl}
                            itemUrl={itemUrl}
                            title={title}
                            isMenuOpen={isMenuOpen}
                        />
                    ))}
                    <h4
                        className="sidebarmenu-title"
                        style={isMenuOpen ? {} : { display: 'none' }}
                    >
                        NAVIGASJON
                    </h4>
                    {navigationItems.map(({ itemImgUrl, itemUrl, title }) => (
                        <MenuItem
                            key={title}
                            itemImgUrl={itemImgUrl}
                            itemUrl={itemUrl}
                            title={title}
                            isMenuOpen={isMenuOpen}
                        />
                    ))}
                </nav>
            )}
        </>
    )
}

export default SidebarMenu
