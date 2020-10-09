import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import { arr1, arr2 } from './constants'

import styles from './index.module.scss'

const Insurances = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>
                        Insurances
                    </h1>
                    <div className={styles.flexBox}>
                        <div className={styles.col}>
                            {arr1.map((item, index) => (
                                <div key={index} className={styles.box}>
                                    <h2>{item.title}</h2>
                                    {item.items.map((el, ind) => (
                                        <div
                                            key={ind}
                                            className={styles.item}
                                            style={!ind ? {marginTop: '5px'} : null}
                                        >
                                            <div className={styles.itemIcon} />
                                            <div className={styles.itemText}>
                                                {typeof el === "string" ? (
                                                    <p>{el}</p>
                                                ) : (
                                                    <>
                                                        <p>{el.title}</p>
                                                        {el.items.map((subItem, subIndex) => (
                                                            <div key={subIndex} className={styles.subItem}>
                                                                <div className={styles.subItemIcon} />
                                                                <div className={styles.subItemText}>
                                                                    {subItem}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </>    
                                                )}
                                            </div>
                                        </div>    
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div
                            className={styles.col}
                            // style={{marginLeft: '20px'}}
                        >
                            {arr2.map((item, index) => (
                                <div key={index} className={styles.box}>
                                    <h2>{item.title}</h2>
                                    {item.items.map((el, ind) => (
                                        <div
                                            key={ind}
                                            className={styles.item}
                                            style={!ind ? {marginTop: '5px'} : null}
                                        >
                                            <div className={styles.itemIcon} />
                                            <div className={styles.itemText}>
                                                {typeof el === "string" ? (
                                                    <p>{el}</p>
                                                ) : (
                                                    <>
                                                        <p>{el.title}</p>
                                                        {el.items.map((subItem, subIndex) => (
                                                            <div key={subIndex} className={styles.subItem}>
                                                                <div className={styles.subItemIcon} />
                                                                <div className={styles.subItemText}>
                                                                    {subItem}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </>    
                                                )}
                                            </div>
                                        </div>    
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Insurances