import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import styles from './index.module.scss'

const FindLocation = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation current={'find-location'} find={true}/>
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <div className={styles.title}>
                        Сreate An Account
                    </div>
                    <div className={styles.info}>
                        New Jersey
                    </div>
                </div>
            </div>
            <Footer current={'find-location'} />
        </div>
    )
}

export default FindLocation