import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    SideNavigation,
    Footer,
} from '../../../components'

import styles from './index.module.scss'

const Contact = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation current={'contact'} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>
                        Contact Our Friendly Staff
                    </h1>
                    <div className={styles.box}>
                        <div className={styles.info}>
                            <h2>Platinum Diagnostic Lab</h2>
                            <p>1026 West Elizabeth Avenue</p>
                            <p>Unit D 4 & 5 Linden NJ 07036</p>
                            <p>Phone: (201) 636-2705</p>
                            <p>Fax: (201) 636-2708</p>
                            <p>Hours: 8:00 AM - 5:00 PM</p>
                        </div>
                        <div className={styles.boxx} />
                    </div>
                    <div className={styles.inputBox}>
                        <h3>
                            Please fill out this form to send us a message or ask a question.
                        </h3>
                        <div className={styles.item}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name"/>
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"/>
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject"/>
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                cols="30"
                                rows="10"
                                id="message"
                                className={styles.textArea}
                            />
                        </div>
                        <button>
                            Send
                        </button>
                    </div>
                </div>
                <SideNavigation current={'contactInfo'} />
            </div>
            <Footer current={'contact'} />
        </div>
    )
}

export default Contact