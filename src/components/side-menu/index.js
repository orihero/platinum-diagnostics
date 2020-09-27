import React from 'react'
import { Link } from 'react-router-dom'

import { IoMdArrowDropright } from 'react-icons/io'

import styles from './index.module.scss'

const SideMenu = () => {

    return(
        <div className={styles.cont}>
            <h4>CLINICIAN PROVIDERS</h4>
            <Link to='/create-account' className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Create an account
                </div>
            </Link>
            <Link to='/physician-services' className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Physician services
                </div>
            </Link>
            <Link to='/insurances' className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Insurances
                </div>
            </Link>
            <Link to='/lab-forms' className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Lab Forms
                </div>
            </Link>
            <Link to='/specimen-collection' className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Specimen Collection
                </div>
            </Link>
            <Link to='/shipping-and-handling' className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Shipping and handling
                </div>
            </Link>
            <Link to='/order-supplies' className={styles.menuItem}>
                <IoMdArrowDropright className={styles.arrowIcon} />
                <div className={styles.subItem}>
                    Order supplies
                </div>
            </Link>
        </div>
    )
}

export default SideMenu