import Main from '../Main/index.jsx';
import React, {Component} from 'react';
import Footer from '../Footer/index.jsx';
import Header from '../Header/index.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <section className="container-fluid">
                        <Header/>
                        <Main/>
                        <Footer/>
                    </section>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;