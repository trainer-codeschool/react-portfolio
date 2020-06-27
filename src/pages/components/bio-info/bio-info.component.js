import React from 'react';
import Media from 'react-bootstrap/Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import imgPersonal from '~/assets/images/personal-432x500.jpg';
import css from './bio-info.module.scss';


const BioInfo = () => (
	<Media>
		<div className="d-flex">
			<img src={imgPersonal} alt="My avatar" />
		</div>
		<Media.Body className={css.bioInfo}>
			<h6>Xin chào, chúng tôi là</h6>
			<h3>CodeSchool VN</h3>
			<h4>We make coding great again</h4>
			<p>
				Nơi chia sẻ kiến thức và đào tạo công nghệ phần mềm có tính thực tiễn cao, chú trọng kỹ năng thực tế,
				nhưng vẫn đảm bảo nắm rõ nền tảng căn bản.
			</p>
			<ul className={`list ${css.basicInfo}`}>
				<li>
					<i className="lnr lnr-calendar-full" />
					Từ 13 tháng 4, 2014
				</li>
				<li>
					<a href="mailto:trainer@codeschool.vn" title="Email liên hệ">
						<i className="lnr lnr-envelope" />
						trainer@codeschool.vn
					</a>
				</li>
				<li>
					<a
						href="https://codeschool.vn"
						target="_blank"
						rel="noopener"
						title="Website tin tức công nghệ phần mềm"
					>
						<i className="lnr lnr-earth" />
						https://codeschool.vn
					</a>
				</li>
			</ul>
			<ul className={`list ${css.personalSocial}`}>
				<li>
					<a
						href="https://fb.me/codeschool.vn"
						target="_blank"
						rel="noopener"
						title="Fanpage chia sẻ và bình luận"
					>
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
				</li>
				<li>
					<a
						href="https://fb.me/codeschool.vn"
						target="_blank"
						rel="noopener"
					>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</li>
				<li>
					<a
						href="https://fb.me/codeschool.vn"
						target="_blank"
						rel="noopener"
					>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
				</li>
			</ul>
		</Media.Body>
	</Media>
);

export default BioInfo;
