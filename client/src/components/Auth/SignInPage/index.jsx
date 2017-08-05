import {Link} from 'react-router';
import {Card} from 'material-ui/Card';
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import xhr from '../../../helpers/xhr/index.js';
import RaisedButton from 'material-ui/RaisedButton';

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeEmail(e) {
        let email = e.currentTarget.value;
        this.setState({email});
    }

    handleChangePassword(e) {
        let password = e.currentTarget.value;
        this.setState({password});
    }

    handleSubmit(e) {
        e.preventDefault();

        let async = true,
            method = 'POST',
            url = '/auth/sign-in',
            data = `email=${this.state.email}&password=${this.state.password}`;

        xhr(url, method, data, async)
            .then(response => {
                console.log('dfsdf', response);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <Card className="container">
                <form action="/">
                    <h2 className="card-heading">Sing In</h2>
                    <div className="field-line">
                        <TextField
                            floatingLabelText="Email"
                            type="email"
                            name="email"
                            onChange={this.handleChangeEmail}
                        />
                    </div>
                    <div className="field-line">
                        <TextField
                            floatingLabelText="Password"
                            type="password"
                            name="password"
                            onChange={this.handleChangePassword}
                        />
                    </div>
                    <div className="button-line">
                        <RaisedButton type="submit" onClick={this.handleSubmit} label="Log in" primary/>
                    </div>
                </form>
            </Card>
        );
    }
}

export default SignInPage;