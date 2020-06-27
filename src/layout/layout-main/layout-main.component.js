import React from 'react';
import PropTypes from 'prop-types';

import AreaBanner from '../components/banner-area';
import Header from '../components/header';
import Footer from '../components/footer';


const LayoutMain = ({ banner: Banner, children }) => (
	<>
		<Header />
		<AreaBanner>
			<Banner />
		</AreaBanner>
		{children}
		<Footer />
	</>
);

LayoutMain.propTypes = {
	banner: PropTypes.elementType.isRequired,
	children: PropTypes.any.isRequired,
};

export default LayoutMain;
