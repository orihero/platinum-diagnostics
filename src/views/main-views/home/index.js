import React from 'react'

import Carousel from 'react-elastic-carousel'

import {
    Header,
    Navigation,
    SideMenu,
    Footer,
} from '../../../components'

import { BsCircleFill } from 'react-icons/bs'

import mapImg from '../../../assets/images/map.png'
import card1 from '../../../assets/images/card-1.png'
import card2 from '../../../assets/images/card-2.png'
import card3 from '../../../assets/images/card-3.png'
import card4 from '../../../assets/images/card-4.png'
import card5 from '../../../assets/images/card-5.png'
import card6 from '../../../assets/images/card-6.png'
import card7 from '../../../assets/images/card-7.png'
import card8 from '../../../assets/images/card-8.png'
import listImg from '../../../assets/images/list.png'
import callImg from '../../../assets/images/call.png'
import callImg1 from '../../../assets/images/call-1.png'
import callImg2 from '../../../assets/images/call-2.png'
import officeImg from '../../../assets/images/office.png'

import styles from './index.module.scss'

const Item1 = () => (
    <div className={styles.carouselItem0}>
        <h1>A Simple, No-Stress Testing Procedure</h1>
        <ul>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Our New Jersey draw center have work-friendly hours and are open saturday
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Your privacy
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Most results available in 2-48 hours
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Results delivered immediately to your doctor
                </span>
            </li>
        </ul>
    </div>
)

const Item2 = () => (
    <div className={styles.carouselItem1}>
        <h1>Affordable Lab Tests for All Patients</h1>
        <ul>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    We have competitive pricing on every test
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    No hidden costs or charges after your test
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Medicare, Medicaid and private insurances accepted
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    No Insurance ? No problem! We give discounts for cash payments
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Compare our prices and save!
                </span>
            </li>
        </ul>
    </div>
)

const Item3 = () => (
    <div className={styles.carouselItem2}>
        <h1>DNA - Genetic Testing</h1>
        <ul>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Predict, diagnose and prevent disease
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Determine the best treatment option
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Identify gene changes for future generarions
                </span>
            </li>
            <li>
                <BsCircleFill className={styles.icon} />
                <span>
                    Screen newborns and at-risk patients
                </span>
            </li>
        </ul>
    </div>
)

const Main = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation current={'home'} find={true} />
            <div className={styles.caruselCont}>
                <Carousel>
                    {[0, 0, 0].map((item, index) => {
                        if(index === 0){
                            return(
                                <Item1 key={index} />
                            )
                        }
                        if(index === 1){
                            return(
                                <Item2 key={index} />
                            )
                        }
                        if(index === 2){
                            return(
                                <Item3 key={index} />
                            )
                        }
                    })}
                </Carousel>
                <div className={styles.bottomRow}>
                    <div className={styles.first}></div>
                    <div className={styles.second}></div>
                    <div className={styles.third}></div>
                    <div className={styles.fourth}></div>
                    <div className={styles.fiveth}></div>
                </div>
            </div>
            <div className={styles.rowContent}>
                <div className={styles.box1}>
                    <img src={callImg} alt="img"/>
                    <div className={styles.text}>
                        {'Get Started with Us Open a New Account'}
                    </div>
                </div>
                <div className={styles.box2}>
                    <img src={officeImg} alt="img"/>
                    <div className={styles.text}>
                        {'Order Testing'}
                    </div>
                </div>
                <div className={styles.box3}>
                    <img src={listImg} alt="img"/>
                    <div className={styles.text}>
                        {'Get test results in 24-48 Hours'}
                    </div>
                </div>
                <div className={styles.boxArrow1} />
                <div className={styles.boxArrow2} />
            </div>
            <div className={styles.rowCatalog}>
                <SideMenu />
                <div className={styles.main}>
                    <h1>LAB TESTING TAILORED TO YOUR NEEDS</h1>
                    <p>
                        Platinum Diagnostic Lab has been at the forefront of using innovative laboratory testing services for the diagnosis and treatment of patients. We offer a large range of medical laboratory tests, including blood, urine and tests for diabetes, cholesterol, sexually-transmitted diseases, arthritis, and vitamin levels. Lab test results are typically available within 24-48 hours.
                    </p>
                    <div className={styles.content}>
                        <div className={styles.row}>
                            <div className={styles.card}>
                                <img src={card1} alt="img"/>
                                <div className={styles.text1}>
                                    Allergy
                                </div>
                                <div className={styles.text2}>Details</div>
                            </div>
                            <div className={styles.card}>
                                <img src={card2} alt="img"/>
                                <div className={styles.text1}>
                                    Infectious Diseases
                                </div>
                                <div className={styles.text2}>Details</div>
                            </div>
                            <div className={styles.card}>
                                <img src={card3} alt="img"/>
                                <div className={styles.text1}>
                                    Diabetes
                                </div>
                                <div className={styles.text2}>Details</div>
                            </div>
                            <div className={styles.card}>
                                <img src={card4} alt="img"/>
                                <div className={styles.text1}>
                                    General Health
                                </div>
                                <div className={styles.text2}>Details</div>
                            </div>
                        </div>
                        <div className={styles.row} style={{marginTop: '20px'}}>
                            <div className={styles.card}>
                                <img src={card5} alt="img"/>
                                <div className={styles.text1}>
                                    Pain Management
                                </div>
                                <div className={styles.text2}>Details</div>
                            </div>
                            <div className={styles.card}>
                                <img src={card6} alt="img"/>
                                <div className={styles.text1}>
                                    Pediatrics
                                </div>
                                <div className={styles.text2}>Details</div>
                            </div>
                            <div className={styles.card}>
                                <img src={card7} alt="img"/>
                                <div className={styles.text1}>
                                    Oncology
                                </div>
                                <div className={styles.text2}>Details</div>
                            </div>
                            <div className={styles.card}>
                                <img src={card8} alt="img"/>
                                <div className={styles.text1}>
                                    Cardiovascular
                                </div>
                                <div className={styles.text2}>Details</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <h3>Platinum Diagnostic Lab Location in New Jersey</h3>
                        <div className={styles.flexStartRow}>
                            <img
                                alt="img"
                                src={mapImg}
                                style={{marginRight: '10px'}}
                            />
                            <div>
                                <div
                                    style={{color: '#f05927'}}
                                    className={styles.infoText}
                                >
                                    1026 West Elizabeth Avenue
                                </div>
                                <div className={styles.infoText}>Unit D 4& 5 Linden NJ 07036</div>
                                <div className={styles.infoText}>Phone : (201) 636-2705</div>
                                <div className={styles.infoText}>Hours : 7:30 AM – 5:00 PM</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.callBox}>
                        <img src={callImg1} alt="img"/>
                        <div className={styles.text1}>
                            Have a questions or need assistance?
                        </div>
                        <div className={styles.text2}>
                            Call (201) 636-2705
                        </div>
                        <img src={callImg2} alt="img"/>
                    </div>
                </div>
            </div>
            <Footer current={'home'} />
        </div>
    )
}

export default Main