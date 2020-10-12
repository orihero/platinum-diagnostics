import React from 'react'
import { Link } from 'react-router-dom'

import {
    FaUser,
    FaYoutube,
    FaTwitter,
    FaFacebook,
    FaUserCircle,
    FaGooglePlus,
} from 'react-icons/fa'

import logoImg from '../../assets/images/logo.png'

import styles from './index.module.scss'

const Header = () => {

    return(
        <div className={styles.header}>
            <Link to='/'>
                <img
                    alt="alt"
                    src={logoImg}
                    className={styles.left}
                />
            </Link>
            <div className={styles.right}>
                <div className={styles.row1}>
                    <FaUser className={styles.icon}/>
                    <p>My Account</p>
                </div>
                <div className={styles.row2}>
                    <div className={styles.col1}>
                        <FaFacebook className={styles.iconFb}/>
                        <FaTwitter className={styles.iconTw}/>
                        <FaYoutube className={styles.iconYt}/>
                        <FaGooglePlus className={styles.iconGp}/>
                    </div>
                    <a
                        className={styles.col2}
                        href='https://platinum.safemedicaldata.com'
                    >
                        <div className={styles.coll1}>
                            <FaUserCircle className={styles.icon} />
                        </div>
                        <div className={styles.coll2}>
                            Physician Portal
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header