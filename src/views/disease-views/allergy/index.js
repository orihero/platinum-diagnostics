import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import { typeTests } from './constants'

import styles from './index.module.scss'

const Allergy = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation find={true} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>
                        Allergy
                    </h1>
                    <div className={styles.box}>
                        <h2>Featured Tests:</h2>
                        {typeTests.map((item, index) => (
                            <div key={index} className={styles.item}>
                                <div className={styles.itemIcon} />
                                <div className={styles.itemText}>
                                    {item}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Allergy