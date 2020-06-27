import React from 'react';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

import LayoutMain from '~/layout/layout-main';
import BioInfo from '../components/bio-info';
import JobInfo from '../components/job-info';
import EduExp from '../components/edu-exp';
import Morals from '../components/morals';
import Projects from '../components/projects';
import Testimonials from '../components/testimonials';


const HomePage = () => (
	<LayoutMain banner={BioInfo}>
		<JobInfo />
		<EduExp />
		<Morals />
		<Projects />
		<Testimonials />
	</LayoutMain>
);

export default HomePage;
