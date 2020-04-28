import React from 'react'
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { TSidebar } from '../types/types'

const { SubMenu } = Menu

const Sidebar: React.FC<TSidebar> = ({ match }) => (
    <aside className="sidebar">
        <Menu
            mode="inline"
        >
            <SubMenu
                key="sub1"
                title={
                    <span>Electronic devices</span>
                }
                className={match.params.subcategory === 'electronic-devices' ? 'ant-menu-submenu-open ant-menu-submenu-active' : ''}
            >
                <Menu.Item key="1" className={match.params.category === 'headphones' ? 'ant-menu-item-selected': ''}><Link to="/category/electronic-devices/headphones">Headphones</Link></Menu.Item>
                <Menu.Item key="2" className={match.params.category === 'keyboard' ? 'ant-menu-item-selected': ''}><Link to="/category/electronic-devices/keyboard">Keyboards</Link></Menu.Item>
                <Menu.Item key="3" className={match.params.category === 'monitor' ? 'ant-menu-item-selected': ''}><Link to="/category/electronic-devices/monitor">Monitors</Link></Menu.Item> 
            </SubMenu>
        </Menu>
    </aside>
)

export default withRouter(Sidebar)