import React from 'react';
import Header from './components/common/Header.js';
import Content from './components/brukerveiledning/Brukerveiledning.js';
import Footer from './components/common/Footer.js';

import { PAGE_BRUKERVEILEDNING } from './helpers/dictionary/pages.js';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            page: PAGE_BRUKERVEILEDNING
        }

        this.changePage = this.changePage.bind(this);
    }

    changePage(page) {
        this.setState({
            page: page
        })
    }
    render() {
        return (
            <div>
                <Header headertext={this.state.page.parenttitle} subheadertext={this.state.page.title}/>
                <Content changePage={this.changePage}/>
                <Footer />
            </div>
        );
    }
}

export default App;
