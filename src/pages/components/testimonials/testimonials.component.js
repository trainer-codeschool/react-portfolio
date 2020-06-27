import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import AliceCarousel from 'react-alice-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import css from './testimonials.module.scss';


const MAX_RATING = 5;
const STAR_COLOR = '#FFC000';

const TestiItem = ({ author, content, rating }) => {
	const stars = Array(MAX_RATING);

	for (let i = 0; i < MAX_RATING; ++i) {
		stars[i] = (i >= rating
			? <FontAwesomeIcon icon={emptyStar} color={STAR_COLOR} key={i} />
			: <FontAwesomeIcon icon={solidStar} color={STAR_COLOR} key={i} />);
	}

	return (
		<div className={css.testiItem}>
			<p>{content}</p>
			<h4>{author}</h4>
			{stars}
		</div>
	);
};

TestiItem.propTypes = {
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	rating: PropTypes
		.oneOf([1, 2, 3, 4, 5])
		.isRequired,
};


const testiData = [
	{
		author: 'Captain Vietnam',
		content: 'Rất có trách nhiệm và đam mê với công việc. He can do this all day!',
		rating: 4,
	},
	{
		author: 'Bàn-là Man',
		content: 'Những tư vấn tối ưu hệ thống của anh ấy đã chúng tôi tiết kiệm nhiều chi phí. He is Ironman!',
		rating: 5,
	},
	{
		author: 'Spider Man',
		content: `Chi phí rất hợp lý nhưng chất lượng không chê vào đâu được.
			Great power comes with great responsibility.`,
		rating: 4,
	},
	{
		author: 'The Dark Night',
		content: 'Nhắn tin nhờ support vào đêm khuya mà vẫn trả lời. Tell me, do you sleep?',
		rating: 3,
	},
	{
		author: 'Mr. Thốt Nốt',
		content: 'Hắn ta đã xóa một nửa dữ liệu trong database production của chúng tôi. Damage is inevitable!',
		rating: 1,
	},
];

const Testimonials = () => {
	const responsive = {
		0: {
			items: 1,
		},
		767: {
			items: 2,
		},
		1200: {
			items: 3,
		},
	};

	return (
		<section className={`p_120 ${css.testimonials}`}>
			<Container>
				<div className="main-title">
					<h2>Khách hàng nói về tôi</h2>
					<p>Đừng chỉ nghe những gì tôi nói, hãy nghe khách hàng nói gì về tôi</p>
				</div>
				<AliceCarousel
					autoPlay
					buttonsDisabled
					keysControlDisabled
					responsive={responsive}
					autoPlayInterval={5000}
					duration={1000}
				>
					{testiData.map((testi) => (
						<TestiItem {...testi} key={testi.author} />
					))}
				</AliceCarousel>
			</Container>
		</section>
	);
};

export default Testimonials;

const Chevron = ({ icon }) => (
	<button className={css.btnChevron}>
		<FontAwesomeIcon icon={icon} color="000000" />
	</button>
);
