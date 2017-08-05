import './css/Header.css';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Login extends Component {
    render() {
        return (
            <FlatButton {...this.props} label="Login"/>
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <Link to="sign-in"><MenuItem primaryText="Sign in"/></Link>
        <Link to="sign-out"><MenuItem primaryText="Sign out"/></Link>
        <MenuItem primaryText="Help"/>
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: true
        }
    }

    render() {
        return (
            <header className="header">
                <AppBar
                    title="Events"
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                    showMenuIconButton={false}
                />
            </header>
        );
    }
}

export default Header;
