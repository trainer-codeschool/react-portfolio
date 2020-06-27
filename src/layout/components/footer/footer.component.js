import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import classnames from 'classnames';

import InputStickyHolder from '~/components/input-sticky-holder';
import css from './footer.module.scss';


const Footer = () => (
	<footer className={`p_120 ${css.footerArea}`}>
		<Container>
			<Row className={css.footerInner}>
				<Col lg={5} sm={6}>
					<aside className={classnames(css.copyWidget, css.footerWidget)}>
						<div className={css.footerTitle}>
							<h3>Chúng tôi là ai?</h3>
						</div>
						<p>
							Nơi chia sẻ kiến thức và đào tạo công nghệ phần mềm có tính thực tiễn cao.
						</p>
						<p>
							Website này có sử dụng tài nguyên của&nbsp;
							<a href="https://colorlib.com" target="_blank" rel="noopener">Colorlib</a>,&nbsp;
							<a href="https://www.freepik.com" target="_blank" rel="noopener">Freepik</a> và&nbsp;
							<a href="https://www.flaticon.com/" target="_blank" rel="noopener">Flaticon</a>
						</p>
						<p>Copyright &copy;{new Date().getFullYear()} All rights reserved</p>
					</aside>
				</Col>
				<Col lg={5} sm={6}>
					<aside className={classnames(css.copyWidget, css.newsWidget)}>
						<div className={css.footerTitle}>
							<h3>Newsletter</h3>
						</div>
						<p>Stay updated with our latest trends</p>
						<div>
							<form target="_blank" method="post" className="subscribe_form relative">
								<div className="input-group d-flex flex-row">
									<InputStickyHolder
										name="email"
										placeholder="Enter email address"
										required
										type="email"
									/>
									<Button className={css.btnSubscribe}>
										<i className="lnr lnr-arrow-right" />
									</Button>
								</div>
								{/* <div className="mt-10 info"></div> */}
							</form>
						</div>
					</aside>
				</Col>
				<Col lg={2}>
					<aside className={classnames(css.copyWidget, css.socialWidget)}>
						<div className={css.footerTitle}>
							<h3>Follow Me</h3>
						</div>
						<p>Let us be social</p>
						<ul className="list">
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
					</aside>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;