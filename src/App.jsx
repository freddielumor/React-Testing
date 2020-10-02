import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import { AppHeader } from './components/Header/Header'
import { AppNav } from './components/Nav/Nav'

import Rockets from './components/Rockets/Rockets'
import RocketItem from './components/RocketItem/RocketItem'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './styles/base/index.scss'

const App = () => (
  <Provider store={store}>
    <div className="app">
      <AppHeader>
        <AppNav />
      </AppHeader>

      <main>
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>

          <Route exact path="/rockets/:rocket_id">
            <RocketItem />
          </Route>

          <Route path="*" exact>
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </div>
  </Provider>
)

export default App
