import React from "react";
import {Route} from "react-router-dom";

export const RouteWithSubRoutes = (route) => (
    <Route
        exact={route.exact}
        path={route.path}
        render={props =>
            (
                <route.component
                    {...props}
                    routes={route.routes}
                />
            )
        }
    />
);
