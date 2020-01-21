import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routeStack from './routes'

function RenderRouteStack() {
  return routeStack.map((route, idx) => {
    return (
      <Route key={idx} exact={route.exact} path={route.path}>
        {route.component}
      </Route>
    )
  })
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense fallback={<div>Loading...</div>}>
          <RenderRouteStack />
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('notes'))
