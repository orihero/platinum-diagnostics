import React from 'react'
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom'

import Home from '../views/home'
import About from '../views/about'
import Tests from '../views/tests'
import NewsList from '../views/news-list'
import Contact from '../views/contact'
import News from '../views/news'
import FindLocation from '../views/find-location'

const AppRouter = () => {

    return(
        <Router>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/about' exact>
					<About />
				</Route>
				<Route path='/tests' exact>
					<Tests />
				</Route>
				<Route path='/news-list' exact>
					<NewsList />
				</Route>
				<Route path='/contact' exact>
					<Contact />
				</Route>
				<Route path='/news' exact>
					<News />
				</Route>
				<Route path='/find-location' exact>
					<FindLocation />
				</Route>
			</Switch>
		</Router>
    )
}

export default AppRouter