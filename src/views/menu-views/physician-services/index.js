import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import img from '../../../assets/images/lab6.jpg'

import styles from './index.module.scss'

const PhysicianServices = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation find={true} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>Physician Services</h1>
                    <div className={styles.box}>
                        <h2>Get Started with Us:</h2>
                        <p>
                            If you're interested in becoming a Platinum's customer, initiate a new account or request a visit to your office by one of our representatives to discuss our services, get started here.
                        </p>
                        <h3>Test Categories</h3>
                        <div className={styles.flexBox}>
                            <div className={styles.col}>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Allergy</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Cardiology</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Chemistry</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Coagulation</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Diagnostic Immunology</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Endocrinology</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Gastroenterology</em></b>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Hematology</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Microbiology</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Infectious Diseases</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Obstetrics/Gynecology</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Oncology</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Pain Management</em></b>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.itemIcon} />
                                    <div className={styles.itemText}>
                                        <b><em>Urology</em></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={img} alt="img"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PhysicianServices