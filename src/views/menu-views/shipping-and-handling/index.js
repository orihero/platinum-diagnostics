import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import styles from './index.module.scss'

const ShippingAndHandling = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation find={true} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>
                        Shipping and Handling
                    </h1>
                    <div className={styles.box}>
                        <p>
                            To coordinate with your practice’s needs, Platinum Diagnostic Lab uses an advanced information system to schedule and track specimen pickup and delivery, accommodating virtually any pickup time based on your availability and convenience.
                        </p>
                        <p>
                            For urgent testing needs, Platinum Diagnostic Lab offers special pickups.
                        </p>
                        <p>
                            No additional payment is required for shipping and handling. Laboratory test costs include pickup, delivery and handling.
                        </p>
                    </div>
                    <div className={styles.text}>
                        For your convenience and to insure the integrity of collected specimens, Platinum Diagnostic Lab operates its own delivery system in New Jersey. Platinum Diagnostic Lab is contracted with an independent courier company. FedEx is occasionally used to ship lab test orders.
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ShippingAndHandling