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
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
                
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>Laptops & computers</span>
                }
            >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu
                key="sub4"
                title={
                    <span>Headphones</span>
                }
            >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub5"
                title={
                    <span>Smartphones</span>
                }
            >
                <Menu.Item key="9">Option 13</Menu.Item>
                <Menu.Item key="10">Option 14</Menu.Item>
                <Menu.Item key="11">Option 15</Menu.Item>
                <Menu.Item key="12">Option 16</Menu.Item>
            </SubMenu>
        </Menu>
    </aside>
)

export default withRouter(Sidebar)