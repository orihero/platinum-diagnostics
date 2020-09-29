import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import img from '../../../assets/images/lab7.jpg'

import { arr1, arr2 } from './constants'

import styles from './index.module.scss'

const SpecimenCollection = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation find={true} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>
                        Specimen Collection
                    </h1>
                    <div className={styles.textBox}>
                        <h2>
                            What we need from you to provide high-quality results:
                        </h2>
                        {arr2.map((item, index) => (
                            <p key={index}>
                                {item}
                            </p>
                        ))}
                    </div>
                    <img src={img} alt='img'/>
                    <div className={styles.listBox}>
                        <h3>Common collecting errors to avoid:</h3>
                        {arr1.map((item, index) => (
                            <div
                                key={index} className={styles.listItem}
                            >
                                <div className={styles.listItemIcon} />
                                <div className={styles.listItemTextbox}>
                                    <p>
                                        <b>{item.title || ''}</b>
                                        {item.text || ''}
                                    </p>
                                    {item.children ? item.children.map((subItem, subIndex) => (
                                        <div key={subIndex} className={styles.subItem}>
                                            <div className={styles.subItemIcon} />
                                            <p className={styles.subItemText}>
                                                {subItem}
                                            </p>
                                        </div>        
                                    )) : null}
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

export default SpecimenCollection