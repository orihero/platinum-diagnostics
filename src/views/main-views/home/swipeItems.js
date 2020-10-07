import React from 'react'

import { BsCircleFill } from 'react-icons/bs';

import styles from './index.module.scss'

export const Item1 = () => (
	<div className={styles.carouselItem0}>
		<h1>A Simple, No-Stress Testing Procedure</h1>
		<ul>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>
					Our New Jersey draw center have work-friendly hours and are
					open saturday
				</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>Your privacy</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>Most results available in 2-48 hours</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>Results delivered immediately to your doctor</span>
			</li>
		</ul>
	</div>
);

export const Item2 = () => (
	<div className={styles.carouselItem1}>
		<h1>Affordable Lab Tests for All Patients</h1>
		<ul>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>We have competitive pricing on every test</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>No hidden costs or charges after your test</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>Medicare, Medicaid and private insurances accepted</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>
					No Insurance ? No problem! We give discounts for cash
					payments
				</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>Compare our prices and save!</span>
			</li>
		</ul>
	</div>
);

export const Item3 = () => (
	<div className={styles.carouselItem2}>
		<h1>DNA - Genetic Testing</h1>
		<ul>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>Predict, diagnose and prevent disease</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>Determine the best treatment option</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>Identify gene changes for future generarions</span>
			</li>
			<li>
				<BsCircleFill className={styles.icon} />
				<span>Screen newborns and at-risk patients</span>
			</li>
		</ul>
	</div>
);