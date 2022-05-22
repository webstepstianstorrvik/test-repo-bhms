import React from 'react';
import Header from './components/common/Header.js';
import Login from './components/login/Login.js';
import Content from './components/brukerveiledning/Brukerveiledning.js';
import Footer from './components/common/Footer.js';
import { loginPage } from './helpers/featuretoggle/feature-toggles';
import {PAGE_BRUKERVEILEDNING, PAGE_FAGVIDEOER} from './helpers/dictionary/pages.js';
import './assets/css/app.css';

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

    renderIfLoggedIn(page, videoTitle) {
        if (loginPage.active) {
            let isLoggedIn = false;
            if (isLoggedIn) {
                return (
                    <Content page={page} showVideoTitle={videoTitle}/>
                );
            } else {
                return (
                    <Login />
                )
            }
        } else {
            return (
                <Content page={page} showVideoTitle={videoTitle}/>
            );
        }

    }
    render() {
        const page = this.findPage();
        const videoTitle = this.props.showVideoTitle;

        return (
            <div>
                <Header headertext={page.parenttitle} subheadertext={page.title}/>
                { this.renderIfLoggedIn(page, videoTitle) }
                <Footer />
            </div>
        );
    }
}

export default App;
