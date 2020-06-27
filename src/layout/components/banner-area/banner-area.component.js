import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import css from './banner-area.module.scss';


const AreaBanner = ({ children }) => (
	<section className={css.bannerArea}>
		<div className="container box_1620">
			<div
				className={classnames(
					css.bannerInner,
					' w-100 position-relative d-flex align-items-center justify-content-center',
				)}
			>
				<div className={css.bannerContent}>
					{children}
				</div>
			</div>
		</div>
	</section>
);

AreaBanner.propTypes = {
	children: PropTypes.element.isRequired,
};

export default AreaBanner;