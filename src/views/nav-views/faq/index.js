import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import styles from './index.module.scss'

const Faq = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation find={true} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <div className={styles.title}>
                        Faq
                    </div>
                    <div className={styles.text}>
                        Page under Construction
                    </div>
                </div>
            </div>
            <Footer current={'faq'} />
        </div>
    )
}

export default Faq