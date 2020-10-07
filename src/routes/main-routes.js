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
	OrderSupplies,

	// Disease
	Allergy,
	InfectiousDeseases,
	Diabets,
	GeneralHealth,
	PainManagement,
	Pediatrics,
	Oncology,
	Cardiovascular,
} from '../views'

import ROUTES from './routes'

const mainRoutes = [
    // Main
    { path: ROUTES.HOME, component: Home, exact: true },
    { path: ROUTES.ABOUT, component: About, exact: true },
    { path: ROUTES.TESTS, component: Tests, exact: true },
    { path: ROUTES.FIND_LOCATION, component: FindLocation, exact: true },
    { path: ROUTES.NEWS_LIST, component: NewsList, exact: true },
    { path: ROUTES.NEWS, component: News, exact: true },
    { path: ROUTES.CONTACT, component: Contact, exact: true },

    // Nav
    { path: ROUTES.HOW_IT_WORKS, component: HowItWorks, exact: true },
    { path: ROUTES.LAB_TEST, component: LabTest, exact: true },
    { path: ROUTES.TEST_PRICING, component: TestPricing, exact: true },
    { path: ROUTES.FAQ, component: Faq, exact: true },
    { path: ROUTES.PRIVACY_POLICY, component: PrivacyPolicy, exact: true },
    { path: ROUTES.TERMS_CONDITIONS, component: TermsConditions, exact: true },
    { path: ROUTES.DISCLAIMER, component: Disclaimer, exact: true },

    // Menu
    { path: ROUTES.CREATE_ACCOUNT, component: CreateAccount, exact: true },
    { path: ROUTES.PHYSICIAN_SERVICES, component: PhysicianServices, exact: true },
    { path: ROUTES.INSURANCES, component: Insurances, exact: true },
    { path: ROUTES.LAB_FORMS, component: LabForms, exact: true },
    { path: ROUTES.SPECIMEN_COLLECTION, component: SpecimenCollection, exact: true },
    { path: ROUTES.SHIPPING_AND_HANDLING, component: ShippingAndHandling, exact: true },
    { path: ROUTES.ORDER_SUPPLIES, component: OrderSupplies, exact: true },

    // Desease
    { path: ROUTES.ALLERGY, component: Allergy, exact: true },
    { path: ROUTES.INFECTIOUES_DESEASES, component: InfectiousDeseases, exact: true },
    { path: ROUTES.DIABETS, component: Diabets, exact: true },
    { path: ROUTES.GENERAL_HEALTH, component: GeneralHealth, exact: true },
    { path: ROUTES.PAIN_MANAGEMENT, component: PainManagement, exact: true },
    { path: ROUTES.PEDIATRICS, component: Pediatrics, exact: true },
    { path: ROUTES.ONCOLOGY, component: Oncology, exact: true },
    { path: ROUTES.CARDIOVASCULAR, component: Cardiovascular, exact: true },
]

export default mainRoutes