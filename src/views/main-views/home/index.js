import React from 'react';

import { Link } from 'react-router-dom'

// import Carousel from 'react-elastic-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
	A11y,
	Scrollbar,
	Navigation,
	Pagination,
	EffectFade,
	EffectCube,
	EffectFlip,
	EffectCoverflow,
} from 'swiper';

import { Header, Navigation as NavBar, SideMenu, Footer } from '../../../components';
import { Item1, Item2, Item3 } from './swipeItems'

import mapImg from '../../../assets/images/map.png';
import card1 from '../../../assets/images/card-1.png';
import card2 from '../../../assets/images/card-2.png';
import card3 from '../../../assets/images/card-3.png';
import card4 from '../../../assets/images/card-4.png';
import card5 from '../../../assets/images/card-5.png';
import card6 from '../../../assets/images/card-6.png';
import card7 from '../../../assets/images/card-7.png';
import card8 from '../../../assets/images/card-8.png';
import listImg from '../../../assets/images/list.png';
import callImg from '../../../assets/images/call.png';
import callImg1 from '../../../assets/images/call-1.png';
import callImg2 from '../../../assets/images/call-2.png';
import officeImg from '../../../assets/images/office.png';

import styles from './index.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([
	A11y,
	Scrollbar,
	Navigation,
	Pagination,
	EffectFade,
	EffectCube,
	EffectFlip,
	EffectCoverflow,
]);

const Main = () => {
	return (
		<div className={styles.cont}>
			<Header />
			<NavBar current={'home'} find={true} />
			<div className={styles.caruselCont}>
				<Swiper
					navigation
					effect={'coverflow'}
					slidesPerView={1}
					scrollbar={{ draggable: true }}
					pagination={{ clickable: true }}
				>
					<SwiperSlide>
						<Item1 />
					</SwiperSlide>
					<SwiperSlide>
						<Item2 />
					</SwiperSlide>
					<SwiperSlide>
						<Item3 />
					</SwiperSlide>
				</Swiper>
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
					<img src={callImg} alt='img' />
					<div className={styles.text}>
						{'Get Started with Us Open a New Account'}
					</div>
				</div>
				<div className={styles.box2}>
					<img src={officeImg} alt='img' />
					<div className={styles.text}>{'Order Testing'}</div>
					<span />
				</div>
				<div className={styles.box3}>
					<img src={listImg} alt='img' />
					<div className={styles.text}>
						{'Get test results in 24-48 Hours'}
					</div>
					<span />
				</div>
			</div>
			<div className={styles.rowCatalog}>
				<SideMenu />
				<div className={styles.main}>
					<h1>LAB TESTING TAILORED TO YOUR NEEDS</h1>
					<p>
						Platinum Diagnostic Lab has been at the forefront of
						using innovative laboratory testing services for the
						diagnosis and treatment of patients. We offer a large
						range of medical laboratory tests, including blood,
						urine and tests for diabetes, cholesterol,
						sexually-transmitted diseases, arthritis, and vitamin
						levels. Lab test results are typically available within
						24-48 hours.
					</p>
					<div className={styles.content}>
						<div className={styles.row}>
							<div className={styles.card1}>
								<img src={card1} alt='img' />
								<div className={styles.text1}>Allergy</div>
								<Link
									to='/allergy'
									className={styles.text2}
								>
									Details
								</Link>
							</div>
							<div className={styles.card2}>
								<img src={card2} alt='img' />
								<div className={styles.text1}>
									Infectious Diseases
								</div>
								<Link
									to='/infectioues-deseases'
									className={styles.text2}
								>
									Details
								</Link>
							</div>
							<div className={styles.card3}>
								<img src={card3} alt='img' />
								<div className={styles.text1}>Diabetes</div>
								<Link
									to='/diabets'
									className={styles.text2}
								>
									Details
								</Link>
							</div>
							<div className={styles.card4}>
								<img src={card4} alt='img' />
								<div className={styles.text1}>
									General Health
								</div>
								<Link
									to='/general-health'
									className={styles.text2}
								>
									Details
								</Link>
							</div>
							<div className={styles.card5}>
								<img src={card5} alt='img' />
								<div className={styles.text1}>
									Pain Management
								</div>
								<Link
									to='/pain-management'
									className={styles.text2}
								>
									Details
								</Link>
							</div>
							<div className={styles.card6}>
								<img src={card6} alt='img' />
								<div className={styles.text1}>Pediatrics</div>
								<Link
									to='/pediatrics'
									className={styles.text2}
								>
									Details
								</Link>
							</div>
							<div className={styles.card7}>
								<img src={card7} alt='img' />
								<div className={styles.text1}>Oncology</div>
								<Link
									to='/oncology'
									className={styles.text2}
								>
									Details
								</Link>
							</div>
							<div className={styles.card8}>
								<img src={card8} alt='img' />
								<div className={styles.text1}>
									Cardiovascular
								</div>
								<Link
									to='/cardiovascular'
									className={styles.text2}
								>
									Details
								</Link>
							</div>
						</div>
						{/* <div
							className={styles.row}
							style={{ marginTop: '20px' }}>
							<div className={styles.card}>
								<img src={card5} alt='img' />
								<div className={styles.text1}>
									Pain Management
								</div>
								<div className={styles.text2}>Details</div>
							</div>
							<div className={styles.card}>
								<img src={card6} alt='img' />
								<div className={styles.text1}>Pediatrics</div>
								<div className={styles.text2}>Details</div>
							</div>
							<div className={styles.card}>
								<img src={card7} alt='img' />
								<div className={styles.text1}>Oncology</div>
								<div className={styles.text2}>Details</div>
							</div>
							<div className={styles.card}>
								<img src={card8} alt='img' />
								<div className={styles.text1}>
									Cardiovascular
								</div>
								<div className={styles.text2}>Details</div>
							</div>
						</div> */}
					</div>
					<div className={styles.infoBox}>
						<h3>Platinum Diagnostic Lab Location in New Jersey</h3>
						<div className={styles.flexStartRow}>
							<img
								alt='img'
								src={mapImg}
								style={{ marginRight: '10px' }}
							/>
							<div>
								<div
									style={{ color: '#f05927' }}
									className={styles.infoText}>
									1026 West Elizabeth Avenue
								</div>
								<div className={styles.infoText}>
									Unit D 4& 5 Linden NJ 07036
								</div>
								<div className={styles.infoText}>
									Phone : (201) 636-2705
								</div>
								<div className={styles.infoText}>
									Hours : 7:30 AM – 5:00 PM
								</div>
							</div>
						</div>
					</div>
					<div className={styles.callBox}>
						<img src={callImg1} alt='img' />
						<div className={styles.midBox}>
							Have a questions or need assistance?
							<b>Call (201) 636-2705</b>
							{/* <div className={styles.text1}>
								Have a questions or need assistance?
							</div> */}
							{/* <div className={styles.text2}>Call (201) 636-2705</div> */}
						</div>
						<img src={callImg2} alt='img' />
					</div>
				</div>
			</div>
			<Footer current={'home'} />
		</div>
	);
};

export default Main;
