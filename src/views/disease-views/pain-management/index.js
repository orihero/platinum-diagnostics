import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import { typeTests } from './constants'

import styles from './index.module.scss'

const PainManagement = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation find={true} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>
                        Pain Management
                    </h1>
                    <div className={styles.box}>
                        {typeTests.map((item, index) => (
                            <>
                                <h2>{item.title}</h2>
                                {item.items.map((subItem, subIndex) => (
                                    <div key={subIndex} className={styles.item}>
                                        <div className={styles.itemIcon} />
                                        <div className={styles.itemText}>
                                            {subItem}
                                        </div>
                                    </div>        
                                ))}
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PainManagement