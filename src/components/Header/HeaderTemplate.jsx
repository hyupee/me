import React, { useState } from 'react';
import styled from 'styled-components';
import MenuList from './MenuList';
import { Link } from 'react-router-dom';

const mobileOpen = false;

const Header = styled.header`
    width: 100%;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #ddd;
`;

const Navbar = styled.nav`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;

const HeaderTemplate = () => {
	const [menuList] = useState([
		{ title: 'Home', url: '/' },
		{ title: 'Counter', url: '/Counter' },
		{ title: 'Todos', url: '/TodoList' },
	]);

  return (
		<Header>
			<Navbar>
					<h1>
							<Link to="/">
LOGO
							</Link>
					</h1>
					<ul className={ "gnb_list " + (mobileOpen ? 'is_open' : '') }>
							<MenuList menus={menuList} />
					</ul>
					<div className={ "mobile_menu " + (mobileOpen ? 'is_open' : '') }>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
			</Navbar>
		</Header>
  );
}

export default HeaderTemplate;