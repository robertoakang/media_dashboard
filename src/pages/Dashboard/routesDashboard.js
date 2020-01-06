import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DashboardContent from './DashboardContent';
import ScreenConfig from './ScreenConfig';
import MediaRegistration from './MediaRegistration';
import BackgroundRegistration from './BackgroundRegistration';
import ChangePassword from './ChangePassword';
import Logout from './Logout';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>                
                <Route path="/dashboard" exact component={DashboardContent} />
                <Route path="/dashboard/screen-configuration" exact component={ScreenConfig} />
                <Route path="/dashboard/media-registration" exact component={MediaRegistration} />
                <Route path="/dashboard/background-registration" exact component={BackgroundRegistration} />
                <Route path="/dashboard/change-password" exact component={ChangePassword} />
                <Route path="/dashboard/logout" exact component={Logout} />
            </Switch>
        </BrowserRouter>
    );
};