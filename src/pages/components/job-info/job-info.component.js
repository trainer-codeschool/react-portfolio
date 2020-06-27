import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';

import css from './job-info.module.scss';


const CountUpIfVisible = ({ amount, isVisible }) => (
	<CountUp
		start={0}
		end={isVisible ? amount : 0}
		delay={0}
		prefix="("
		suffix="%)"
	>
		{({ countUpRef }) => (
			<span ref={countUpRef} />
		)}
	</CountUp>
);

const JobInfo = () => (
	<Container as="section" className="p_120">
		<Row className="welcome_inner">
			<Col lg={6}>
				<div className={css.welcomeText}>
					<h4>Giới thiệu</h4>
					<p>
						Tôi là một học viên đã tham gia các khóa đào tạo của CodeSchool, đồng thời
						cũng là một lập trình viên tự do (freelance). Hiện nay tôi có thể tham gia các dự án
						phát triển website và ứng dụng web ở vị trí full-stack. Chi phí freelancing (theo giờ)
						và kinh nghiệm của tôi như sau:
					</p>
					<Row>
						<Col md={4}>
							<div className={css.itemBlock}>
								<i className="lnr lnr-database" />
								<h4>$20</h4>
								<p>Một giờ</p>
							</div>
						</Col>
						<Col md={4}>
							<div className={css.itemBlock}>
								<i className="lnr lnr-book" />
								<h4>19</h4>
								<p>Dự án</p>
							</div>
						</Col>
						<Col md={4}>
							<div className={css.itemBlock}>
								<i className="lnr lnr-users" />
								{/* 19 projects * 8 hrs/day * 20 days/month * 3 months/proj */}
								<h4>9.120</h4>
								{/* 4.75 năm kinh nghiệm */}
								<p>Giờ kinh nghiệm</p>
							</div>
						</Col>
					</Row>
				</div>
			</Col>
			<Col lg={6}>
				<TrackVisibility
					once
					partialVisibility
					className={css.skillSet}
					tag="div"
				>
					{({ isVisible }) => (
						<>
							<div className={css.skillItem}>
								<h4>
									HTML &amp; CSS <CountUpIfVisible amount={90} isVisible={isVisible} />
								</h4>
								<div className={css.progress}>
									<div className={css.progressTrack}>
										<div className={css.progressBar} style={{ width: isVisible ? '90%' : 0 }} />
									</div>
								</div>
							</div>
							<div className={css.skillItem}>
								<h4>
									Vanilla JavaScript <CountUpIfVisible amount={83} isVisible={isVisible} />
								</h4>
								<div className={css.progress}>
									<div className={css.progressTrack}>
										<div className={css.progressBar} style={{ width: isVisible ? '83%' : 0 }} />
									</div>
								</div>
							</div>
							<div className={css.skillItem}>
								<h4>
									React JS <CountUpIfVisible amount={70} isVisible={isVisible} />
								</h4>
								<div className={css.progress}>
									<div className={css.progressTrack}>
										<div className={css.progressBar} style={{ width: isVisible ? '70%' : 0 }} />
									</div>
								</div>
							</div>
							<div className={css.skillItem}>
								<h4>
									ASP.Net Core <CountUpIfVisible amount={75} isVisible={isVisible} />
								</h4>
								<div className={css.progress}>
									<div className={css.progressTrack}>
										<div className={css.progressBar} style={{ width: isVisible ? '75%' : 0 }} />
									</div>
								</div>
							</div>
							<div className={css.skillItem}>
								<h4>
									Node.JS <CountUpIfVisible amount={60} isVisible={isVisible} />
								</h4>
								<div className={css.progress}>
									<div className={css.progressTrack}>
										<div className={css.progressBar} style={{ width: isVisible ? '60%' : 0 }} />
									</div>
								</div>
							</div>
						</>
					)}
				</TrackVisibility>
			</Col>
		</Row>
	</Container>
);

export default JobInfo;
