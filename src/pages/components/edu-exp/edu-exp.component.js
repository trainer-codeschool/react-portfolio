import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Timeline from '~/components/timeline';
import css from './edu-exp.module.scss';


const expData = [
	{
		time: '2016 - 2018',
		title: 'CodeSchool Kids',
		desc: 'Be a kid',
	},
	{
		time: '2019 - present',
		title: 'CodeSchool VN',
		desc: 'Teaching kids',
	},
];

const eduData = [
	{
		time: '2010 - 2012',
		title: 'Student',
		desc: 'Studying in university',
	},
	{
		time: '2013 - 2015',
		title: 'Master',
		desc: 'Studying Master in university',
	},
];

const EduExp = () => (
	<section className={`p_120 ${css['edu-exp']}`}>
		<Tabs>
			<Tab eventKey="experience" title="Kinh nghiệm">
				<Timeline events={expData} />
			</Tab>
			<Tab eventKey="education" title="Học vấn">
				<Timeline events={eduData} />
			</Tab>
		</Tabs>
	</section>
);

export default EduExp;
