import React from 'react';
import Header from './components/common/Header.js';
import Content from './components/brukerveiledning/Brukerveiledning.js';
import Footer from './components/common/Footer.js';
import {PAGE_BRUKERVEILEDNING, PAGE_FAGVIDEOER} from './helpers/dictionary/pages.js';

class App extends React.Component {

    constructor() {
        super();

        this.findPage = this.findPage.bind(this);
    }

    findPage() {
        const page = this.props.page;
        switch(page) {
            case 'fagvideoer':
                return PAGE_FAGVIDEOER;
            case 'opplaering':
            default:
                return PAGE_BRUKERVEILEDNING;
        }
    }
    render() {
        const page = this.findPage();
        return (
            <div>
                <Header headertext={page.parenttitle} subheadertext={page.title}/>
                <Content page={page} />
                <Footer />
            </div>
        );
    }
}

export default App;
