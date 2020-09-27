import React from 'react'
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom'

import {
	// Main
    Home,
	About,
    Tests,
    FindLocation,
    NewsList,
    News,
	Contact,

	// Nav
    HowItWorks,
    LabTest,
	TestPricing,
	Faq,
    PrivacyPolicy,
	TermsConditions,
	Disclaimer,

	// Menu
	CreateAccount,
	PhysicianServices,
	Insurances,
	LabForms,
	SpecimenCollection,
	ShippingAndHandling,
	OrderSupplies
} from '../views'

const AppRouter = () => {

    return(
        <Router>
			<Switch>
				{/* Main */}
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/about' exact>
					<About />
				</Route>
				<Route path='/tests' exact>
					<Tests />
				</Route>
				<Route path='/find-location' exact>
					<FindLocation />
				</Route>
				<Route path='/news-list' exact>
					<NewsList />
				</Route>
				<Route path='/news' exact>
					<News />
				</Route>
				<Route path='/contact' exact>
					<Contact />
				</Route>
				
				{/* Nav */}
				<Route path='/how-it-works' exact>
					<HowItWorks />
				</Route>
				<Route path='/lab-test' exact>
					<LabTest />
				</Route>
				<Route path='/test-pricing' exact>
					<TestPricing />
				</Route>
				<Route path='/faq' exact>
					<Faq />
				</Route>
				<Route path='/privacy-policy' exact>
					<PrivacyPolicy />
				</Route>
				<Route path='/terms-conditions' exact>
					<TermsConditions />
				</Route>
				<Route path='/disclaimer' exact>
					<Disclaimer />
				</Route>

				{/* Menu */}
				<Route path='/create-account' exact>
					<CreateAccount />
				</Route>
				<Route path='/physician-services' exact>
					<PhysicianServices />
				</Route>
				<Route path='/insurances' exact>
					<Insurances />
				</Route>
				<Route path='/lab-forms' exact>
					<LabForms />
				</Route>
				<Route path='/specimen-collection' exact>
					<SpecimenCollection />
				</Route>
				<Route path='/shipping-and-handling' exact>
					<ShippingAndHandling />
				</Route>
				<Route path='/order-supplies' exact>
					<OrderSupplies />
				</Route>
			</Switch>
		</Router>
    )
}

export default AppRouter