import React from 'react';
import { Link } from 'react-router-dom';

import { FaFax, FaEnvelope } from 'react-icons/fa';
import { MdPhone, MdLocationOn } from 'react-icons/md';

import logo from '../../assets/images/logo-footer.jpg';

import styles from './index.module.scss';

const Footer = ({ current }) => {
	return (
		<div className={styles.footerCont}>
			<div className={styles.row}>
				<div className={styles.col1}>
					<img src={logo} alt='img' />
					<div className={styles.col1Row1}>
						<MdLocationOn className={styles.icon} />
						<div className={styles.col1Text}>
							1026 West Elizabeth Avenue, Unit D 4& 5 Linden NJ
							07036
						</div>
					</div>
					<div className={styles.col1Row2}>
						<MdPhone className={styles.icon} />
						<div className={styles.col1Text}>(201) 636-2705</div>
					</div>
					<div className={styles.col1Row3}>
						<FaFax className={styles.icon} />
						<div className={styles.col1Text}>
							(201) 636-2708 (Fax)
						</div>
					</div>
					<div className={styles.col1Row4}>
						<FaEnvelope className={styles.icon} />
						<div className={styles.col1Text}>
							info@platinumresult.com
						</div>
					</div>
				</div>
				<div className={styles.col2}>
					<h5>NAVIGATION LINKS</h5>
					<Link
						to='/'
						className={`${styles.col2Item} ${
							current === 'home' ? styles.current : ''
						}`}>
						Home
					</Link>
					<Link
						to='/about'
						className={`${styles.col2Item} ${
							current === 'about' ? styles.current : ''
						}`}>
						About Us
					</Link>
					<Link
						to='/how-it-works'
						className={`${styles.col2Item} ${
							current === 'how-it-works' ? styles.current : ''
						}`}>
						How it Works
					</Link>
					<Link
						to='/lab-test'
						className={`${styles.col2Item} ${
							current === 'lab-test' ? styles.current : ''
						}`}>
						Lab Test by State
					</Link>
					<Link
						to='/test-pricing'
						className={`${styles.col2Item} ${
							current === 'test-pricing' ? styles.current : ''
						}`}>
						Test & Pricing
					</Link>
					<Link
						to='/find-location'
						className={`${styles.col2Item} ${
							current === 'find-location' ? styles.current : ''
						}`}>
						Locations
					</Link>
					<Link
						to='/contact'
						className={`${styles.col2Item} ${
							current === 'contact' ? styles.current : ''
						}`}>
						Contact Information
					</Link>
					<Link
						to='/faq'
						className={`${styles.col2Item} ${
							current === 'faq' ? styles.current : ''
						}`}>
						FAQ’s
					</Link>
					<Link
						to='/news-list'
						className={`${styles.col2Item} ${
							current === 'news' ? styles.current : ''
						}`}>
						News
					</Link>
					<Link
						to='/privacy-policy'
						className={`${styles.col2Item} ${
							current === 'privacy-policy' ? styles.current : ''
						}`}>
						Privacy Policy
					</Link>
					<Link
						to='/terms-conditions'
						className={`${styles.col2Item} ${
							current === 'terms-conditions' ? styles.current : ''
						}`}>
						Terms & Conditions
					</Link>
					<Link
						to='/disclaimer'
						className={`${styles.col2Item} ${
							current === 'disclaimer' ? styles.current : ''
						}`}>
						Disclaimer
					</Link>
				</div>
				<div className={styles.col3}>
					<h5>POPULAR TESTS</h5>
					<div className={styles.col3Item}>Allergy</div>
					<div className={styles.col3Item}>Drug Screen 10 Panel</div>
					<div className={styles.col3Item}>CPW</div>
					<div className={styles.col3Item}>Lipid Profile</div>
					<div className={styles.col3Item}>Vitamin D</div>
					<div className={styles.col3Item}>PSA</div>
					<div className={styles.col3Item}>Cardio Plus</div>
					<div className={styles.col3Item}>Hemoglobin A1c</div>
				</div>
			</div>
			<div className={styles.copyRightText}>
				Copyright 2020 Platinum Diagnostic Lab. All rights reserved
			</div>
		</div>
	);
};

export default Footer;
