import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import DevTools from 'containers/DevTools'
import App from 'containers/App'
import { OnboardingPage, OnboardingIntro, OnboardingState,
    OnboardingAction, OnboardingReducer } from 'components/Onboarding/index'
import SettingsPage from 'components/Settings/SettingsPage'

export default class Root extends Component {
    render() {
        const store = this.props.store;
        const history = syncHistoryWithStore(browserHistory, store);

        return (
            <Provider store={store} >
                <div>
                    <Router history={history}>
                        <Route path='/' component={App}>
                            <Route path='onboarding/' component={OnboardingPage}>
                                <Route path='intro' component={OnboardingIntro} />
                                <Route path='state' component={OnboardingState} />
                                <Route path='action' component={OnboardingAction} />
                                <Route path='reducer' component={OnboardingReducer} />
                            </Route>
                            <Route path='settings' component={SettingsPage}/>
                        </Route>
                    </Router>
                </div>
            </Provider>
        )
    }
}