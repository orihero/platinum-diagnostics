import React from 'react'
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom'

import ScrollToTopOnMount from '../components/scroll-to-top-on-mount'

import mainRoutes from './main-routes'

const AppRouter = () => {

    return(
        <Router>
			<Switch>
				{mainRoutes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						exact={route.exact}
						component={ScrollToTopOnMount(route.component)} />
				))}
			</Switch>
		</Router>
    )
}

export default AppRouter