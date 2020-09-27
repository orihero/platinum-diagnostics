import React from 'react'

import Header from '../../components/header'
import Navigation from '../../components/navigation'
import SideMenu from '../../components/side-menu'
import Footer from '../../components/footer'

import labImg from '../../assets/images/lab5.jpg'

import styles from './index.module.scss'

import { labTests } from './constants'

const Tests = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation current={'tests'} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div className={styles.headerText1}>
                            Tests
                        </div>
                        <div className={styles.headerText2}>
                            <p>
                                Platinum Diagnostic Lab offers a large range of medical laboratory tests, including blood, urine and gene tests for diabetes, cholesterol, sexually-transmitted diseases, arthritis, and vitamin levels. Platinum Diagnostic Lab also offers tests for diseases and health conditions, as well as routine tests.
                            </p>
                            <br/>
                            <p>
                                Lab test results are typically available within 24-48 hours. Results are sent directly to you or your healthcare provider – no third-party sources.
                            </p>
                        </div>
                        <img src={labImg} alt="img"/>
                    </div>
                    <div className={styles.categories}>
                        <div className={styles.categoriesH}>Test Categories</div>
                        <div className={styles.flexBox}>
                            <ul className={styles.col1}>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Allergy</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Cardiology</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Chemistry</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Coagulation</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Diagnostic Immunology</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Endocrinology</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Gastroenterology</span>
                                </li>
                            </ul>
                            <ul className={styles.col2}>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Hematology</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Microbiology</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Infectious Diseases</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Obstetrics/Gynecology</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Oncology</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Pain Management</span>
                                </li>
                                <li>
                                    <div className={styles.iconn} />
                                    <span>Urology</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.listTest}>
                        <div className={styles.headerText}>Lab tests</div>
                        <ul>
                            {labTests.map((item, index) => (
                                <li key={index}>
                                    <div className={styles.icon} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Tests