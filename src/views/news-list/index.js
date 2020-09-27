import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header'
import Navigation from '../../components/navigation'
import SideMenu from '../../components/side-menu'
import Footer from '../../components/footer'

import imgNews from '../../assets/images/imgNews.jpg'

import styles from './index.module.scss'

const items = [
    {
        title: 'Diabetes could cause up to 12% of US deaths',
        shortText1: 'The proportion of deaths attributable to diabetes in the US is as high as 12 percent—three times higher than estimates based on death certificates suggest—a new analysis shows.',
        shortText2: ' For a new study, published in PLOS ONE, researchers used two large datasets that included more than 300,000 people to estimate the fraction of deaths attributable to diabetes among people ages 30 to 84 between 1997…',
        date: '15 Jun, 2015',
        img: imgNews,
        countComments: 0,
    },
    {
        title: 'CDC issues interim travel guidance related to Zika virus for 14 Countries',
        shortText1: 'CDC has issued a travel alert (Level 2-Practice Enhanced Precautions) for people traveling to regions and certain countries where Zika virus transmission is ongoing: Brazil, Colombia, El Salvador, French Guiana, Guatemala, Haiti, Honduras, Martinique, Mexico, Panama, Paraguay, Suriname, Venezuela, and the Commonwealth of Puerto Rico.',
        shortText2: 'This alert follows reports in Brazil of microcephaly and other poor pregnancy outcomes in babies of mothers who were infected with Zika virus while pregnant.…',
        date: '10 Jun, 2015',
        countComments: 0,
        img: null
    }
]

const NewsList = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation current={'news'} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.newsCont}>
                            <Link
                                to='/news'
                                className={styles.newsTitle}
                            >
                                {item.title}
                            </Link>
                            <div className={styles.newsInfo}>
                                By
                                <span>admin</span>
                                {item.date}
                                <span>
                                    {`Uncategorized ${item.countComments} Comments`}
                                </span>
                            </div>
                            {item.img ? (
                                <img src={item.img} alt="img"/>
                            ) : null}
                            <div className={styles.newsText}>
                                <p>{item.shortText1}<br/></p>
                                <br/>
                                <p>{item.shortText2}<br/></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewsList