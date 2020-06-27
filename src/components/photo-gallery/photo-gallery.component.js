import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Media from 'react-bootstrap/Media';

import css from './photo-gallery.module.scss';


const GalleryItem = ({ item, onClick }) => {
	const clickHandler = () => onClick(item);

	return (
		<div className={css.galleryItem}>
			<a href="#" className={css.galleryItemImage} onClick={clickHandler}>
				<img className="img-fluid" src={item.photo} alt={item.name} />
				<div className={css.imgOverlay} />
			</a>
			<div className={css.galleryItemText}>
				<a href="#" onClick={clickHandler}>{item.name}</a>
				<p>{item.summary}</p>
			</div>
		</div>
	);
};

const itemPropTypes = {
	photo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
	stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

GalleryItem.propTypes = {
	item: PropTypes.shape(itemPropTypes).isRequired,
	onClick: PropTypes.func,
};

GalleryItem.defaultProps = {
	onClick: (/* targetItem */) => {},
};



const PhotoGallery = ({ items }) => {
	const [activeItem, setActiveItem] = useState(null);

	// const onItemClick = (targetItem) => {
	// 	setActiveItem(targetItem);
	// };

	return (
		<>
			<Container>
				<Row>
					{items.map(it => (
						<Col lg={4} md={6} key={it.name} className="d-flex justify-content-center">
							<GalleryItem item={it} onClick={setActiveItem} />
						</Col>
					))}
				</Row>
				<Row className="d-flex justify-content-center">
					<button type="button" className="main-btn">Xem thêm</button>
				</Row>
			</Container>
			<Modal
				size="lg"
				animation={false}
				show={Boolean(activeItem)}
				onHide={() => setActiveItem(null)}
			>
				<Modal.Header closeButton>
					<Modal.Title>
						{activeItem && activeItem.name}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Media>
						<img
							width={300}
							height={300}
							className="mr-3"
							src={activeItem && activeItem.photo}
							alt={activeItem && activeItem.summary}
						/>
						<Media.Body>
							{activeItem && activeItem.details}
						</Media.Body>
					</Media>
				</Modal.Body>
			</Modal>
		</>
	);
};

PhotoGallery.propTypes = {
	items: PropTypes
		.arrayOf(PropTypes.shape(itemPropTypes))
		.isRequired,
};


export default PhotoGallery;
