import React from 'react'

import Header from '../../components/header'
import Navigation from '../../components/navigation'
import SideMenu from '../../components/side-menu'
import Footer from '../../components/footer'

import { BsCircleFill } from 'react-icons/bs'
import { IoMdArrowDropright } from 'react-icons/io'

import logoImg from '../../assets/images/logo.png'
import labImg from '../../assets/images/lab4.jpg'

import styles from './index.module.scss'

const About = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation current={'about'} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div className={styles.headerText1}>
                            About Us
                        </div>
                        <div className={styles.headerText2}>
                            Platinum Diagnostic Laboratory  is an independent  clinical laboratory offering extensive medical testing services in the region and connectivity solutions for both laboratory information systems and electronic medical records. We support the testing needs of patients, physicians, hospitals, employers, independent physicians associations and other businesses through our patient service locations across the region
                        </div>
                        <img src={labImg} alt="img"/>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.boldText}>
                            Our Mission
                        </div>
                        <div className={styles.catalog1}>
                            <div className={styles.text}>
                                <em>The mission and values of Platinum Diagnostic Lab</em>
                            </div>
                            <div className={styles.text}>
                                Our persistent dedication is good health for:
                            </div>
                            <ul>
                                <li>
                                    <BsCircleFill className={styles.icon} />
                                    <span>Our People</span>
                                </li>
                                <li>
                                    <BsCircleFill className={styles.icon} />
                                    <span>Our Patients</span>
                                </li>
                                <li>
                                    <BsCircleFill className={styles.icon} />
                                    <span>Our Communities</span>
                                </li>
                                <li>
                                    <BsCircleFill className={styles.icon} />
                                    <span>Our World</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.catalog2}>
                            <div className={styles.text}>
                                <em>We will work as a team to demonstrate our values:</em>
                            </div>
                            <ul>
                                <li>
                                    <em><b><u>Respect</u></b></em>
                                    <span>- Treat all people with respect and compassion</span>
                                </li>
                                <li>
                                    <em><b><u>Service</u></b></em>
                                    <span>- Put the needs of our patients and their families first</span>
                                </li>
                                <li>
                                    <em><b><u>Quality</u></b></em>
                                    <span>- Deliver outstanding clinical services</span>
                                </li>
                                <li>
                                    <em><b><u>Excellence</u></b></em>
                                    <span>- Set high standards and achieve them</span>
                                </li>
                                <li>
                                    <em><b><u>Responsibility</u></b></em>
                                    <span>- Be good stewards of our resources, ensuring access to care for all</span>
                                </li>
                                <li>
                                    <em><b><u>Innovation</u></b></em>
                                    <span>- Be progressive in our thinking and actions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.boldText}>Your privacy</div>
                        <div className={styles.text}>
                            At Platinum Diagnostic Lab, your laboratory tests, results and personal health records are kept completely private. Privacy is guaranteed: no third-party access is allowed to personal health information. You or your primary healthcare provider will receive test results directly from Platinum Diagnostic Lab.
                        </div>
                    </div>
                    <div className={styles.box3}>
                        <div className={styles.headerRow}>
                            <div className={styles.boldText}>
                                Why choose Platinum Diagnostic Lab for medical laboratory testing?
                            </div>
                            <img src={logoImg} alt="img"/>
                        </div>
                        <ul>
                            <li>
                                <div className={styles.iconn} />
                                <div className={styles.liText}>
                                    <b>24/7 Client Services:</b> Platinum Diagnostic Lab’s client services department is available 24 hours a day, 7 days a week. We can be reached around-the-clock for questions or concerns at (201)-636-2705.
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconn} />
                                <div className={styles.liText}>
                                    <b>Customized Procedures:</b> We work with you to fit your unique needs. Processes can be customized. Platinum Diagnostic Lab will request forms based on your requests, as well as change delivery times to make our services seamlessly fit your schedule.
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconn} />
                                <div className={styles.liText}>
                                    <b>Easy tech support:</b> Platinum Diagnostic Lab offers training for your staff to use our user-friendly IT systems efficiently.
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconn} />
                                <div className={styles.liText}>
                                    <b>Simple test results:</b> Platinum Diagnostic Lab provides test results the way it is convenient for you. Whether you prefer paper results, or wish to receive them electronically, we can accommodate
                                </div>
                            </li>
                            <li>
                                <div className={styles.iconn} />
                                <div className={styles.liText}>
                                    <b>Your needs come first:</b> You can always let us know how we can serve you better by calling us at (201)-636-2705. We are interested in hearing your ideas – regardless if you are a current client.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About