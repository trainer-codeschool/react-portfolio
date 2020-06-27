import React from 'react';
import PropTypes from 'prop-types';

import css from './timeline.module.scss';


const Event = ({ time, title, desc }) => (
	<div className="media">
		<div className={css.when}>
			<p>{time}</p>
		</div>
		<div className="media-body">
			<h4>{ title }</h4>
			<p>{desc}</p>
		</div>
	</div>
);

Event.propTypes = {
	time: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
};


const Timeline = ({ events }) => (
	<ul className={`list ${css.timeline}`}>
		{events.map((evt) => (
			<li key={evt.time}>
				<span />
				<Event time={evt.time} title={evt.title} desc={evt.desc} />
			</li>
		))}
	</ul>
);

Timeline.propTypes = {
	events: PropTypes
		.arrayOf(PropTypes.shape(Event.propTypes))
		.isRequired,
};

export default Timeline;
