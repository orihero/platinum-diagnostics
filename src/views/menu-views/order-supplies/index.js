import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import styles from './index.module.scss'

const OrderSupplies = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation find={true} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>Order Supplies</h1>
                    <div className={styles.box}>
                        <h2>There are 3 ways to order supplies:</h2>
                        <div className={styles.itemBox}>
                            <div className={styles.item}>
                                <div className={styles.itemIcon} />
                                <div className={styles.itemText}>
                                    Print out the <span>Supplies Request Form</span>. Please fax completed forms to (201) 460-0704..
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemIcon} />
                                <div className={styles.itemText}>
                                    Email a PDF file of a completed <span>Supplies Request Form</span> to [email here].
                                </div>
                            </div>
                        </div>
                        <p>
                            Platinum Diagnostic Lab will only supply items that are permitted in accordance with the laws of your jurisdiction. Laws may vary from state to state.
                        </p>
                        <p>
                            For questions regarding supplies, please contact our supply department at (201) 460-0704.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderSupplies