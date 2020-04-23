import React from 'react'
import { Menu, Input } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

const { SubMenu } = Menu
const { Search } = Input

const Header: React.FC = () => (
    <header className="header">
        <Menu mode="horizontal">
            <SubMenu
                title="Articles"
            >
                <Menu.Item key="setting:1">First</Menu.Item>
                <Menu.Item key="setting:2">Second</Menu.Item>
            </SubMenu>
        </Menu>
        <Search
            placeholder="type name of the article"
            size="middle"
            className="search"
            enterButton
        />
        <Menu mode="horizontal">
            <Menu.Item key="alipay">
                <ShoppingCartOutlined />
            </Menu.Item>
        </Menu>
    </header>
)

export default Header;