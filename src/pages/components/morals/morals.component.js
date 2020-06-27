import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import css from './morals.module.scss';


const Morals = () => (
	<section className={`p_120 ${css.moralArea}`}>
		<Container>
			<div className="main-title">
				<h2>đạo đức nghề nghiệp</h2>
				<p>
					Tôi không chỉ rèn luyện năng lực kỹ thuật, mà còn không ngừng trau dồi đạo đức nghề nghiệp
					bởi vì tôi muốn mang lại lợi ích cho cộng đồng và có được tầm ảnh hưởng đến người khác.
				</p>
			</div>
			<Row className={css.moralContent}>
				<Col lg={4} md={6}>
					<div className={css.moralItem}>
						<i className="flaticon-social-care" />
						<h4>Nhân</h4>
						<p>
							Tuân thủ code convention để người khác dễ đọc.
							Luôn tâm niệm rằng người sẽ bảo trì code này là
							một tên sát nhân cuồng sát biết nhà mình ở đâu.
						</p>
					</div>
				</Col>
				<Col lg={4} md={6}>
					<div className={css.moralItem}>
						<i className="flaticon-headhunter" />
						<h4>Lễ</h4>
						<p>
							Không nói xấu sếp, đâm sau lưng đồng nghiệp.
							Không chê bai công nghệ khác, gây war giữa các fan.
							Không đậu xe xiên xẹo.
						</p>
					</div>
				</Col>
				<Col lg={4} md={6}>
					<div className={css.moralItem}>
						<i className="flaticon-teamwork" />
						<h4>Nghĩa</h4>
						<p>
							Luôn giúp đỡ đồng nghiệp gặp task/bug khó.
							Phương châm làm việc: &ldquo;Thà ta phụ người chứ không để người phụ ta&rdquo; — Tào Tháo.
						</p>
					</div>
				</Col>
				<Col lg={4} md={6}>
					<div className={css.moralItem}>
						<i className="flaticon-thinking" />
						<h4>Trí</h4>
						<p>
							Luôn suy nghĩ cách tối ưu code, tối ưu hệ thống,
							rút gọn quy trình.
							Hiểu rõ và làm chủ công nghệ, không chạy theo trào lưu.
						</p>
					</div>
				</Col>
				<Col lg={4} md={6}>
					<div className={css.moralItem}>
						<i className="flaticon-time-is-money" />
						<h4>Tín</h4>
						<p>
							Xong task đúng deadline.
							Đến meeting đúng giờ.
							Không estimate quá lố thời gian làm task.
						</p>
					</div>
				</Col>
				<Col lg={4} md={6}>
					<div className={css.moralItem}>
						<i className="flaticon-meditation" />
						<h4>Nhẫn</h4>
						<p>
							Gặp bug khó không quạu.
							Không chửi thề khi đọc code của người khác.
							Bình tĩnh trả lời những câu hỏi junior.
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Morals;
