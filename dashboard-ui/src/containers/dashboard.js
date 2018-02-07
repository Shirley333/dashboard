import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../store/dashboardStore';
import DashboardComponent from '../components/dashboardComponent';

render(
    <Provider store={configureStore()}>
        <DashboardComponent/>
    </Provider>,
    document.getElementById('app')
)