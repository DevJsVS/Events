import React, {PureComponent} from 'react';
import {Card, CardTitle} from 'material-ui/Card';

class Footer extends PureComponent {
    render() {
        return (
            <Card className="container">
                <CardTitle title="React Application" subtitle="This is the home page."/>
            </Card>
        );
    }
}

export default Footer;


