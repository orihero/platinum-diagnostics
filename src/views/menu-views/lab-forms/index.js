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
                    <div className={styles.title}>
                        Lab Forms
                    </div>
                    <div className={styles.text}>
                        Page under Construction
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LabForms