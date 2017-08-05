import './css/Main.css';
import React, {Component} from 'react';
import {routes} from '../../router/routes.jsx';
import {RouteWithSubRoutes} from '../RouteWithSubRoutes/index.jsx';

class Main extends Component {
    render() {
        return (
            <section className="main">
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </section>
        );
    }
}

export default Main;