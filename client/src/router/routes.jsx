import React from 'react';
import FacePage from '../components/FacePage/index.jsx';
import SignInPage from '../components/Auth/SignInPage/index.jsx';
import SignUpPage from '../components/Auth/SignUpPage/index.jsx';

export const routes = [
    {
        path: '/',
        exact: true,
        component:FacePage
    },
    {
        path: '/sign-in',
        component: SignInPage
    },
    {
        path: '/sign-out',
        component: SignUpPage
    },
];