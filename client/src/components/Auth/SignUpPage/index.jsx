import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class SignUpPage extends Component {
    render() {
        return (
            <Card className="container">
                <form action="/">
                    <h2 className="card-heading">Sign Up</h2>

                    <div className="field-line">
                        <TextField
                            floatingLabelText="Name"
                            name="name"

                        />
                    </div>

                    <div className="field-line">
                        <TextField
                            floatingLabelText="Email"
                            name="email"
                        />
                    </div>

                    <div className="field-line">
                        <TextField
                            floatingLabelText="Password"
                            type="password"
                            name="password"
                        />
                    </div>

                    <div className="button-line">
                        <RaisedButton type="submit" label="Create New Account" primary/>
                    </div>

                    <CardText>Already have an account? <Link to={'/sign-in'}>Sing in</Link></CardText>
                </form>
            </Card>
        );
    }
}

export default SignUpPage;