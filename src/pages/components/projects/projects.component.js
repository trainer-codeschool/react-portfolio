import React from 'react';
import Container from 'react-bootstrap/Container';

import PhotoGallery from '~/components/photo-gallery';
import css from './projects.module.scss';


const galleryData = [
	{
		photo: 'https://dummyimage.com/340x340/5357a1/ffffff&text=City+Library',
		name: 'City Library',
		summary: 'Phát triển hệ thống mới',
		details: 'Thiết kế và phát triển hệ thống quản lý thư viện thành phố',
		stack: ['mern'],
	},
	{
		photo: 'https://dummyimage.com/340x340/5357a1/ffffff&text=Furniture+Website',
		name: 'Furniture Website',
		summary: 'Thiết kế website',
		details: 'Thiết kế website cho công ty nội thất',
		stack: ['mern', 'uiux'],
	},
	{
		photo: 'https://dummyimage.com/340x340/5357a1/ffffff&text=BitCoin+Wallet',
		name: 'BitCoin Wallet',
		summary: 'Nâng cấp và tối ưu hệ thống',
		details: 'Nâng cấp ứng dụng ví điện tử BitCoin sử dụng MERN stack và tối ưu tốc độ.',
		stack: ['pean', 'optimize'],
	},
];

const Projects = () => (
	<section className="p_120">
		<Container>
			<div className="main-title">
				<h2>dự án tiêu biểu</h2>
				<p>Mỗi dự án đều phản ánh kỹ năng và chứa đựng tâm huyết của tôi</p>
			</div>
			<ul className={`list ${css.filter}`}>
				<li className={css.active} data-filter="*"><button type="button">Tất cả</button></li>
				<li data-filter=".brand"><button type="button">UI/UX</button></li>
				<li data-filter=".manipul"><button type="button">Tối ưu</button></li>
				<li data-filter=".creative"><button type="button">MERN stack</button></li>
				<li data-filter=".design"><button type="button">PEAN stack</button></li>
			</ul>
		</Container>
		<PhotoGallery items={galleryData} />
	</section>
);

export default Projects;
