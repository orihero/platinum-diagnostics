import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

const Navigation = ({ current, find }) => {

    return(
        <div className={styles.navigation}>
            <Link
                to='/'
                className={styles.item}
                style={current === 'home' ? {backgroundColor: '#F05927'} : null}
            >
                Home
            </Link>
            <Link
                to='/about'
                className={styles.item}
                style={current === 'about' ? {backgroundColor: '#F05927'} : null}
            >
                About Us
            </Link>
            <Link
                to='/tests'
                className={styles.item}
                style={current === 'tests' ? {backgroundColor: '#F05927'} : null}
            >
                Tests
            </Link>
            {find ? (
                <Link
                    to='/find-location'
                    className={styles.item}
                    style={current === 'find-location' ? {backgroundColor: '#F05927'} : null}
                >
                    Find a location
                </Link>
            ) : null}
            <Link
                to='/news-list'
                className={styles.item}
                style={current === 'news' ? {backgroundColor: '#F05927'} : null}
            >
                News
            </Link>
            <Link
                to='/contact'
                className={styles.item}
                style={current === 'contact' ? {backgroundColor: '#F05927'} : null}
            >
                Contact
            </Link>
        </div>
    )
}

export default Navigation