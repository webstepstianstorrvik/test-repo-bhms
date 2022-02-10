import React from 'react';
import MenuItem from './SidebarMenuItem';
import './sidebarmenu.css';
class SidebarMenu extends React.Component {

    constructor() {
        super();
    }
    render() {
        const menuItems = this.props.items.map((item, i) => {
            return (
                <MenuItem key={i} itemImgUrl={item.itemImgUrl} itemUrl={item.itemUrl} title={item.title} />
            )
        });

            return (
            <div className="sidebarmenu">
                { menuItems }
            </div>
        );
    }
}

export default SidebarMenu;
