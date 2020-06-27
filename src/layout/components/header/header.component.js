import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import scss from './header.module.scss';
import imgLogo from '~/assets/images/logo-white-text-200x50.png';


const Header = () => (
	<header id={scss['header-area']}>
		<div id={scss['main-menu']}>
			<Navbar variant="light" expand="lg">
				<div className="container box_1620">
					<Navbar.Brand href="#home">
						<img src={imgLogo} alt="CodeSchool VN" height="50" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarMenu" />
					{/* <button className="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button> */}

					<Navbar.Collapse id="navbarMenu">
						<Nav className="ml-auto">
							<Nav.Item><Nav.Link href="#home" active>Trang chủ</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link href="#home">Giới thiệu</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link href="#home">Portfolio</Nav.Link></Nav.Item>
							<NavDropdown title="Khác" className={scss['dropdown-menu-right']}>
								<NavDropdown.Item href="#action/3.1">Elements</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.1">Liên hệ</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	</header>
);

export default Header;