  import React, { Component } from 'react';
import Menu from './Menu';

class MenuList extends Component {
  render () {
    const { menus } = this.props;
    const menuList = menus.map((menu, idx) => (
        <Menu key={idx} title={menu.title} url={menu.url} />
    ));
    
    return menuList;
  }
}

export default MenuList;