import React from 'react'

import { FaFax, FaEnvelope } from 'react-icons/fa'
import { MdPhone, MdLocationOn } from 'react-icons/md'

import logo from '../../assets/images/logo-footer.jpg'

import styles from './index.module.scss'

const Footer = () => {

    return(
        <div className={styles.footerCont}>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <img src={logo} alt="img"/>
                    <div className={styles.col1Row}>
                        <MdLocationOn className={styles.icon} />
                        <div className={styles.col1Text}>
                            1026 West Elizabeth Avenue, Unit D 4& 5 Linden NJ 07036
                        </div>
                    </div>
                    <div className={styles.col1Row}>
                        <MdPhone className={styles.icon} />
                        <div className={styles.col1Text}>
                            (201) 636-2705
                        </div>
                    </div>
                    <div className={styles.col1Row}>
                        <FaFax className={styles.icon} />
                        <div className={styles.col1Text}>
                            (201) 636-2708 (Fax)
                        </div>
                    </div>
                    <div className={styles.col1Row}>
                        <FaEnvelope className={styles.icon} />
                        <div className={styles.col1Text}>
                            customerservice@platinumdiagnosticlab.com
                        </div>
                    </div>
                </div>
                <div className={styles.col2}>
                    <h5>NAVIGATION LINKS</h5>
                    <div className={styles.col2Item}>
                        Home
                    </div>
                    <div className={styles.col2Item}>
                        About Us
                    </div>
                    <div className={styles.col2Item}>
                        How it Works
                    </div>
                    <div className={styles.col2Item}>
                        Lab Test by State
                    </div>
                    <div className={styles.col2Item}>
                        Test & Pricing
                    </div>
                    <div className={styles.col2Item}>
                        Locations
                    </div>
                    <div className={styles.col2Item}>
                        Contact Information
                    </div>
                    <div className={styles.col2Item}>
                        FAQ’s
                    </div>
                    <div className={styles.col2Item}>
                        News
                    </div>
                    <div className={styles.col2Item}>
                        Privacy Policy
                    </div>
                    <div className={styles.col2Item}>
                        Terms & Conditions
                    </div>
                    <div className={styles.col2Item}>
                        Disclaimer
                    </div>
                </div>
                <div className={styles.col3}>
                    <h5>POPULAR TESTS</h5>
                    <div className={styles.col3Item}>
                        Allergy
                    </div>
                    <div className={styles.col3Item}>
                        Drug Screen 10 Panel
                    </div>
                    <div className={styles.col3Item}>
                        CPW
                    </div>
                    <div className={styles.col3Item}>
                        Lipid Profile
                    </div>
                    <div className={styles.col3Item}>
                        Vitamin D
                    </div>
                    <div className={styles.col3Item}>
                        PSA
                    </div>
                    <div className={styles.col3Item}>
                        Cardio Plus
                    </div>
                    <div className={styles.col3Item}>
                        Hemoglobin A1c
                    </div>
                </div>
            </div>
            <div className={styles.copyRightText}>
                Copyright 2020 Platinum Diagnostic Lab. All rights reserved
            </div>
        </div>
    )
}

export default Footer