import React from 'react'

import styles from './index.module.scss'

const SideNavigation = ({ current }) => {

    return(
        <div className={styles.cont}>
            <div className={styles.title}>
                Links
            </div>
            <ul>
                <li className={`${current === 'title' ? styles.current : ''}`}>
                    Home
                </li>
                <li className={`${current === 'about' ? styles.current : ''}`}>
                    About Us
                </li>
                <li className={`${current === 'howItWorks' ? styles.current : ''}`}>
                    How it Works
                </li>
                <li className={`${current === 'labTest' ? styles.current : ''}`}>
                    Lab Test by State
                </li>
                <li className={`${current === 'testPricing' ? styles.current : ''}`}>
                    Test & Pricing
                </li>
                <li className={`${current === 'locations' ? styles.current : ''}`}>
                    Locations
                </li>
                <li className={`${current === 'contactInfo' ? styles.current : ''}`}>
                    Contact information
                </li>
                <li className={`${current === 'faq' ? styles.current : ''}`}>
                    FAQ's
                </li>
                <li className={`${current === 'news' ? styles.current : ''}`}>
                    News
                </li>
                <li className={`${current === 'privacyPolicy' ? styles.current : ''}`}>
                    Privacy Policy
                </li>
                <li className={`${current === 'termsConditions' ? styles.current : ''}`}>
                    Terms & Conditions
                </li>
                <li className={`${current === 'disclaimer' ? styles.current : ''}`}>
                    Disclaimer
                </li>
            </ul>
        </div>
    )
}

export default SideNavigation