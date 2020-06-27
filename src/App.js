// 1. Third-party library / (S)CSS
import React from 'react';
import WebFont from 'webfontloader';
import '~/assets/vendors/flaticon/flaticon.css';
import '~/assets/vendors/linericon/style.css';

// 2. Custom (S)CSS
import './App.scss';

// 3. Local modules / resource files
import HomePage from './pages/page-home';


WebFont.load({
	google: {
		families: ['Roboto:300,400,400i,500,600,700'],
	},
});

export default function App() {
	return (
		<HomePage />
	);
}
