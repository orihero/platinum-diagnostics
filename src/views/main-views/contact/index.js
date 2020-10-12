import React, {useState} from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    SideNavigation,
    Footer,
} from '../../../components'

import {send} from 'emailjs-com'

import styles from './index.module.scss'

const service_id = 'service_6o731e3'
const template_id = 'template_d3n2mon'

const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [errState, setErrState] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    })

    const onSubmit = e => {
        e.preventDefault()

        const {
            name,
            email,
            subject,
            message
        } = state

        if(name && email && subject && message) {
            setErrState({
                name: false,
                email: false,
                subject: false,
                message: false
            })

            const templateParams = {
                from_name: name,
                from_email: email,
                subject,
                message
            }

            send(service_id, template_id, templateParams)
                .then(res => {
                    console.log('res: ', res)
                    if(res.status === 200){
                        window.location.reload()
                    }
                })
        } else {
            let tmpErrState = {
                name: false,
                email: false,
                subject: false,
                message: false
            }

            if (!name) tmpErrState.name = true
            if (!email) tmpErrState.email = true
            if (!subject) tmpErrState.subject = true
            if (!message) tmpErrState.message = true

            setErrState({...tmpErrState})

            alert('Please fill all fields')
        }
    }

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
                            <input
                                id="name"
                                type="text"
                                value={state.name}
                                onChange={e => setState({...state, name: e.target.value})}
                            />
                            {errState.name ? (
                                <div className={styles.errorText}>
                                    Required
                                </div>
                            ) : null}
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={state.email}
                                onChange={e => setState({...state, email: e.target.value})}
                            />
                            {errState.email ? (
                                <div className={styles.errorText}>
                                    Required
                                </div>
                            ) : null}
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                value={state.subject}
                                onChange={e => setState({...state, subject: e.target.value})}
                            />
                            {errState.subject ? (
                                <div className={styles.errorText}>
                                    Required
                                </div>
                            ) : null}
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                cols="30"
                                rows="10"
                                id="message"
                                value={state.message}
                                className={styles.textArea}
                                onChange={e => setState({...state, message: e.target.value})}
                            />
                            {errState.message ? (
                                <div className={styles.errorText}>
                                    Required
                                </div>
                            ) : null}
                        </div>
                        <button onClick={onSubmit}>
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