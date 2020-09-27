import React from 'react'

import { IoMdArrowDropright } from 'react-icons/io'

import styles from './index.module.scss'

const SideMenu = () => {

    return(
        <div className={styles.cont}>
            <h4>CLINICIAN PROVIDERS</h4>
            <div className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Create an account
                </div>
            </div>
            <div className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Physician services
                </div>
            </div>
            <div className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Insurances
                </div>
            </div>
            <div className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Lab Forms
                </div>
            </div>
            <div className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Specimen Collection
                </div>
            </div>
            <div className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Shipping and handling
                </div>
            </div>
            <div className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Order supplies
                </div>
            </div>
        </div>
    )
}

export default SideMenu