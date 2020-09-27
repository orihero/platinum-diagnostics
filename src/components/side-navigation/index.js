import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

const SideNavigation = ({ current }) => {

    return(
        <div className={styles.cont}>
            <div className={styles.title}>
                Links
            </div>
            <ul>
                <Link to='/' className={styles.disableLink}>
                    <li className={`${current === 'title' ? styles.current : ''}`}>
                        Home
                    </li>
                </Link>
                <Link to='/about' className={styles.disableLink}>
                    <li className={`${current === 'about' ? styles.current : ''}`}>
                        About Us
                    </li>
                </Link>
                <Link to='/how-it-works' className={styles.disableLink}>
                    <li className={`${current === 'howItWorks' ? styles.current : ''}`}>
                        How it Works
                    </li>
                </Link>
                <Link to='/lab-test' className={styles.disableLink}>
                    <li className={`${current === 'labTest' ? styles.current : ''}`}>
                        Lab Test by State
                    </li>
                </Link>
                <Link to='/test-pricing' className={styles.disableLink}>
                    <li className={`${current === 'testPricing' ? styles.current : ''}`}>
                        Test & Pricing
                    </li>
                </Link>
                <Link to='/find-location' className={styles.disableLink}>
                    <li className={`${current === 'locations' ? styles.current : ''}`}>
                        Locations
                    </li>
                </Link>
                <Link to='/contact' className={styles.disableLink}>
                    <li className={`${current === 'contactInfo' ? styles.current : ''}`}>
                        Contact information
                    </li>
                </Link>
                <Link to='/faq' className={styles.disableLink}>
                    <li className={`${current === 'faq' ? styles.current : ''}`}>
                        FAQ's
                    </li>
                </Link>
                <Link to='/news-list' className={styles.disableLink}>
                    <li className={`${current === 'news' ? styles.current : ''}`}>
                        News
                    </li>
                </Link>
                <Link to='/privacy-policy' className={styles.disableLink}>
                    <li className={`${current === 'privacyPolicy' ? styles.current : ''}`}>
                        Privacy Policy
                    </li>
                </Link>
                <Link to='/terms-conditions' className={styles.disableLink}>
                    <li className={`${current === 'termsConditions' ? styles.current : ''}`}>
                        Terms & Conditions
                    </li>
                </Link>
                <Link to='/disclaimer' className={styles.disableLink}>
                    <li className={`${current === 'disclaimer' ? styles.current : ''}`}>
                        Disclaimer
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default SideNavigation