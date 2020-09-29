import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import styles from './index.module.scss'

const LabForms = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation find={true} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>
                        Lab Forms
                    </h1>
                    <div className={styles.box}>
                        <h2>
                            Every lab order requires a test requisition form
                        </h2>
                        <p>
                            When you receive a specimen collection kit from Platinum Diagnostic Lab, a <h3>Test Requisition</h3> Form is included. Upon sending a specimen for analysis, you must send a completed test requisition form with the specimen. On this form you need to indicate which test(s) should be performed, as well as patient information, physician information, payment method and insurance data.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p>
                            Download a blank or custom test requisition form below. Either can be returned with a lab testing order.
                        </p>
                    </div>
                    <div className={styles.itemBox}>
                        <div className={styles.item}>
                            <div className={styles.itemIcon} />
                            <div className={styles.itemText}>
                                Test Requisition Form
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemIcon} />
                            <div className={styles.itemText}>
                                Custom Test Requisition Form
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LabForms